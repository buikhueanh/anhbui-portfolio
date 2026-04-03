import type { Job } from '@/types'

interface Props {
  job: Job
  isActive: boolean
  isLast: boolean
  onClick: () => void
}

export function TimelineNode({ job, isActive, isLast, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer gap-3 xl:flex-1"
      style={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: 0,
      }}
    >
      {/* Dot + connecting line column */}
      <div style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', flexShrink: 0,
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: isActive ? job.color : 'var(--c-surface-2)',
          border: '2px solid ' + (isActive ? job.color : 'var(--c-border-hi)'),
          flexShrink: 0, zIndex: 1,
          transition: 'all 0.2s',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {isActive && (
            <div style={{
              width: 12, height: 12, borderRadius: '50%',
              background: 'var(--c-bg)',
            }} />
          )}
        </div>
        {!isLast && (
          <div style={{
            flex: 1, width: 1,
            background: 'var(--c-border)',
          }} />
        )}
      </div>

      {/* Label — vertically centered on the dot */}
      <div style={{
        display: 'flex', alignItems: 'flex-start',
        paddingTop: 6,
      }}>
        <div style={{
          background: isActive ? 'var(--c-surface)' : 'transparent',
          border: '1px solid ' + (isActive ? 'var(--c-border-hi)' : 'transparent'),
          borderRadius: 7, padding: '8px 10px',
          transition: 'all 0.15s',
        }}>
          <div style={{
            color: isActive ? 'var(--c-light)' : 'var(--c-muted)',
            fontSize: 17, fontWeight: 600, lineHeight: 1.3,
          }}>{job.role}</div>
          <div style={{
            fontFamily: 'monospace',
            color: isActive ? job.color : 'var(--c-muted)',
            fontSize: 15, marginTop: 1,
          }}>{job.period}</div>
        </div>
      </div>
    </div>
  )
}
