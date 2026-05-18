import type { Metadata, Viewport } from 'next'
import { Libre_Franklin, Merriweather } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const libreFranklin = Libre_Franklin({ 
  subsets: ["latin"],
  variable: '--font-sans',
});

const merriweather = Merriweather({ 
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'AgriLearn - Learning Center for Farmers',
  description: 'Access expert tutorials on plantation, pest prevention, and connect with government mentors for agricultural guidance.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2d5a27' },
    { media: '(prefers-color-scheme: dark)', color: '#1a3318' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${libreFranklin.variable} ${merriweather.variable} font-sans antialiased bg-background`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
