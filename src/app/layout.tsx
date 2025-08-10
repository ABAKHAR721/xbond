import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

// app/layout.tsx
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'xBond — AI Outreach & Lead Systems',
  description: 'xBond builds AI-powered outreach pipelines, lead nurturing automations, and custom acquisition workflows.',
  metadataBase: new URL('https://xbond.io'),
  openGraph: {
    title: 'xBond — AI Outreach & Lead Systems',
    description: 'Done-for-you strategy, build, and implementation of lead systems.',
    url: 'https://xbond.io',
    siteName: 'xBond',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'xBond — AI Outreach & Lead Systems',
    description: 'Consistent, automated client acquisition.',
    images: ['/og.png'],
  }
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

