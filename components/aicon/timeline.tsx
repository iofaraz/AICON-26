'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { Reveal, SectionLabel } from './motion-primitives'

const STEPS = [
  { t: 'Announcement', d: 'Theme, format and event identity go public.', date: 'Phase 1' },
  { t: 'Registration', d: 'Teams and individual builders sign up.', date: 'Phase 2' },
  { t: 'Mentor Prep', d: 'Briefings, resources and pre-hack support are shared.', date: 'Phase 3' },
  { t: 'Hackathon Sprint', d: 'Teams build, test and iterate on their solutions.', date: 'Phase 4' },
  { t: 'Showcase', d: 'Demos, judging and live presentation time.', date: 'Phase 5' },
  { t: 'Awards', d: 'Winning ideas and standout teams are celebrated.', date: 'Phase 6' },
]

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <section id="schedule" className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal className="flex justify-center">
          <SectionLabel>Timeline</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            The road to AICON&apos;26.
          </h2>
        </Reveal>
      </div>

      <div ref={ref} className="relative mx-auto mt-12 max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />
        <motion.div
          style={{ scaleY }}
          className="absolute left-4 top-0 h-full w-px origin-top bg-gold shadow-[0_0_14px_2px_rgba(252,222,88,0.6)] md:left-1/2"
        />

        <ul className="space-y-8">
          {STEPS.map((s, i) => {
            const right = i % 2 === 1
            return (
              <li key={s.t} className="relative">
                <Reveal delay={0.05}>
                  <div
                    className={`flex items-center gap-6 pl-12 md:pl-0 ${
                      right ? 'md:flex-row-reverse md:text-left' : 'md:text-right'
                    }`}
                  >
                    <span className="absolute left-4 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2">
                      <span className="absolute h-4 w-4 animate-pulse-glow rounded-full bg-gold/40" />
                      <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                    </span>

                    <div className="w-full md:w-1/2">
                      <div className="rounded-2xl border border-border card-surface p-5 transition-colors duration-300 hover:border-gold/40">
                        <span className="text-xs font-medium uppercase tracking-wider text-gold">
                          {s.date}
                        </span>
                        <h3 className="mt-1 font-display text-xl font-semibold">
                          {s.t}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
