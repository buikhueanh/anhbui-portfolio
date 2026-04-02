import { useEffect, useState } from 'react'

export function useScrollXP(): number {
  const [xp, setXp] = useState(0)

  useEffect(() => {
    const update = () => {
      const max =
        document.body.scrollHeight - window.innerHeight
      setXp(
        max > 0
          ? Math.round((window.scrollY / max) * 100)
          : 0
      )
    }
    window.addEventListener(
      'scroll', update, { passive: true }
    )
    update()
    return () =>
      window.removeEventListener('scroll', update)
  }, [])

  return xp
}