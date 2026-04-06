import type { Metadata } from 'next'
import { SectionProvider } from '@/context/SectionContext'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Enter my World: Anh Bui',
  description:
    'CS + Business student crafting full-stack, AI, and data-driven products.',
  openGraph: {
    title: 'Enter my World: Anh Bui',
    description:
      'Projects in software, AI, data, and product.',
    images: [`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/laptop-wave.png`],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SectionProvider>
          {children}
        </SectionProvider>
      </body>
    </html>
  )
}
