import type { Metadata } from 'next'
import { Inter } from 'next/font/google' // Change Geist to Inter
import { Analytics } from '@vercel/analytics/next'
import 'globals.css'

const inter = Inter({ subsets: ['latin'] }) // Use Inter here  

export const metadata: Metadata = {
  title: 'FarmConnect - Community & Future Scope',
  description: 'Connect with farmers, share success stories, and explore the future of agriculture with AI automation and financial support',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body> 
    </html>
  )
}