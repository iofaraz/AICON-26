import { ScrollProgress } from '@/components/aicon/motion-primitives'
import { Navbar } from '@/components/aicon/navbar'
import { Hero } from '@/components/aicon/hero'
import { About } from '@/components/aicon/about'
import { Highlights } from '@/components/aicon/highlights'
import { Tracks } from '@/components/aicon/tracks'
import { Timeline } from '@/components/aicon/timeline'
import { Speakers } from '@/components/aicon/speakers'
import { Stats } from '@/components/aicon/stats'
import { Gallery } from '@/components/aicon/gallery'
import { Sponsors } from '@/components/aicon/sponsors'
import { Faq } from '@/components/aicon/faq'
import { Cta } from '@/components/aicon/cta'
import { Footer } from '@/components/aicon/footer'

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="relative bg-aicon">
        <Hero />
        <About />
        <Highlights />
        <Tracks />
        <Timeline />
        <Speakers />
        <Stats />
        <Gallery />
        <Sponsors />
        <Cta />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
