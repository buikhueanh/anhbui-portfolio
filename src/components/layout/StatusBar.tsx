'use client'

import { useSection } from '@/context/SectionContext'
import { navItems } from '@/data/navigation'

interface Props { xp: number }

export function StatusBar({ xp }: Props) {
  const { active, go } = useSection()
  return (
    <div style={{
      background: 'var(--c-surface-2)',
      borderTop: '1px solid var(--c-border)',
      padding: '8px 20px',
      display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', flexShrink: 0,
    }}>
      <span style={{
        fontFamily: 'monospace', color: 'var(--c-muted)',
        fontSize: 9, letterSpacing: 2,
      }}>PORTFOLIO.EXE v2025.1</span>

      <div className="hidden md:flex" style={{ gap: 6 }}>
        {navItems.map(n => (
          <div key={n.id} onClick={() => go(n.id)}
            title={n.label}
            style={{
              width: 6, height: 6, borderRadius: '50%',
              background: active === n.id
                ? 'var(--c-primary)' : 'var(--c-border)',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }} />
        ))}
      </div>

      <span style={{
        fontFamily: 'monospace', color: 'var(--c-muted)', fontSize: 9,
      }}>XP {xp}/100</span>
    </div>
  )
}
