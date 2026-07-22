'use client'

import {
  Code2,
  Lightbulb,
  Users,
  Trophy,
  Rocket,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import { motion } from 'motion/react'
import { Reveal, SectionLabel } from './motion-primitives'

type Item = {
  icon: LucideIcon
  title: string
  desc: string
}

const ITEMS: Item[] = [
  {
    icon: Lightbulb,
    title: 'AI Innovation',
    desc: 'Explore new ideas, creative use cases and smart products built for impact.',
  },
  {
    icon: Code2,
    title: 'Practical Hackathons',
    desc: 'Move from concept to prototype with focused build sessions and clear goals.',
  },
  {
    icon: Users,
    title: 'Student Collaboration',
    desc: 'Work side by side with peers from GDGoC, ACM, NEC and NHC.',
  },
  {
    icon: Rocket,
    title: 'Tech Solutions',
    desc: 'Design tools that are useful, scalable and relevant to Pakistan&apos;s tech scene.',
  },
  {
    icon: ShieldCheck,
    title: 'Mentorship Support',
    desc: 'Get guidance from mentors who can help refine ideas and unblock teams.',
  },
  {
    icon: Trophy,
    title: 'Showcase Energy',
    desc: 'End the journey with demos, judging and the kind of momentum that sticks.',
  },
]

export function Highlights() {
  return (
    <section
      id="highlights"
      className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20"
    >
      <div className="max-w-2xl">
        <Reveal>
          <SectionLabel>Event Highlights</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Built for people who want to build, not just browse.
          </h2>
        </Reveal>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.06}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative h-full overflow-hidden rounded-2xl border border-border card-surface p-6"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-crimson/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border brand-chip text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-background">
                <it.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {it.desc}
              </p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
