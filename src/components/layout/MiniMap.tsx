'use client'

import { useEffect, useState } from 'react'
import { useSection } from '@/context/SectionContext'
import { navItems } from '@/data/navigation'
import { createPortal } from 'react-dom'

export function MiniMap() {
  const { active, go } = useSection()

  // Prevent hydration mismatches: on the server there is no `document`, and
  // portals can't render. Render nothing until after the component mounts.
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  if (typeof document === 'undefined') return null

  return createPortal(
    <div className="fixed right-3 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-1.5 xl:flex">
      {navItems.map((n) => (
        <div
          key={n.id}
          onClick={() => go(n.id)}
          title={n.label}
          style={{
            width: active === n.id ? 20 : 7,
            height: 7,
            borderRadius: 4,
            cursor: 'pointer',
            background: active === n.id ? 'var(--c-primary)' : 'var(--c-border-hi)',
            transition: 'all 0.25s',
          }}
        />
      ))}
    </div>,
    document.body
  )
}
