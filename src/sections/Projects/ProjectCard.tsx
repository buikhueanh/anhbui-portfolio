import { useState } from 'react'
import type { Project } from '@/types'

interface Props {
  project: Project
  onSelect: (p: Project) => void
}

export function ProjectCard({ project: p, onSelect }: Props) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() => onSelect(p)}
      style={{
        background: 'var(--c-surface)',
        border: '1px solid ' +
          (hov ? p.color : 'var(--c-border)'),
        borderRadius: 10, padding: 20,
        cursor: 'pointer',
        transition: 'border 0.15s',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 3, background: p.color,
        opacity: hov ? 1 : 0.25, transition: 'opacity 0.15s',
      }} />
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-start', marginBottom: 8,
      }}>
        <div style={{
          width: 40, height: 40,
          background: 'var(--c-surface-2)',
          border: '1px solid var(--c-border)',
          borderRadius: 6, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: 14, height: 14,
            background: p.color, borderRadius: 2, opacity: 0.8,
          }} />
        </div>
        <span style={{
          fontFamily: 'monospace',
          background: 'var(--c-surface-2)',
          border: '1px solid var(--c-border-hi)',
          color: p.color, fontSize: 12,
          padding: '3px 10px', borderRadius: 10,
        }}>{p.type}</span>
      </div>
      <div style={{
        color: 'var(--c-light)', fontSize: 17,
        fontWeight: 600, marginBottom: 6,
      }}>{p.title}</div>
      <div style={{
        color: 'var(--c-muted)', fontSize: 14,
        lineHeight: 1.5, marginBottom: 12,
      }}>{p.shortDesc}</div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {p.stack.map(s => (
          <span key={s} style={{
            fontFamily: 'monospace',
            background: 'var(--c-surface-2)',
            color: 'var(--c-soft)', fontSize: 12,
            padding: '3px 8px', borderRadius: 3,
          }}>{s}</span>
        ))}
      </div>
    </div>
  )
}
