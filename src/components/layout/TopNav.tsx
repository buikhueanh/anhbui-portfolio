'use client'

import { useSection } from '@/context/SectionContext'
import { navItems } from '@/data/navigation'

export function TopNav() {
  const { active, go } = useSection()
  return (
    <nav style={{
      background: 'var(--c-bg)',
      borderBottom: '1px solid var(--c-border)',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px', height: 48, flexShrink: 0,
    }}>
      <span style={{
        fontFamily: 'monospace', color: 'var(--c-primary)',
        fontSize: 12, letterSpacing: 3,
      }}>PF.EXE</span>

      <div style={{ display: 'flex', gap: 2 }}>
        {navItems.map(n => (
          <button key={n.id} onClick={() => go(n.id)}
            style={{
              background: active === n.id
                ? 'var(--c-surface)' : 'transparent',
              border: active === n.id
                ? '1px solid var(--c-border-hi)'
                : '1px solid transparent',
              color: active === n.id
                ? 'var(--c-light)' : 'var(--c-muted)',
              padding: '5px 11px', borderRadius: 5,
              cursor: 'pointer', fontSize: 12,
              fontFamily: 'inherit',
            }}>
            {n.label}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <div style={{
          width: 7, height: 7, borderRadius: '50%',
          background: 'var(--c-highlight)',
        }} />
        <span style={{
          fontFamily: 'monospace', color: 'var(--c-muted)', fontSize: 10,
        }}>OPEN TO WORK</span>
      </div>
    </nav>
  )
}
