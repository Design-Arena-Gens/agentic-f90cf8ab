import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'A Little Girl\'s Dream',
  description: 'A heartwarming story of hope and dreams',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
