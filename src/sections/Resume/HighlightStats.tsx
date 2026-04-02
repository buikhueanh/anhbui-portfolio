import type { ResumeStat } from '@/types'

interface Props { stats: ResumeStat[] }

export function HighlightStats({ stats }: Props) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      gap: 9, marginBottom: 18,
    }}>
      {stats.map(s => (
        <div key={s.label} style={{
          background: 'var(--c-surface-2)',
          border: '1px solid var(--c-border)',
          borderRadius: 7, padding: '9px 12px',
        }}>
          <div style={{
            fontFamily: 'monospace', color: 'var(--c-muted)',
            fontSize: 9, letterSpacing: 1, marginBottom: 3,
          }}>{s.label}</div>
          <div style={{
            color: 'var(--c-light)', fontSize: 14, fontWeight: 600,
          }}>{s.value}</div>
        </div>
      ))}
    </div>
  )
}
