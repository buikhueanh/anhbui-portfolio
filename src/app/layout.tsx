import type { Metadata } from 'next'
import { SectionProvider } from '@/context/SectionContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anh Bui — Build. Analyze. Ship.',
  description:
    'CS + Business student crafting full-stack, AI, and data-driven products.',
  openGraph: {
    title: 'Anh Bui — Build. Analyze. Ship.',
    description:
      'Projects in software, AI, data, and product.',
    images: ['/profile-image.jpg'],
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
