'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight, Sparkles, MapPin, CalendarDays, Users2 } from 'lucide-react'
import { MagneticButton } from './magnetic-button'

const NeuralCore = dynamic(
  () => import('./neural-core').then((m) => m.NeuralCore),
  { ssr: false },
)

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export function Hero() {
  return (
    <section
      id="top"
      className="hero relative isolate flex min-h-[92vh] items-center overflow-hidden pt-24 pb-12 sm:pt-28"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/aicon/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-background/35" />
      <div className="absolute inset-0 z-[2] grid-overlay" />
      <div className="pointer-events-none absolute inset-0 z-[2] noise opacity-[0.035]" />

      <div className="pointer-events-none absolute -left-32 top-1/4 z-[2] h-[440px] w-[440px] rotate-45 rounded-[3rem] border border-border opacity-35" />
      <div className="pointer-events-none absolute right-[-8rem] top-8 z-[2] h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 z-[2] h-72 w-72 rounded-full bg-crimson/20 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-24 z-[2] h-56 w-56 -translate-x-1/2 rounded-full bg-crimson/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-24 z-[2] h-px brand-rule opacity-50" />

      <div className="relative z-[3] mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border brand-chip px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              <Sparkles className="h-3.5 w-3.5" />
              NUST SEECS x GDGoC x ACM x NEC x NHC
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-6xl font-bold leading-[0.92] tracking-tight text-balance sm:text-7xl lg:text-8xl"
          >
            <span className="text-gradient-gold">AICON</span>
            <span className="text-gold">&apos;26</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 font-display text-xl font-medium text-foreground sm:text-2xl"
          >
            A premier AI hackathon and tech event at NUST SEECS, Islamabad.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground"
          >
            Built for students who want to turn ideas into working AI solutions,
            AICON&apos;26 brings together practical hackathons, hands-on innovation,
            campus energy and collaboration across NUST&apos;s student tech community.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticButton href="#register" variant="gold">
              Register Now
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#about" variant="ghost">
              Explore Event
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 grid gap-3 sm:grid-cols-3"
          >
            <div className="rounded-2xl border border-border bg-white/5 px-4 py-3 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-sm font-medium text-gold">
                <MapPin className="h-4 w-4" />
                NUST SEECS
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Islamabad, Pakistan</p>
            </div>
            <div className="rounded-2xl border border-border bg-white/5 px-4 py-3 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-sm font-medium text-gold">
                <Users2 className="h-4 w-4" />
                Student-led
              </div>
              <p className="mt-1 text-xs text-muted-foreground">GDGoC, ACM, NEC, NHC</p>
            </div>
            <div className="rounded-2xl border border-border bg-white/5 px-4 py-3 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-sm font-medium text-gold">
                <CalendarDays className="h-4 w-4" />
                Upcoming
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Registration details soon</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.86 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative mx-auto aspect-square w-full max-w-[500px]"
        >
          <div className="absolute inset-0 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute inset-[12%] rounded-full bg-crimson/10 blur-3xl" />
          <div className="absolute inset-0 animate-float-slow">
            <NeuralCore />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 z-[3] -translate-x-1/2"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-border p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY }}
            className="h-1.5 w-1.5 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  )
}
