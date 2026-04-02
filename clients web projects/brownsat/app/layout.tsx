import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: {
    default: 'Browns Healthcare | Healthcare Recruitment Specialists',
    template: '%s | Browns Healthcare',
  },
  description: 'Browns Healthcare connects skilled healthcare professionals with leading care facilities across the UK. Find your next nursing, care assistant, or support worker role today.',
  keywords: ['healthcare recruitment', 'nursing jobs', 'care assistant jobs', 'healthcare staffing', 'UK healthcare', 'care home jobs'],
  authors: [{ name: 'Browns Healthcare' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Browns Healthcare',
    title: 'Browns Healthcare | Healthcare Recruitment Specialists',
    description: 'Connecting skilled healthcare professionals with leading care facilities across the UK.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Browns Healthcare | Healthcare Recruitment Specialists',
    description: 'Connecting skilled healthcare professionals with leading care facilities across the UK.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d9488',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Toaster position="top-right" richColors />
        <Analytics />
      </body>
    </html>
  )
}
