'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { AiconWordmark } from './logo'
import { cn } from '@/lib/utils'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Timeline', href: '#schedule' },
  { label: 'Partners', href: '#partners' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          'flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5',
          scrolled
            ? 'border border-border bg-[#122fa8]/78 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.55)]'
            : 'border border-transparent',
        )}
      >
        <a href="#top" aria-label="AICON 2026 home">
          <AiconWordmark />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute inset-x-4 -bottom-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#register"
            className="group hidden items-center gap-1.5 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-background transition-shadow duration-300 hover:shadow-[0_0_30px_-4px_rgba(252,222,88,0.7)] sm:inline-flex"
          >
            Register
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-x-4 top-20 rounded-2xl border border-border bg-[#122fa8]/95 p-4 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base text-muted-foreground hover:bg-gold-soft hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#register"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-xl bg-gold px-4 py-3 text-center text-base font-semibold text-background"
                >
                  Register Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
