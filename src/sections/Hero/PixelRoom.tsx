'use client'

import { useState, useEffect } from 'react'
import { RoomObject } from './RoomObject'
import { roomObjects } from '@/data/navigation'

export function PixelRoom() {
  const [floatIdx, setFloatIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(
      () => setFloatIdx(i => (i + 1) % 3), 1800
    )
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{
      width: 'min(460px, 100%)',
      aspectRatio: '460 / 400',
      background: 'var(--c-surface)',
      border: '1px solid var(--c-border-hi)',
      borderRadius: 12,
      position: 'relative', overflow: 'hidden',
      flexShrink: 0,
    }}>
      <span style={{
        fontFamily: 'monospace',
        position: 'absolute', top: 8, left: 10,
        color: 'var(--c-muted)', fontSize: 20, letterSpacing: 2,
      }}>SPAWN AREA</span>

      <div style={{
        position: 'absolute', bottom: 0,
        left: 0, right: 0, height: '22%',
        background: '#0f2a0f',
      }} />
      <div style={{
        position: 'absolute', bottom: '22%',
        left: 0, right: 0, height: '8%',
        background: '#1a3a1a',
        borderTop: '1px solid #2a5a2a',
      }} />

      <div style={{
        position: 'absolute', bottom: '30%', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div className="portal-bob">
          <div style={{
            width: 28, height: 28,
            background: 'var(--c-accent)',
            borderRadius: '50% 50% 0 0',
          }} />
          <div style={{
            width: 28, height: 36,
            background: 'var(--c-secondary)',
            borderRadius: 2,
          }} />
        </div>
      </div>

      {['var(--c-primary)','var(--c-secondary)','var(--c-accent)']
        .map((color, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: floatIdx === i ? '10%' : '13%',
            left: ['17.4%','47.8%','80.4%'][i],
            width: 10, height: 10,
            background: color, borderRadius: 1,
            transition: 'top 0.8s', opacity: 0.7,
          }} />
        ))
      }

      {roomObjects.map(obj => (
        <RoomObject key={obj.id} obj={obj} />
      ))}
    </div>
  )
}
