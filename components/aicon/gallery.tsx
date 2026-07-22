'use client'

import Image from 'next/image'
import { Reveal, SectionLabel } from './motion-primitives'

const IMAGES = [
  { src: '/aicon/gallery-1.png', alt: 'Conference stage and audience', span: 'sm:col-span-2 sm:row-span-2' },
  { src: '/aicon/gallery-2.png', alt: 'Hackathon coding session', span: '' },
  { src: '/aicon/gallery-3.png', alt: 'Technical showcase moment', span: '' },
  { src: '/aicon/gallery-4.png', alt: 'Networking at a tech event', span: '' },
  { src: '/aicon/gallery-5.png', alt: 'Speaker presentation moment', span: 'sm:col-span-2' },
  { src: '/aicon/gallery-6.png', alt: 'Award celebration scene', span: '' },
]

export function Gallery() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="max-w-2xl">
        <Reveal>
          <SectionLabel>Gallery</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Moments that feel like momentum.
          </h2>
        </Reveal>
      </div>

      <div className="mt-10 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-3">
        {IMAGES.map((img, i) => (
          <Reveal
            key={img.src}
            delay={(i % 3) * 0.06}
            className={`group relative overflow-hidden rounded-2xl border border-border ${img.span}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />
            <span className="absolute inset-0 ring-1 ring-inset ring-gold/0 transition-all duration-300 group-hover:ring-gold/40" />
            <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-gold via-gold to-crimson opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
