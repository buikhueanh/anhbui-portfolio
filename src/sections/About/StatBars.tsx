import { useState } from 'react'
import type { Skill } from '@/types'

interface Props { skills: Skill[] }

export function StatBars({ skills }: Props) {
  const [hovered, setHovered] = useState<string | null>(null)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {skills.map(s => (
        <div key={s.name}
          onMouseEnter={() => setHovered(s.name)}
          onMouseLeave={() => setHovered(null)}
          style={{ position: 'relative' }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            marginBottom: 4,
          }}>
            <span style={{ color: 'var(--c-light)', fontSize: 15 }}>
              {s.name}
            </span>
            <span style={{
              fontFamily: 'monospace', color: s.color, fontSize: 13,
            }}>
              LVL {Math.round(s.level / 10)}
            </span>
          </div>
          <div style={{
            height: 8, background: 'var(--c-surface-2)',
            borderRadius: 4, overflow: 'hidden',
          }}>
            <div style={{
              width: s.level + '%', height: '100%',
              background: s.color, borderRadius: 4,
              transition: 'width 0.6s',
            }} />
          </div>
          {hovered === s.name && s.usedIn.length > 0 && (
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: '100%',
                transform: 'translateY(6px)',
                zIndex: 20,
                fontFamily: 'monospace',
                color: 'var(--c-muted)',
                fontSize: 10,
                background: 'var(--c-surface)',
                border: '1px solid var(--c-border)',
                borderRadius: 8,
                padding: '6px 8px',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
              }}
            >
              Used in: {s.usedIn.join(' · ')}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
