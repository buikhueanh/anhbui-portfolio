import type { Project } from '@/types'

interface Props {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project: p, onClose }: Props) {
  if (!p) return null
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0,
      background: 'rgba(15,23,42,0.92)',
      display: 'flex', alignItems: 'center',
      justifyContent: 'center', zIndex: 50, padding: 20,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: 'var(--c-surface)',
        border: '1px solid ' + p.color,
        borderRadius: 14, padding: 26,
        maxWidth: 440, width: '100%',
      }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start', marginBottom: 14,
        }}>
          <div style={{
            color: 'var(--c-light)', fontSize: 18, fontWeight: 700,
          }}>{p.title}</div>
          <button onClick={onClose} style={{
            background: 'transparent', border: 'none',
            color: 'var(--c-muted)', cursor: 'pointer', fontSize: 18,
          }}>✕</button>
        </div>

        {[
          ['PROBLEM', p.problem],
          ['SOLUTION', p.shortDesc],
          ['OUTCOME', p.outcome],
        ].map(([label, text]) => (
          <div key={label} style={{ marginBottom: 10 }}>
            <div style={{
              fontFamily: 'monospace', color: p.color,
              fontSize: 9, letterSpacing: 2, marginBottom: 3,
            }}>{label}</div>
            <div style={{
              color: 'var(--c-soft)', fontSize: 12, lineHeight: 1.6,
            }}>{text}</div>
          </div>
        ))}

        <div style={{
          display: 'flex', gap: 6, flexWrap: 'wrap',
          margin: '10px 0 14px',
        }}>
          {p.stack.map(s => (
            <span key={s} style={{
              fontFamily: 'monospace',
              background: 'var(--c-surface-2)',
              border: '1px solid var(--c-border-hi)',
              color: 'var(--c-soft)',
              padding: '4px 9px', borderRadius: 4, fontSize: 10,
            }}>{s}</span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 9 }}>
          {p.demoUrl && (
            <a href={p.demoUrl} target="_blank" rel="noreferrer"
              style={{
                fontFamily: 'monospace',
                background: p.color, color: 'var(--c-bg)',
                padding: '9px 16px', borderRadius: 6,
                cursor: 'pointer', fontSize: 11, fontWeight: 700,
                textDecoration: 'none',
              }}>LIVE DEMO</a>
          )}
          {p.repoUrl && (
            <a href={p.repoUrl} target="_blank" rel="noreferrer"
              style={{
                fontFamily: 'monospace', background: 'transparent',
                color: p.color, border: '1px solid ' + p.color,
                padding: '9px 16px', borderRadius: 6,
                cursor: 'pointer', fontSize: 11,
                textDecoration: 'none',
              }}>GITHUB</a>
          )}
        </div>
      </div>
    </div>
  )
}
