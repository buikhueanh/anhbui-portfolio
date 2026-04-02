'use client'

import { useSection } from '@/context/SectionContext'
import { navItems } from '@/data/navigation'

interface Props { xp: number }

export function XPBar({ xp }: Props) {
  const { active } = useSection()
  const zone =
    navItems.find(n => n.id === active)?.zone ?? ''
  return (
    <div style={{
      height: 28, background: 'var(--c-surface-2)',
      borderBottom: '1px solid var(--c-border)',
      display: 'flex', alignItems: 'center',
      gap: 12, padding: '0 20px', flexShrink: 0,
    }}>
      <span style={{
        fontFamily: 'monospace', color: 'var(--c-muted)',
        fontSize: 9, letterSpacing: 2, minWidth: 60,
      }}>XP {xp}/100</span>

      <div style={{
        flex: 1, height: 6,
        background: 'var(--c-border)',
        borderRadius: 3, overflow: 'hidden',
      }}>
        <div style={{
          width: xp + '%', height: '100%',
          background:
            'linear-gradient(90deg,var(--c-primary),var(--c-secondary))',
          borderRadius: 3, transition: 'width 0.5s',
        }} />
      </div>

      <span style={{
        fontFamily: 'monospace', color: 'var(--c-muted)',
        fontSize: 9, letterSpacing: 2,
      }}>{zone}</span>
    </div>
  )
}
