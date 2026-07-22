import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "AICON'26 - AI, innovation and builders at NUST SEECS",
  description:
    'AICON\'26 is an upcoming AI hackathon and tech event at NUST SEECS, Islamabad, organized with GDGoC, ACM, NEC and NHC to showcase practical AI innovation and real-world solutions.',
  generator: 'v0.app',
  keywords: [
    'AICON',
    'AICON 2026',
    'AI hackathon',
    'NUST',
    'SEECS',
    'Islamabad',
    'hackathon',
    'machine learning',
    'generative AI',
  ],
  openGraph: {
    title: "AICON'26 - AI, innovation and builders at NUST SEECS",
    description:
      'An upcoming AI hackathon and tech event at NUST SEECS, Islamabad.',
    type: 'website',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#122FA8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
