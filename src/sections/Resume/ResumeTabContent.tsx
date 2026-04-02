import type { ResumeTab } from '@/types'
import { stackChips } from '@/data'

interface Props { tab: ResumeTab }

const ACHIEVEMENTS = [
  'Won 1st Prize at TigerHacks Spring 2024 with DeFind, a real-time accessibility mapping app',
  'Placed Top 25 in the Harvard Global Case Competition',
  'Maintained a 3.95 GPA as a double major in Computer Science and Business Analytics',
  'Delivered engineering impact at Parker Hannifin through internal search tooling and automation',
]

export function ResumeTabContent({ tab }: Props) {
  if (tab === 'preview') {
    return (
      <div
        style={{
          color: 'var(--c-soft)',
          fontSize: 12,
          lineHeight: 1.7,
        }}
      >
        Product-minded software engineer building full-stack, AI-powered,
        and data-driven applications. Experienced across frontend, backend,
        analytics, and internal tools, with a strong interest in turning
        technical ideas into real user impact.
        <br />
        <span style={{ color: 'var(--c-muted)', fontSize: 11 }}>
          DePauw University · Computer Science + Business Analytics · 3.95 GPA
        </span>
      </div>
    )
  }

  if (tab === 'skills') {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {stackChips.slice(0, 10).map(s => (
          <span
            key={s}
            style={{
              fontFamily: 'monospace',
              background: 'var(--c-surface-2)',
              border: '1px solid var(--c-border-hi)',
              color: 'var(--c-soft)',
              padding: '3px 8px',
              borderRadius: 4,
              fontSize: 10,
            }}
          >
            {s}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div>
      {ACHIEVEMENTS.map(a => (
        <div
          key={a}
          style={{
            display: 'flex',
            gap: 8,
            marginBottom: 5,
          }}
        >
          <span style={{ color: 'var(--c-highlight)' }}>▸</span>
          <span
            style={{
              color: 'var(--c-soft)',
              fontSize: 12,
            }}
          >
            {a}
          </span>
        </div>
      ))}
    </div>
  )
}
