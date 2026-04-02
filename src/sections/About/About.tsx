'use client'

import { useState } from 'react'
import { ProfileCard } from './ProfileCard'
import { StatusPanel } from './StatusPanel'
import { AboutTabs } from './AboutTabs'
import { StatBars } from './StatBars'
import { SkillInventory } from './SkillInventory'
import { FocusCards } from './FocusCards'
import { skills, stackChips } from '@/data'

type Tab = 'skills' | 'stack' | 'focus'

export function About() {
  const [tab, setTab] = useState<Tab>('skills')
  return (
    <div style={{ padding: '32px 0', maxWidth: 900, margin: '0 auto', width: '100%', paddingLeft: 40, paddingRight: 40 }}>
      <div style={{
        display: 'flex', alignItems: 'baseline',
        gap: 12, borderBottom: '1px solid var(--c-border)',
        paddingBottom: 14, marginBottom: 28,
      }}>
        <span style={{
          fontFamily: 'monospace', color: 'var(--c-muted)',
          fontSize: 10, letterSpacing: 3,
        }}>ZONE 01</span>
        <span style={{
          fontFamily: 'monospace', color: 'var(--c-light)',
          fontSize: 22, letterSpacing: 2,
        }}>ABOUT</span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '240px 1fr', gap: 24,
      }}>
        {/* Left column: profile + status */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <ProfileCard />
          <StatusPanel />
        </div>

        {/* Right column: tabs + content (capped at 2/3 width) */}
        <div style={{ maxWidth: '66%' }}>
          <AboutTabs active={tab} onChange={setTab} />
          {tab === 'skills' && <StatBars skills={skills} />}
          {tab === 'stack' && <SkillInventory chips={stackChips} />}
          {tab === 'focus' && <FocusCards />}
        </div>
      </div>
    </div>
  )
}
