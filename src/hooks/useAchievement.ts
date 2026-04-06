// src/hooks/useAchievement.ts
import { useCallback, useEffect, useRef, useState } from 'react'
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

  const currentRef = useRef<string | null>(null)
  const shownAtRef = useRef<number | null>(null)
  const showTimeoutRef = useRef<number | null>(null)
  const hideTimeoutRef = useRef<number | null>(null)

  const clearTimers = useCallback(() => {
    if (showTimeoutRef.current != null) {
      clearTimeout(showTimeoutRef.current)
      showTimeoutRef.current = null
    }
    if (hideTimeoutRef.current != null) {
      clearTimeout(hideTimeoutRef.current)
      hideTimeoutRef.current = null
    }
  }, [])

  useEffect(() => {
    currentRef.current = current
  }, [current])

  useEffect(() => {
    const dismissIfShowing = () => {
      if (!currentRef.current) return
      setCurrent(null)
      shownAtRef.current = null
      clearTimers()
    }

    const onVisibilityChange = () => {
      if (document.hidden) {
        dismissIfShowing()
        return
      }

      // If we became visible again and the toast's intended lifetime
      // has already elapsed, hide immediately.
      const shownAt = shownAtRef.current
      if (!shownAt) return
      if (Date.now() - shownAt >= 1500) {
        dismissIfShowing()
      }
    }

    document.addEventListener('visibilitychange', onVisibilityChange)
    // iOS Safari can fire pagehide more reliably than visibilitychange.
    window.addEventListener('pagehide', dismissIfShowing)
    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange)
      window.removeEventListener('pagehide', dismissIfShowing)
    }
  }, [clearTimers])

  useEffect(() => {
    clearTimers()
    shownAtRef.current = null

    // If we changed sections while a toast was visible (or its hide timer got
    // cleared because the section was already visited), always dismiss.
    if (currentRef.current) {
      currentRef.current = null
      setCurrent(null)
    }

    const key = 'achievement_' + active
    if (active === 'hero') return
    if (sessionStorage.getItem(key)) return
    sessionStorage.setItem(key, '1')

    // Defer state updates to callbacks to avoid synchronous setState
    // in the effect body (keeps behavior the same).
    showTimeoutRef.current = window.setTimeout(() => {
      setCurrent(MESSAGES[active])
      shownAtRef.current = Date.now()
    }, 0)

    hideTimeoutRef.current = window.setTimeout(() => {
      setCurrent(null)
      shownAtRef.current = null
    }, 1500)

    return clearTimers
  }, [active])

  return {
    current,
    dismiss: () => {
      setCurrent(null)
      shownAtRef.current = null
      clearTimers()
    },
  }
}