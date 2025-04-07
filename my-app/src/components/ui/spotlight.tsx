"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export const Spotlight = ({
  children,
  className,
  size = 600,
  strength = 0.2,
}: {
  children: React.ReactNode
  className?: string
  size?: number
  strength?: number
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
    if (!containerRef.current) return

    const container = containerRef.current
    const rect = container.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setPosition({ x, y })
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener("mousemove", handleMouseMove as any)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove as any)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <AnimatePresence>
        <motion.div
          className="pointer-events-none absolute -inset-px z-0"
          style={{
            background: `radial-gradient(circle ${size}px at ${position.x}px ${position.y}px, rgba(var(--spotlight-color), ${strength}), transparent)`,
            "--spotlight-color": "14, 165, 233",
          } as React.CSSProperties}
          animate={{
            opacity,
          }}
          transition={{
            duration: 0.2,
          }}
        />
      </AnimatePresence>
      {children}
    </div>
  )
}

