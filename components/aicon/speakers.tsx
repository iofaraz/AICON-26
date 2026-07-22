'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ShieldCheck } from 'lucide-react'
import { Reveal, SectionLabel } from './motion-primitives'

const ORGANIZERS = [
  {
    name: 'GDGoC',
    role: 'Developer community partner',
    org: 'Hands-on sessions, community energy and builder support.',
    img: '/aicon/speaker-1.png',
  },
  {
    name: 'ACM',
    role: 'Technical community partner',
    org: 'Engineering mindset, problem solving and collaborative growth.',
    img: '/aicon/speaker-2.png',
  },
  {
    name: 'NEC',
    role: 'Campus innovation partner',
    org: 'Student-led execution that keeps the event grounded and useful.',
    img: '/aicon/speaker-3.png',
  },
  {
    name: 'NHC',
    role: 'Creative community partner',
    org: 'Fresh ideas, event culture and a strong participant experience.',
    img: '/aicon/speaker-4.png',
  },
]

export function Speakers() {
  return (
    <section id="partners" className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>Organizing Circle</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              Powered by the communities behind the event.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            AICON&apos;26 is being shaped with student bodies and campus collaborators,
            which keeps the experience close to what builders actually need.
          </p>
        </Reveal>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ORGANIZERS.map((sp, i) => (
          <Reveal key={sp.name} delay={i * 0.08}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-border card-surface"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={sp.img}
                  alt={`Visual for ${sp.name}`}
                  width={480}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/70 text-gold backdrop-blur-md">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 brand-rule opacity-70" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-lg font-semibold">{sp.name}</h3>
                <p className="text-sm text-gold">{sp.role}</p>
                <p className="text-xs text-muted-foreground">{sp.org}</p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
