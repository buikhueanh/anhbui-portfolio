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

    // Defer state updates to callbacks to avoid synchronous setState
    // in the effect body (keeps behavior the same).
    const show = window.setTimeout(() => setCurrent(MESSAGES[active]), 0)
    const hide = window.setTimeout(() => setCurrent(null), 1500)
    return () => {
      clearTimeout(show)
      clearTimeout(hide)
    }
  }, [active])

  return {
    current,
    dismiss: () => setCurrent(null),
  }
}