'use client'

import { useState, useEffect } from 'react'
import { useSection } from '@/context/SectionContext'

export function HeroText() {
  const { go } = useSection()
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 600)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <div
        style={{
          fontFamily: 'monospace',
          color: 'var(--c-secondary)',
          fontSize: 10,
          letterSpacing: 4,
          marginBottom: 10,
        }}
      >
        PLAYER ONE · SOFTWARE ENGINEER
      </div>

      <h1
        style={{
          fontFamily: 'monospace',
          color: 'var(--c-light)',
          fontSize: 30,
          lineHeight: 1.2,
          margin: '0 0 10px',
          letterSpacing: 1,
        }}
      >
        Anh Bui.<br />
        <span style={{ color: 'var(--c-primary)' }}>
          I build
        </span>{' '}
        &amp;<br />
        <span style={{ color: 'var(--c-secondary)' }}>
          turn ideas into products.
        </span>
      </h1>

      <p
        style={{
          color: 'var(--c-soft)',
          fontSize: 13,
          lineHeight: 1.7,
          maxWidth: 420,
          margin: '0 0 28px',
        }}
      >
        Computer Science and Business Analytics student building full-stack,
        AI-powered, and data-driven products across software engineering,
        product, and analytics.
      </p>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <button
          onClick={() => go('about')}
          style={{
            fontFamily: 'monospace',
            background: 'var(--c-primary)',
            color: 'var(--c-bg)',
            border: 'none',
            padding: '10px 20px',
            borderRadius: 6,
            cursor: 'pointer',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 1,
            opacity: blink ? 1 : 0.75,
            transition: 'opacity 0.3s',
          }}
        >
          {blink ? '►' : ' '} START EXPLORING
        </button>

        <button
          onClick={() => go('resume')}
          style={{
            fontFamily: 'monospace',
            background: 'transparent',
            color: 'var(--c-secondary)',
            border: '1px solid var(--c-secondary)',
            padding: '10px 18px',
            borderRadius: 6,
            cursor: 'pointer',
            fontSize: 12,
          }}
        >
          VIEW RESUME
        </button>
      </div>

      <div style={{ marginTop: 24, display: 'flex', gap: 16 }}>
        {([
          ['3.95', 'gpa'],
          ['8+', 'projects'],
          ['3', 'internships'],
        ] as [string, string][]).map(([n, l]) => (
          <div key={l}>
            <div
              style={{
                fontFamily: 'monospace',
                color: 'var(--c-primary)',
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              {n}
            </div>
            <div
              style={{
                fontFamily: 'monospace',
                color: 'var(--c-muted)',
                fontSize: 9,
                letterSpacing: 1,
              }}
            >
              {l.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}