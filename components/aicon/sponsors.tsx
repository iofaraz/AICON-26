import { Reveal, SectionLabel } from './motion-primitives'

const PARTNERS = [
  'GDGoC',
  'ACM',
  'NEC',
  'NHC',
  'NUST SEECS',
  'Faculty Mentors',
  'Student Builders',
  'Community Partners',
]

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-14 pr-14">
      {PARTNERS.map((s) => (
        <span
          key={s}
          className="whitespace-nowrap font-display text-2xl font-semibold text-muted-foreground/70 transition-colors duration-300 hover:text-gold"
        >
          {s}
        </span>
      ))}
    </div>
  )
}

export function Sponsors() {
  return (
    <section id="partners-marquee" className="relative py-14">
      <div className="mx-auto mb-8 max-w-6xl px-6">
        <Reveal className="flex flex-col items-center text-center">
          <SectionLabel>Partners &amp; Collaborators</SectionLabel>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
            AICON&apos;26 is being shaped with the communities and student bodies that
            make campus tech culture move.
          </p>
        </Reveal>
      </div>

      <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          <Row />
          <Row />
        </div>
      </div>
    </section>
  )
}
