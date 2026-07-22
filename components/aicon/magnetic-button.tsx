'use client'

import { useRef, useState, type ReactNode, type MouseEvent } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

type Props = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'gold' | 'ghost'
  className?: string
  strength?: number
}

/* Magnetic hover button with ripple + glow. Renders an anchor when href is set. */
export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'gold',
  className,
  strength = 0.35,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  function handleMove(e: MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * strength
    const y = (e.clientY - rect.top - rect.height / 2) * strength
    setPos({ x, y })
  }

  const base =
    'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 will-change-transform'
  const variants = {
    gold: 'bg-gold text-background hover:shadow-[0_0_40px_-6px_rgba(244,211,94,0.65)]',
    ghost:
      'border border-border bg-white/[0.02] text-foreground backdrop-blur-sm hover:border-gold/50 hover:bg-gold-soft',
  }

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.4 }}
      className={cn(base, variants[variant], className)}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'gold' && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block">
        {inner}
      </a>
    )
  }
  return (
    <button type="button" onClick={onClick} className="inline-block">
      {inner}
    </button>
  )
}
