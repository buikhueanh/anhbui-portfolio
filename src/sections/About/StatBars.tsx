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
          onMouseLeave={() => setHovered(null)}>
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
            <div style={{
              fontFamily: 'monospace', color: 'var(--c-muted)',
              fontSize: 10, marginTop: 3,
            }}>
              Used in: {s.usedIn.join(' · ')}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
