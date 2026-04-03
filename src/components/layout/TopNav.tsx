'use client'

import { useSection } from '@/context/SectionContext'
import { navItems } from '@/data/navigation'

export function TopNav() {
  const { active, go } = useSection()
  return (
    <nav
      className="flex h-16 flex-shrink-0 items-center justify-between gap-3 border-b px-4 md:px-7"
      style={{
        background: 'var(--c-bg)',
        borderColor: 'var(--c-border)',
      }}
    >
      <button
        type="button"
        onClick={() => go('hero')}
        className="shrink-0"
        style={{
          background: 'transparent',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          fontFamily: 'monospace',
          color: 'var(--c-primary)',
          fontSize: 18,
          letterSpacing: 3,
        }}
      >
        PF.EXE
      </button>

      <div
        className="flex min-w-0 flex-1 gap-1 overflow-x-auto"
        style={{
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {navItems.map(n => (
          <button key={n.id} onClick={() => go(n.id)}
            className="shrink-0 rounded-md px-3 py-1.5 text-base md:px-4 md:py-2 md:text-lg"
            style={{
              background: active === n.id
                ? 'var(--c-surface)' : 'transparent',
              border: active === n.id
                ? '1px solid var(--c-border-hi)'
                : '1px solid transparent',
              color: active === n.id
                ? 'var(--c-light)' : 'var(--c-muted)',
              cursor: 'pointer', letterSpacing: 2,
              fontFamily: 'inherit',
            }}>
            {n.label}
          </button>
        ))}
      </div>

      <div className="hidden items-center gap-2 md:flex">
        <div style={{
          width: 10, height: 10, borderRadius: '50%',
          background: 'var(--c-highlight)',
        }} />
        <span style={{
          fontFamily: 'monospace', color: 'var(--c-muted)', fontSize: 15,
        }}>OPEN TO WORK</span>
      </div>
    </nav>
  )
}
