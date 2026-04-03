interface Props {
  label: string
  value: string
  color: string
  href: string
}

export function ChannelCard({ label, value, color, href }: Props) {
  return (
    <a href={href} target="_blank" rel="noreferrer" style={{
      display: 'flex', alignItems: 'center', gap: 12,
      background: 'var(--c-surface)',
      border: '1px solid var(--c-border)',
      borderRadius: 8, padding: '9px 13px',
      marginBottom: 8, cursor: 'pointer',
      textDecoration: 'none',
    }}>
      <div style={{
        width: 8, height: 8, borderRadius: '50%',
        background: color, flexShrink: 0,
      }} />
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: 'monospace', color,
          fontSize: 12, letterSpacing: 1, marginBottom: 2,
        }}>{label}</div>
        <div style={{
          color: 'var(--c-light)', fontSize: 15,
        }}>{value}</div>
      </div>
      <span style={{ color: 'var(--c-muted)', fontSize: 11 }}>›</span>
    </a>
  )
}
