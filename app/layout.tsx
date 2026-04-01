import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: 'Street Smart Investments | Alberta Multi-Family Property Buyers',
  description: 'We buy multi-family properties, apartment buildings, and commercial real estate across Alberta. Direct acquisitions in Lethbridge, Calgary, Edmonton. Fast closing, flexible terms.',
  keywords: 'multi-family property buyers Alberta, apartment building buyers Lethbridge, sell apartment building Calgary, property buyers Edmonton, direct property buyer Alberta, VTB real estate Alberta',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Viewport for mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}