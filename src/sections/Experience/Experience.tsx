'use client'

import { useState } from 'react'
import { TimelineNav } from './TimelineNav'
import { ExperienceDetail } from './ExperienceDetail'
import { jobs } from '@/data'

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const job = jobs[activeIndex]
  return (
    <div style={{ padding: '32px 0', maxWidth: 860, margin: '0 auto', width: '100%', paddingLeft: 40, paddingRight: 40 }}>
      <div style={{
        display: 'flex', alignItems: 'baseline',
        gap: 12, borderBottom: '1px solid var(--c-border)',
        paddingBottom: 14, marginBottom: 28,
      }}>
        <span style={{
          fontFamily: 'monospace', color: 'var(--c-muted)',
          fontSize: 10, letterSpacing: 3,
        }}>ZONE 02</span>
        <span style={{
          fontFamily: 'monospace', color: 'var(--c-light)',
          fontSize: 22, letterSpacing: 2,
        }}>EXPERIENCE</span>
      </div>
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
        <TimelineNav jobs={jobs}
          activeIndex={activeIndex}
          onSelect={setActiveIndex} />
        {job && (
          <div style={{ flex: 1, maxWidth: 560 }}>
            <ExperienceDetail job={job} />
          </div>
        )}
      </div>
    </div>
  )
}
