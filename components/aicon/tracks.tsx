'use client'

import { motion } from 'motion/react'
import { Reveal, SectionLabel } from './motion-primitives'

const TRACKS = [
  { n: '01', t: 'Smart Campus', d: 'Build tools that make campus life faster, simpler and more connected.' },
  { n: '02', t: 'Health AI', d: 'Create workflows that support better diagnosis, triage and care.' },
  { n: '03', t: 'EdTech', d: 'Reimagine learning experiences for students, educators and mentors.' },
  { n: '04', t: 'Climate & Civic', d: 'Use AI for climate resilience, public service and community impact.' },
  { n: '05', t: 'Productivity Agents', d: 'Design copilots, assistants and automations that actually save time.' },
  { n: '06', t: 'Security & Trust', d: 'Explore safe AI, responsible deployment and digital resilience.' },
]

export function Tracks() {
  return (
    <section id="tracks" className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 grid-overlay opacity-55" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>Challenge Tracks</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              Pick a problem worth solving.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              AICON&apos;26 is designed around practical outcomes, so every track is
              framed around real use cases, not abstract buzzwords.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map((tr, i) => (
            <Reveal key={tr.n} delay={(i % 3) * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-white/[0.02] p-5 transition-colors duration-300 hover:border-gold/40 hover:bg-gold-soft"
              >
                <span className="font-display text-sm font-semibold text-gold/70">
                  {tr.n}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug">
                  {tr.t}
                </h3>
                <p className="mt-1.5 text-xs leading-snug text-muted-foreground">
                  {tr.d}
                </p>
                <span className="mt-4 block h-px w-8 bg-gradient-to-r from-gold via-gold to-crimson transition-all duration-300 group-hover:w-full" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
