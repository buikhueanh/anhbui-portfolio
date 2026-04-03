'use client'

import { useState } from 'react'
import { TimelineNav } from './TimelineNav'
import { ExperienceDetail } from './ExperienceDetail'
import { jobs } from '@/data'

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const job = jobs[activeIndex]
  return (
    <div style={{ padding: '32px 24px', maxWidth: 1400, margin: '0 auto', width: '100%' }}>
      <div style={{
        display: 'flex', alignItems: 'baseline',
        gap: 12, borderBottom: '1px solid var(--c-border)',
        paddingBottom: 14, marginBottom: 28,
      }}>
        <span style={{
          fontFamily: 'monospace', color: 'var(--c-muted)',
          fontSize: 15, letterSpacing: 3,
        }}>ZONE 02</span>
        <span style={{
          fontFamily: 'monospace', color: 'var(--c-light)',
          fontSize: 22, letterSpacing: 2,
        }}>EXPERIENCE</span>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[380px_1fr] md:gap-4">
        <TimelineNav
          jobs={jobs}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
          renderMobileDetail={(j) => <ExperienceDetail job={j} />}
        />

        {job && (
          <div className="hidden min-w-0 md:block">
            <ExperienceDetail job={job} />
          </div>
        )}
      </div>
    </div>
  )
}
