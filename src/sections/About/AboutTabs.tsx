type Tab = 'skills' | 'stack' | 'focus'
interface Props { active: Tab; onChange: (t: Tab) => void }

export function AboutTabs({ active, onChange }: Props) {
  return (
    <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
      {(['skills','stack','focus'] as Tab[]).map(t => (
        <button key={t} onClick={() => onChange(t)} style={{
          fontFamily: 'monospace',
          background: active === t
            ? 'var(--c-primary)' : 'transparent',
          color: active === t
            ? 'var(--c-bg)' : 'var(--c-muted)',
          border: '1px solid ' + (active === t
            ? 'var(--c-primary)' : 'var(--c-border)'),
          padding: '5px 13px', borderRadius: 5,
          cursor: 'pointer', fontSize: 11,
          letterSpacing: 1, textTransform: 'uppercase',
          transition: 'all 0.15s',
        }}>{t}</button>
      ))}
    </div>
  )
}
