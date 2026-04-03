export function ProfileCard() {
  return (
    <div style={{
      background: 'var(--c-surface)',
      border: '1px solid var(--c-border-hi)',
      borderRadius: 14, padding: 28, textAlign: 'center',
      flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
    }}>
      <div style={{
        width: 220, height: 220, margin: '0 auto 16px',
        border: '2px solid var(--c-primary)',
        borderRadius: 14, overflow: 'hidden',
      }}>
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/profile-image.jpg`} alt="Anh Bui"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div style={{
        color: 'var(--c-light)', fontSize: 22,
        fontWeight: 700, marginBottom: 5,
      }}>Anh Bui</div>

      <div style={{
        fontFamily: 'monospace', color: 'var(--c-secondary)',
        fontSize: 13, letterSpacing: 2,
      }}>SOFTWARE ENGINEER</div>

      <div style={{
        fontFamily: 'monospace', color: 'var(--c-muted)',
        fontSize: 12, marginTop: 6,
      }}>DePauw University · USA</div>

      <div style={{
        marginTop: 20, display: 'flex',
        justifyContent: 'space-around',
        borderTop: '1px solid var(--c-border)',
        paddingTop: 16,
      }}>
        {[['3.95','GPA'],['8+','PROJECTS'],['3','INTERNSHIPS']].map(([n, l]) => (
          <div key={l} style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'monospace', color: 'var(--c-primary)',
              fontSize: 24, fontWeight: 700,
            }}>{n}</div>
            <div style={{
              fontFamily: 'monospace', color: 'var(--c-muted)', fontSize: 11,
            }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
