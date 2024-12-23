'use client'
import { cn } from '@/lib/utils'
import { motion, useMotionValue, useScroll, useSpring } from 'framer-motion'
import React from 'react'

interface ScrollProgressProps {
  className?: string
}

export default function ScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 50,
    restDelta: 0.001,
  })

  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <motion.div
      className={cn(
        'fixed inset-x-0 top-0 z-[1000] h-1 origin-left bg-gradient-to-r from-[#acf87c] via-[#9de520] to-[#ffe018]',
        className
      )}
      style={{
        scaleX,
      }}
    />
  )
}
