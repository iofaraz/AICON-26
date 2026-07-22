import Image from 'next/image'
import { Reveal, SectionLabel } from './motion-primitives'

const PILLARS = [
  { k: 'AI Innovation', v: 'Build practical solutions that solve real problems.' },
  { k: 'Hackathon Focus', v: 'Ship prototypes with mentors, deadlines and demos.' },
  { k: 'Student-led', v: 'Powered by GDGoC, ACM, NEC and NHC at NUST SEECS.' },
]

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <Reveal>
            <SectionLabel>About AICON</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
              A flagship AI gathering for builders, thinkers and problem solvers.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              AICON&apos;26 is an upcoming premier AI hackathon and tech event hosted at
              NUST SEECS in Islamabad. It is organized in collaboration with student
              bodies like GDGoC, ACM, NEC and NHC to create a high-energy space for
              experimentation, teamwork and impact.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              What to expect: a massive gathering focused on AI innovation, practical
              hackathons and technology solutions that feel useful in the real world, not
              just polished in a pitch deck.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {PILLARS.map((p) => (
                <div
                  key={p.k}
                  className="rounded-2xl border border-border bg-gold-soft/40 p-4"
                >
                  <dt className="font-display text-base font-semibold text-gold">
                    {p.k}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                    {p.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative">
          <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gold/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border card-surface">
            <Image
              src="/aicon/about-core.png"
              alt="Abstract glowing AI core"
              width={720}
              height={720}
              className="h-full w-full object-cover"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#122fa8]/70 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-border bg-[#122fa8]/85 px-5 py-4 backdrop-blur-xl">
            <p className="font-display text-2xl font-bold text-gold">SEECS</p>
            <p className="text-xs text-muted-foreground">Home base for AICON&apos;26</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
