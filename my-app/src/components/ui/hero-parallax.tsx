"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

export const HeroParallax = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    setWindowHeight(window.innerHeight)

    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const springConfig = { stiffness: 300, damping: 40, bounce: 0 }

  const parallaxY = useSpring(useTransform(scrollYProgress, [0, 1], [0, windowHeight * 0.5]), springConfig)

  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0]), springConfig)

  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0.9]), springConfig)

  return (
    <motion.div ref={ref} className={cn("relative overflow-hidden", className)} style={{ opacity }}>
      <motion.div style={{ y: parallaxY, scale }} className="will-change-transform">
        {children}
      </motion.div>
    </motion.div>
  )
}

