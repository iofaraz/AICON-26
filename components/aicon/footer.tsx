'use client'

import { useState } from 'react'
import { Globe, AtSign, Send, Share2, ArrowUp, ArrowRight } from 'lucide-react'
import { AiconWordmark } from './logo'

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Timeline', href: '#schedule' },
  { label: 'Partners', href: '#partners' },
  { label: 'Register', href: '#register' },
]

const SOCIALS = [
  { icon: AtSign, href: '#', label: 'X / Twitter' },
  { icon: Share2, href: '#', label: 'LinkedIn' },
  { icon: Globe, href: '#', label: 'Website' },
  { icon: Send, href: '#', label: 'Contact' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <footer className="relative border-t border-border">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent,rgba(7,28,115,0.28))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px brand-rule opacity-60" />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr_1.2fr]">
          <div>
            <AiconWordmark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              AICON&apos;26 is the upcoming AI hackathon and tech event at NUST SEECS,
              Islamabad, organized with GDGoC, ACM, NEC and NHC.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-crimson/50 hover:text-gold"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
              Explore
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
              Get Updates
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Leave your email to hear about registration and event updates.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (email) setSent(true)
              }}
              className="mt-4 flex items-center gap-2 rounded-full border border-border bg-white/[0.02] p-1.5 pl-4 focus-within:border-gold/50"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@nust.edu.pk"
                aria-label="Email address"
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-background transition-transform hover:scale-105"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            {sent && (
              <p className="mt-3 text-xs text-gold">Thanks - you&apos;re on the list.</p>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {`${new Date().getFullYear()} `}AICON&apos;26 · NUST SEECS. All rights reserved.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-gold"
          >
            Back to top
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors group-hover:border-gold/50">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
