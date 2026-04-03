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
      <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 16, alignItems: 'stretch' }}>
        <TimelineNav jobs={jobs}
          activeIndex={activeIndex}
          onSelect={setActiveIndex} />
        {job && (
          <div style={{ minWidth: 0 }}>
            <ExperienceDetail job={job} />
          </div>
        )}
      </div>
    </div>
  )
}
