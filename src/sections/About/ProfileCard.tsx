export function ProfileCard() {
  return (
    <div style={{
      background: 'var(--c-surface)',
      border: '1px solid var(--c-border-hi)',
      borderRadius: 12, padding: 20, textAlign: 'center',
    }}>
      <div style={{
        width: 72, height: 72, margin: '0 auto 12px',
        background: 'var(--c-surface-2)',
        border: '2px solid var(--c-primary)',
        borderRadius: 10, display: 'flex',
        alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          width: 36, height: 36,
          background: 'var(--c-primary)', borderRadius: 4,
        }} />
      </div>

      <div style={{
        color: 'var(--c-light)', fontSize: 16,
        fontWeight: 700, marginBottom: 3,
      }}>Anh Bui</div>

      <div style={{
        fontFamily: 'monospace', color: 'var(--c-secondary)',
        fontSize: 10, letterSpacing: 1,
      }}>SOFTWARE ENGINEER</div>

      <div style={{
        fontFamily: 'monospace', color: 'var(--c-muted)',
        fontSize: 9, marginTop: 4,
      }}>DePauw University · USA</div>

      <div style={{
        marginTop: 16, display: 'flex',
        justifyContent: 'space-around',
        borderTop: '1px solid var(--c-border)',
        paddingTop: 12,
      }}>
        {[['3.95','GPA'],['8+','PROJ'],['3','INT']].map(([n, l]) => (
          <div key={l} style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'monospace', color: 'var(--c-primary)',
              fontSize: 18, fontWeight: 700,
            }}>{n}</div>
            <div style={{
              fontFamily: 'monospace', color: 'var(--c-muted)', fontSize: 9,
            }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
