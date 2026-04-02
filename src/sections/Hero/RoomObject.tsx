'use client'

import { useState } from 'react'
import { useSection } from '@/context/SectionContext'
import type { RoomObject as RoomObjectType } from '@/types'

interface Props { obj: RoomObjectType }

export function RoomObject({ obj }: Props) {
  const { go } = useSection()
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => go(obj.id)}
      style={{
        position: 'absolute',
        top: obj.top, left: obj.left,
        cursor: 'pointer',
      }}
    >
      <div style={{
        width: 22, height: 22,
        background: hovered
          ? 'var(--c-primary)' : 'var(--c-border-hi)',
        borderRadius: 4,
        display: 'flex', alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.15s', fontSize: 12,
      }}>
        {obj.emoji}
      </div>

      {hovered && (
        <div style={{
          position: 'absolute', top: -24,
          left: '50%', transform: 'translateX(-50%)',
          background: 'var(--c-bg)',
          border: '1px solid var(--c-primary)',
          color: 'var(--c-primary)',
          fontFamily: 'monospace', fontSize: 9,
          padding: '2px 7px', borderRadius: 3,
          whiteSpace: 'nowrap', zIndex: 10,
        }}>
          {obj.tip}
        </div>
      )}
    </div>
  )
}
