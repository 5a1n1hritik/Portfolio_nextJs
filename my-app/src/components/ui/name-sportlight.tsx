"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { cn } from "@/lib/utils"

export const NameSpotlight = ({
  children,
  className,
  highlightClassName,
}: {
  children: React.ReactNode
  className?: string
  highlightClassName?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const animateSpotlight = () => {
      if (!containerRef.current || !spotlightRef.current) return

      // Get the container dimensions
      const containerRect = containerRef.current.getBoundingClientRect()

      // Position the spotlight in the center of the container
      const spotlightX = containerRect.width / 2
      const spotlightY = containerRect.height / 2

      // Set the spotlight size based on container width
      const size = Math.max(containerRect.width * 0.8, 150)

      // Update the spotlight position and size
      if (spotlightRef.current) {
        spotlightRef.current.style.width = `${size}px`
        spotlightRef.current.style.height = `${size}px`
        spotlightRef.current.style.left = `${spotlightX - size / 2}px`
        spotlightRef.current.style.top = `${spotlightY - size / 2}px`
      }

      // Animate the spotlight
      controls.start({
        opacity: [0.7, 1, 0.7],
        scale: [0.95, 1.05, 0.95],
        transition: {
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      })
    }

    animateSpotlight()
    window.addEventListener("resize", animateSpotlight)

    return () => {
      window.removeEventListener("resize", animateSpotlight)
    }
  }, [controls])

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <motion.div
        ref={spotlightRef}
        className={cn(
          "absolute rounded-full pointer-events-none",
          "bg-gradient-radial from-primary/30 via-transparent to-transparent",
          highlightClassName,
        )}
        animate={controls}
      />
      {children}
    </div>
  )
}

