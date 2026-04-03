import type { Job } from '@/types'

interface Props { job: Job }

export function ExperienceDetail({ job }: Props) {
  return (
    <div style={{
      background: 'var(--c-surface)',
      border: '1px solid var(--c-border-hi)',
      borderLeft: '3px solid ' + job.color,
      borderRadius: 10, padding: 18, flex: 1,
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-start', marginBottom: 12,
      }}>
        <div>
          <div style={{
            color: 'var(--c-light)', fontSize: 20, fontWeight: 600,
          }}>{job.role}</div>
          <div style={{
            fontFamily: 'monospace', color: job.color,
            fontSize: 15, marginTop: 2,
          }}>{job.company}</div>
        </div>
        <span style={{
          fontFamily: 'monospace',
          background: 'var(--c-surface-2)',
          border: '1px solid ' + job.color,
          color: job.color, padding: '3px 9px',
          borderRadius: 5, fontSize: 12,
        }}>{job.xpLabel}</span>
      </div>

      <div style={{
        fontFamily: 'monospace', color: 'var(--c-muted)',
        fontSize: 16, letterSpacing: 2, marginBottom: 5,
      }}>QUEST</div>
      <div style={{
        color: 'var(--c-soft)', fontSize: 15,
        marginBottom: 14, lineHeight: 1.6,
      }}>{job.quest}</div>

      <div style={{
        fontFamily: 'monospace', color: 'var(--c-muted)',
        fontSize: 16, letterSpacing: 2, marginBottom: 7,
      }}>ACHIEVEMENTS</div>
      {job.achievements.map((a, i) => (
        <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
          <span style={{ color: job.color, fontSize: 16 }}>▸</span>
          <span style={{
            color: 'var(--c-soft)', fontSize: 15, lineHeight: 1.5,
          }}>{a}</span>
        </div>
      ))}

      <div style={{
        fontFamily: 'monospace', color: 'var(--c-muted)',
        fontSize: 16, letterSpacing: 2,
        marginTop: 12, marginBottom: 7,
      }}>TOOLS EQUIPPED</div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {job.tools.map(t => (
          <span key={t} style={{
            fontFamily: 'monospace',
            background: 'var(--c-surface-2)',
            border: '1px solid var(--c-border-hi)',
            color: 'var(--c-soft)',
            padding: '3px 9px', borderRadius: 4, fontSize: 12,
          }}>{t}</span>
        ))}
      </div>
    </div>
  )
}
