"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface WaterBalloonEffectProps {
  className?: string
  children?: React.ReactNode
  balloonCount?: number
  primaryColor?: string
  secondaryColor?: string
}

export function WaterBalloonEffect({
  className,
  children,
  balloonCount = 15,
  primaryColor = "rgba(59, 130, 246, 0.6)",
  secondaryColor = "rgba(96, 165, 250, 0.4)",
}: WaterBalloonEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const balloons = useRef<Balloon[]>([])
  const animationRef = useRef<number | null>(null)

  interface Balloon {
    x: number
    y: number
    radius: number
    dx: number
    dy: number
    color: string
    splashed: boolean
    splashProgress: number
    splashRadius: number
    splashDrops: { x: number; y: number; radius: number; dx: number; dy: number }[]
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize balloons
    balloons.current = []
    for (let i = 0; i < balloonCount; i++) {
      const radius = Math.random() * 20 + 10
      balloons.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        color: Math.random() > 0.5 ? primaryColor : secondaryColor,
        splashed: false,
        splashProgress: 0,
        splashRadius: radius * 2,
        splashDrops: Array.from({ length: 8 }).map(() => ({
          x: 0,
          y: 0,
          radius: Math.random() * 5 + 2,
          dx: (Math.random() - 0.5) * 4,
          dy: (Math.random() - 0.5) * 4,
        })),
      })
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw balloons
      balloons.current.forEach((balloon, index) => {
        if (balloon.splashed) {
          // Draw splash effect
          balloon.splashProgress += 0.02

          if (balloon.splashProgress < 1) {
            balloon.splashDrops.forEach((drop) => {
              drop.x += drop.dx
              drop.y += drop.dy

              ctx.beginPath()
              ctx.arc(
                balloon.x + drop.x * balloon.splashProgress * 10,
                balloon.y + drop.y * balloon.splashProgress * 10,
                drop.radius * (1 - balloon.splashProgress),
                0,
                Math.PI * 2,
              )
              ctx.fillStyle = balloon.color
              ctx.fill()
            })
          } else {
            // Reset balloon after splash is complete
            balloon.splashed = false
            balloon.splashProgress = 0
            balloon.x = Math.random() * canvas.width
            balloon.y = Math.random() * canvas.height
          }
        } else {
          // Move balloon
          balloon.x += balloon.dx
          balloon.y += balloon.dy

          // Bounce off walls
          if (balloon.x - balloon.radius < 0 || balloon.x + balloon.radius > canvas.width) {
            balloon.dx = -balloon.dx
          }

          if (balloon.y - balloon.radius < 0 || balloon.y + balloon.radius > canvas.height) {
            balloon.dy = -balloon.dy
          }

          // Check collision with other balloons
          for (let j = index + 1; j < balloons.current.length; j++) {
            const otherBalloon = balloons.current[j]
            if (otherBalloon.splashed) continue

            const dx = otherBalloon.x - balloon.x
            const dy = otherBalloon.y - balloon.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < balloon.radius + otherBalloon.radius) {
              // Collision detected - splash both balloons
              balloon.splashed = true
              otherBalloon.splashed = true

              // Set splash origin
              otherBalloon.splashDrops.forEach((drop) => {
                drop.x = (Math.random() - 0.5) * 2
                drop.y = (Math.random() - 0.5) * 2
              })

              balloon.splashDrops.forEach((drop) => {
                drop.x = (Math.random() - 0.5) * 2
                drop.y = (Math.random() - 0.5) * 2
              })
            }
          }

          // Draw balloon
          ctx.beginPath()
          ctx.arc(balloon.x, balloon.y, balloon.radius, 0, Math.PI * 2)
          ctx.fillStyle = balloon.color
          ctx.fill()
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [balloonCount, primaryColor, secondaryColor])

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
