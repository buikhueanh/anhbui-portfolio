'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import type { SectionId } from '@/types'

interface SectionContextValue {
  active: SectionId
  go: (id: SectionId) => void
}

const SectionContext = createContext<SectionContextValue | null>(null)

export function SectionProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<SectionId>('hero')

  return (
    <SectionContext.Provider value={{ active, go: setActive }}>
      {children}
    </SectionContext.Provider>
  )
}

export function useSection(): SectionContextValue {
  const ctx = useContext(SectionContext)
  if (!ctx)
    throw new Error('useSection must be inside SectionProvider')
  return ctx
}
