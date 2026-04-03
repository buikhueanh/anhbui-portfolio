export function StatusPanel() {
  return (
    <div style={{
      background: 'var(--c-surface)',
      border: '1px solid var(--c-border)',
      borderRadius: 10, padding: 16,
      width: '100%', flex: 1,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{
        fontFamily: 'monospace', color: 'var(--c-muted)',
        fontSize: 15, letterSpacing: 2, marginBottom: 10,
      }}>STATUS</div>
      {[
        ['var(--c-highlight)', '● Open to New Grad Roles'],
        ['var(--c-primary)',   '◈ Remote / Relocation OK'],
        ['var(--c-secondary)', '◎ SWE · Product · Data'],
      ].map(([color, text]) => (
        <div key={text} style={{ color, fontSize: 15, marginBottom: 7, fontWeight: 500 }}>
          {text}
        </div>
      ))}
    </div>
  )
}
