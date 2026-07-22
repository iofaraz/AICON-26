'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useInView, useScroll, useSpring } from 'motion/react'
import { cn } from '@/lib/utils'

/* Scroll-reveal wrapper with staggered entrance support */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* Top scroll-progress indicator */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left brand-rule"
      aria-hidden="true"
    />
  )
}

/* Eyebrow label used across sections */
export function SectionLabel({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-border brand-chip px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold',
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-gold to-crimson animate-pulse-glow" />
      {children}
    </span>
  )
}
