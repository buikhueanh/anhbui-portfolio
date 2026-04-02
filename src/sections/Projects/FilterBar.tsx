import type { ProjectType } from '@/types'

type Filter = ProjectType | 'All'
interface Props {
  options: Filter[]
  active: Filter
  onChange: (f: Filter) => void
}

export function FilterBar({ options, active, onChange }: Props) {
  return (
    <div style={{
      display: 'flex', gap: 6, marginBottom: 16, flexWrap: 'wrap',
    }}>
      {options.map(opt => (
        <button key={opt} onClick={() => onChange(opt)} style={{
          fontFamily: 'monospace',
          background: active === opt
            ? 'var(--c-accent)' : 'transparent',
          color: active === opt
            ? 'var(--c-bg)' : 'var(--c-muted)',
          border: '1px solid ' + (active === opt
            ? 'var(--c-accent)' : 'var(--c-border)'),
          padding: '4px 11px', borderRadius: 5,
          cursor: 'pointer', fontSize: 10,
          letterSpacing: 1, transition: 'all 0.15s',
        }}>{opt.toUpperCase()}</button>
      ))}
    </div>
  )
}
