// src/hooks/useAchievement.ts
import { useState, useEffect } from 'react'
import type { SectionId } from '../types'

const MESSAGES: Record<SectionId, string> = {
  hero:       '',
  about:      'CHARACTER PROFILE DISCOVERED',
  experience: 'QUEST LOG UNLOCKED',
  projects:   'PROJECT ARCADE ENTERED',
  resume:     'SAVE STATION FOUND',
  contact:    'CONTACT PORTAL OPENED',
}

export function useAchievement(active: SectionId) {
  const [current, setCurrent] = useState<string | null>(null)

  useEffect(() => {
    const key = 'achievement_' + active
    if (active === 'hero') return
    if (sessionStorage.getItem(key)) return
    sessionStorage.setItem(key, '1')
    setCurrent(MESSAGES[active])
    const t = setTimeout(() => setCurrent(null), 2000)
    return () => clearTimeout(t)
  }, [active])

  return {
    current,
    dismiss: () => setCurrent(null),
  }
}