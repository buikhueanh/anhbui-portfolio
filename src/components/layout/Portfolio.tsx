'use client'

import { useSection } from '@/context/SectionContext'
import { useAchievement } from '@/hooks/useAchievement'
import { TopNav } from './TopNav'
import { XPBar } from './XPBar'
import { MiniMap } from './MiniMap'
import { StatusBar } from './StatusBar'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Experience } from '@/sections/Experience'
import { Projects } from '@/sections/Projects'
import { Resume } from '@/sections/Resume'
import { Contact } from '@/sections/Contact'
import type { SectionId } from '@/types'

const SECTIONS: SectionId[] = ['hero','about','experience','projects','resume','contact']

const MAP: Record<SectionId, React.ComponentType> = {
  hero:       Hero,
  about:      About,
  experience: Experience,
  projects:   Projects,
  resume:     Resume,
  contact:    Contact,
}

export function Portfolio() {
  const { active } = useSection()
  const xp = Math.round((SECTIONS.indexOf(active) / (SECTIONS.length - 1)) * 100)
  const { current: achievement, dismiss } = useAchievement(active)
  const ActiveSection = MAP[active]

  return (
    <div style={{
      background: 'var(--c-bg)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <TopNav />
      <XPBar xp={xp} />

      <div style={{ position: 'relative', flex: 1 }}>

        {/* Achievement toast */}
        {achievement && (
          <div
            onClick={dismiss}
            style={{
              position: 'fixed',
              top: 64,
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'var(--c-bg)',
              border: '1px solid var(--c-highlight)',
              color: 'var(--c-highlight)',
              fontFamily: 'monospace',
              padding: '7px 16px',
              fontSize: 11,
              letterSpacing: 1,
              borderRadius: 6,
              zIndex: 100,
              whiteSpace: 'nowrap',
              cursor: 'pointer',
            }}
          >
            ✦ {achievement}
          </div>
        )}

        <MiniMap />
        <ActiveSection />
      </div>

      <StatusBar xp={xp} />
    </div>
  )
}