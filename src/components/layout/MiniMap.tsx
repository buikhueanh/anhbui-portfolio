'use client'

import { useSection } from '@/context/SectionContext'
import { navItems } from '@/data/navigation'

export function MiniMap() {
  const { active, go } = useSection()
  return (
    <div style={{
      position: 'absolute', right: 14, top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex', flexDirection: 'column',
      gap: 6, zIndex: 20,
    }}>
      {navItems.map(n => (
        <div key={n.id} onClick={() => go(n.id)}
          title={n.label}
          style={{
            width: active === n.id ? 20 : 7,
            height: 7, borderRadius: 4,
            cursor: 'pointer',
            background: active === n.id
              ? 'var(--c-primary)' : 'var(--c-border-hi)',
            transition: 'all 0.25s',
          }} />
      ))}
    </div>
  )
}
