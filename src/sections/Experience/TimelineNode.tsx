import type { Job } from '@/types'

interface Props {
  job: Job
  isActive: boolean
  onClick: () => void
}

export function TimelineNode({ job, isActive, onClick }: Props) {
  return (
    <div onClick={onClick} style={{
      display: 'flex', gap: 12,
      alignItems: 'flex-start',
      marginBottom: 4, cursor: 'pointer',
    }}>
      <div style={{
        width: 26, height: 26, borderRadius: '50%',
        background: isActive
          ? job.color : 'var(--c-surface-2)',
        border: '2px solid ' +
          (isActive ? job.color : 'var(--c-border-hi)'),
        flexShrink: 0, zIndex: 1,
        transition: 'all 0.2s',
        display: 'flex', alignItems: 'center',
        justifyContent: 'center',
      }}>
        {isActive && (
          <div style={{
            width: 8, height: 8, borderRadius: '50%',
            background: 'var(--c-bg)',
          }} />
        )}
      </div>
      <div style={{
        background: isActive
          ? 'var(--c-surface)' : 'transparent',
        border: '1px solid ' +
          (isActive ? 'var(--c-border-hi)' : 'transparent'),
        borderRadius: 7, padding: '8px 10px',
        transition: 'all 0.15s',
      }}>
        <div style={{
          color: isActive ? 'var(--c-light)' : 'var(--c-muted)',
          fontSize: 11, fontWeight: 600, lineHeight: 1.3,
        }}>{job.role}</div>
        <div style={{
          fontFamily: 'monospace',
          color: isActive ? job.color : 'var(--c-muted)',
          fontSize: 10, marginTop: 1,
        }}>{job.period}</div>
      </div>
    </div>
  )
}
