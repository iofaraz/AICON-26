'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { Reveal, SectionLabel } from './motion-primitives'

const FAQS = [
  {
    q: 'Who is AICON\'26 for?',
    a: 'Students, builders, researchers and tech enthusiasts who want to work on AI innovation, practical hackathons and solution-oriented projects.',
  },
  {
    q: 'Where is the event hosted?',
    a: 'AICON\'26 is hosted at NUST SEECS in Islamabad, with the event experience centered on campus collaboration and student-led execution.',
  },
  {
    q: 'Which groups are organizing it?',
    a: 'The event is organized with support from student bodies like GDGoC, ACM, NEC and NHC.',
  },
  {
    q: 'Can I join without a full team?',
    a: 'Yes. The registration flow can support individuals and teams, so solo builders can still get involved and connect with others.',
  },
  {
    q: 'What kind of work should I expect?',
    a: 'Expect a mix of practical hackathons, idea building, AI-driven demos and technology solutions that are meant to be useful beyond the event.',
  },
]

function Row({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(i === 0)
  return (
    <Reveal delay={i * 0.05}>
      <div className="overflow-hidden rounded-2xl border border-border card-surface">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="font-display text-lg font-medium">{q}</span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border brand-chip text-gold"
          >
            <Plus className="h-4 w-4" />
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mx-6 h-px brand-rule opacity-60" />
              <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                {a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  )
}

export function Faq() {
  return (
    <section id="faq" className="relative mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <div className="text-center">
        <Reveal className="flex justify-center">
          <SectionLabel>FAQ</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Questions, answered.
          </h2>
        </Reveal>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        {FAQS.map((f, i) => (
          <Row key={f.q} q={f.q} a={f.a} i={i} />
        ))}
      </div>
    </section>
  )
}
