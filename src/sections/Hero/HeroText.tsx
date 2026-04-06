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
    <div
      className="mx-auto flex flex-col items-center pt-16 text-center xl:mx-0 xl:items-start xl:pt-0 xl:text-left"
      style={{ flex: 1, minWidth: 'min(280px, 100%)' }}
    >
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
          fontSize: 'clamp(34px, 9vw, 58px)',
          lineHeight: 1.2,
          margin: '0 0 10px',
          letterSpacing: 1,
        }}
      >
        Anh Bui.<br />
        <span className="flex w-full justify-center xl:justify-start">
          {/* Fixed border box — sized to the longest phrase, never resizes */}
          <span
            style={{
              position: 'relative',
              display: 'block',
              width: 'min(10em, 90vw)',
              fontSize: 'clamp(34px, 9vw, 58px)',
              lineHeight: 1.2,
              height: '6em',
              flexShrink: 0,
              background: 'var(--c-surface-2)',
              border: '1px solid var(--c-border-hi)',
              borderRadius: 10,
            }}
          >
            {/* Text layer — absolutely positioned so it never affects the border box size */}
            <span
              style={{
                position: 'absolute',
                inset: 0,
                padding: '10px 12px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
                letterSpacing: 1,
              }}
            >
              <span style={{ color: 'var(--c-primary)', flexShrink: 0 }}>I</span>
              <span style={{ color: 'var(--c-secondary)' }}>
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
        </span>
      </h1>

      <p
        className="mx-auto xl:mx-0"
        style={{
          color: 'var(--c-soft)',
          fontSize: 'clamp(15px, 4.4vw, 20px)',
          lineHeight: 1.7,
          maxWidth: 'min(560px, 100%)',
          margin: 0,
          marginBottom: 28,
        }}
      >
        Computer Science and Business Analytics student building full-stack,
        AI-powered, and data-driven products across software engineering,
        product, and analytics.
      </p>

      <div className="flex w-full flex-wrap justify-center gap-2.5 xl:justify-start">
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

      <div className="flex w-full flex-wrap justify-center gap-4 xl:justify-start" style={{ marginTop: 24 }}>
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