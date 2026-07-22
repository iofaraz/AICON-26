'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Reveal } from './motion-primitives'
import { MagneticButton } from './magnetic-button'

export function Cta() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="register" className="relative overflow-hidden px-6 py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 grid-overlay opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Reveal>
            <span className="font-display text-sm uppercase tracking-[0.3em] text-gold">
              Registration
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight text-balance sm:text-6xl">
              Join the build at AICON&apos;26.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Use the form to share your details and let us know how you want to take
              part. Whether you are coming solo, with a team or representing a club,
              this is the place to start.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-3">
            <MagneticButton href="#tracks" variant="gold">
              Explore Tracks
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#faq" variant="ghost">
              Read FAQ
            </MagneticButton>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-[2rem] border border-border card-surface p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-semibold">Registration form</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Tell us who you are and what kind of participation you want.
                </p>
              </div>
              <span className="rounded-full border border-border bg-gold-soft px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-gold">
                Open
              </span>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <label className="flex flex-col gap-2 sm:col-span-1">
                <span className="text-sm text-muted-foreground">Full name</span>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="rounded-2xl border border-border bg-white/5 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 sm:col-span-1">
                <span className="text-sm text-muted-foreground">Email</span>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="rounded-2xl border border-border bg-white/5 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 sm:col-span-1">
                <span className="text-sm text-muted-foreground">Organization</span>
                <input
                  type="text"
                  placeholder="University / club / company"
                  className="rounded-2xl border border-border bg-white/5 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 sm:col-span-1">
                <span className="text-sm text-muted-foreground">Mode</span>
                <select className="rounded-2xl border border-border bg-white/5 px-4 py-3 text-foreground focus:border-gold focus:outline-none">
                  <option>Individual</option>
                  <option>Team</option>
                  <option>Volunteer</option>
                  <option>Partner</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-sm text-muted-foreground">Why do you want to join?</span>
                <textarea
                  rows={4}
                  placeholder="Tell us what you want to build or learn at AICON'26"
                  className="rounded-2xl border border-border bg-white/5 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
                />
              </label>

              <div className="flex flex-col gap-3 pt-2 sm:col-span-2 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-background transition-shadow hover:shadow-[0_0_40px_-6px_rgba(252,222,88,0.7)]"
                >
                  Submit Registration
                  <CheckCircle2 className="h-4 w-4" />
                </button>
                <a
                  href="#top"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/5 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-gold/50 hover:bg-gold-soft"
                >
                  Back to top
                </a>
              </div>
            </form>

            {submitted && (
              <p className="mt-4 rounded-2xl border border-gold/40 bg-gold-soft px-4 py-3 text-sm text-gold">
                Thanks for registering interest. We&apos;ll route you to the next step when
                the full registration details are live.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
