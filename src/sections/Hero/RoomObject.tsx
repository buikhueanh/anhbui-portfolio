'use client'

import { useState } from 'react'
import { useSection } from '@/context/SectionContext'
import type { RoomObject as RoomObjectType } from '@/types'

interface Props { obj: RoomObjectType }

const ROOM_W = 460
const ROOM_H = 400

export function RoomObject({ obj }: Props) {
  const { go } = useSection()
  const [hovered, setHovered] = useState(false)

  // Room objects are authored at a 460×400 coordinate system.
  // Convert to percentages so the room can shrink on phones.
  const topPct = `${(obj.top / ROOM_H) * 100}%`
  const leftPct = `${(obj.left / ROOM_W) * 100}%`

  const isNearLeft = obj.left < ROOM_W * 0.18
  const isNearRight = obj.left > ROOM_W * 0.82
  const isNearTop = obj.top < ROOM_H * 0.12

  const tooltipStyle: React.CSSProperties = {
    position: 'absolute',
    background: 'var(--c-bg)',
    border: '1px solid var(--c-primary)',
    color: 'var(--c-primary)',
    fontFamily: 'monospace',
    fontSize: 9,
    padding: '2px 7px',
    borderRadius: 3,
    whiteSpace: 'nowrap',
    zIndex: 10,
    pointerEvents: 'none',
  }

  if (isNearTop) {
    tooltipStyle.top = 50
  } else {
    tooltipStyle.top = -24
  }

  if (isNearLeft) {
    tooltipStyle.left = 0
  } else if (isNearRight) {
    tooltipStyle.right = 0
  } else {
    tooltipStyle.left = '50%'
    tooltipStyle.transform = 'translateX(-50%)'
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => go(obj.id)}
      style={{
        position: 'absolute',
        top: topPct, left: leftPct,
        cursor: 'pointer',
      }}
    >
      <div style={{
        width: 44, height: 44,
        background: hovered
          ? 'var(--c-primary)' : 'var(--c-border-hi)',
        borderRadius: 4,
        display: 'flex', alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.15s', fontSize: 22,
      }}>
        {obj.emoji}
      </div>

      {hovered && (
        <div style={tooltipStyle}>
          {obj.tip}
        </div>
      )}
    </div>
  )
}
