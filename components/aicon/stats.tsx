'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'
import { Reveal } from './motion-primitives'

const STATS = [
  { value: 4, suffix: '+', label: 'Student bodies' },
  { value: 1, suffix: '', label: 'Campus venue' },
  { value: 3, suffix: '+', label: 'Core experiences' },
  { value: 100, suffix: '%', label: 'Hands-on focus' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1600
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className="font-display text-5xl font-bold text-gradient-gold sm:text-6xl">
      {display}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="relative overflow-hidden py-14">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent,rgba(18,47,168,0.35),transparent)]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-6 rounded-[2rem] border border-border card-surface px-6 py-10 sm:px-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-2 text-sm uppercase tracking-[0.15em] text-muted-foreground">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
