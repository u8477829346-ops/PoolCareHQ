import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Nunito, Fraunces } from 'next/font/google'
import { CookieConsent } from '@/components/cookie-consent'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'PoolCareHQ — Pool Maintenance, Water Chemistry & Equipment Guides',
    template: '%s | PoolCareHQ',
  },
  description:
    'Practical, trustworthy guides on pool maintenance, water chemistry, equipment, common problems, and seasonal start-up. Includes a free chlorine calculator.',
  keywords: [
    'pool maintenance',
    'water chemistry',
    'how much chlorine to add to a pool',
    'green pool water',
    'robotic pool cleaner',
    'salt chlorinator',
  ],
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1f9cc9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${fraunces.variable} bg-background`}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7848808705241042"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased">
        <CookieConsent />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
