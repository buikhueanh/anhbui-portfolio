'use client'

import { useState, useEffect } from 'react'
import { useSection } from '@/context/SectionContext'
import { TypewriterText } from '@/components/ui/TypewriterText'

export function HeroText() {
  const { go } = useSection()
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 600)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="pt-10 md:pt-0" style={{ flex: 1, minWidth: 'min(280px, 100%)' }}>
      <div
        style={{
          fontFamily: 'monospace',
          color: 'var(--c-secondary)',
          fontSize: 'clamp(16px, 4.6vw, 30px)',
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
          fontSize: 'clamp(34px, 9vw, 50px)',
          lineHeight: 1.2,
          margin: '0 0 10px',
          letterSpacing: 1,
        }}
      >
        Anh Bui.<br />
        <span
          style={{
            display: 'inline-flex',
            width: 'min(560px, 100%)',
            boxSizing: 'border-box',
            background: 'var(--c-surface-2)',
            border: '1px solid var(--c-border-hi)',
            borderRadius: 10,
            padding: '10px 12px',
            // Fixed/intentional typing area so surrounding UI never shifts.
            // 4 lines at the h1's line-height (1.2).
            height: '4.8em',
            overflow: 'hidden',
            alignItems: 'flex-start',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <span style={{ color: 'var(--c-primary)' }}>I</span>
            <span style={{ color: 'var(--c-secondary)', minWidth: 0 }}>
              <TypewriterText
                className="block"
                phrases={[
                  'build & turn ideas into products.',
                  'work with data & train ML models.',
                  'bridge tech & business outcomes.',
                ]}
                typingMs={46}
                deletingMs={24}
                pauseMs={850}
              />
            </span>
          </span>
        </span>
      </h1>

      <p
        style={{
          color: 'var(--c-soft)',
          fontSize: 'clamp(15px, 4.4vw, 20px)',
          lineHeight: 1.7,
          maxWidth: 'min(560px, 100%)',
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
            fontSize: 20,
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
            fontSize: 20,
          }}
        >
          VIEW RESUME
        </button>
      </div>

      <div style={{ marginTop: 24, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
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
                fontSize: 'clamp(18px, 5vw, 25px)',
                fontWeight: 700,
              }}
            >
              {n}
            </div>
            <div
              style={{
                fontFamily: 'monospace',
                color: 'var(--c-muted)',
                fontSize: 'clamp(14px, 4.6vw, 20px)',
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