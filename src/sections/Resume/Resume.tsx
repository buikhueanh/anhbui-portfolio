'use client'

import { useState, useEffect } from 'react'
import { HighlightStats } from './HighlightStats'
import { ResumeTabContent } from './ResumeTabContent'
import { resumeStats } from '@/data'
import type { ResumeTab } from '@/types'

export function Resume() {
  const [tab, setTab] = useState<ResumeTab>('preview')
  const [blink, setBlink] = useState(true)
  useEffect(() => {
    const t = setInterval(() => setBlink(b => !b), 700)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ padding: '32px 24px', maxWidth: 1400, margin: '0 auto', width: '100%' }}>
      <div style={{
        display: 'flex', alignItems: 'baseline',
        gap: 12, borderBottom: '1px solid var(--c-border)',
        paddingBottom: 14, marginBottom: 28,
      }}>
        <span style={{
          fontFamily: 'monospace', color: 'var(--c-muted)',
          fontSize: 15, letterSpacing: 3,
        }}>ZONE 04</span>
        <span style={{
          fontFamily: 'monospace', color: 'var(--c-light)',
          fontSize: 22, letterSpacing: 2,
        }}>RESUME</span>
      </div>

      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{
          background: 'var(--c-surface)',
          border: '1px solid var(--c-border-hi)',
          borderRadius: 12, overflow: 'hidden',
        }}>
          <div style={{
            background: 'var(--c-surface-2)',
            borderBottom: '1px solid var(--c-border)',
            padding: '9px 14px', display: 'flex',
            alignItems: 'center', gap: 8,
          }}>
            <div style={{ display: 'flex', gap: 5 }}>
              {['#FF5F57','#FEBC2E','#28C840'].map(c => (
                <div key={c} style={{
                  width: 10, height: 10,
                  borderRadius: '50%', background: c,
                }} />
              ))}
            </div>
            <span style={{
              fontFamily: 'monospace', color: 'var(--c-muted)',
              fontSize: 13, marginLeft: 4,
            }}>resume_terminal.exe</span>
          </div>

          <div style={{ padding: 22 }}>
            <div style={{
              fontFamily: 'monospace', color: 'var(--c-highlight)',
              fontSize: 15, marginBottom: 16,
            }}>
              {'$ cat ANH_BUI_RESUME.pdf '}
              <span style={{ opacity: blink ? 1 : 0 }}>█</span>
            </div>

            <HighlightStats stats={resumeStats} />

            <div style={{ display: 'flex', gap: 4, marginBottom: 14, flexWrap: 'wrap' }}>
              {(['preview','skills','achievements'] as ResumeTab[])
                .map(t => (
                  <button key={t} onClick={() => setTab(t)} style={{
                    fontFamily: 'monospace',
                    background: tab === t
                      ? 'var(--c-highlight)' : 'transparent',
                    color: tab === t
                      ? '#0F2A0F' : 'var(--c-muted)',
                    border: '1px solid ' + (tab === t
                      ? 'var(--c-highlight)' : 'var(--c-border)'),
                    padding: '4px 10px', borderRadius: 4,
                    cursor: 'pointer', fontSize: 13, letterSpacing: 1,
                  }}>{t.toUpperCase()}</button>
                ))
              }
            </div>

            <div style={{
              background: 'var(--c-surface-2)',
              border: '1px solid var(--c-border)',
              borderRadius: 7, padding: 12,
              minHeight: 72, marginBottom: 16,
            }}>
              <ResumeTabContent tab={tab} />
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <a href="/resume.pdf" download style={{
                fontFamily: 'monospace',
                background: 'transparent',
                color: 'var(--c-highlight)',
                border: '1px solid var(--c-highlight)',
                padding: '10px 18px', borderRadius: 6,
                cursor: 'pointer', fontSize: 14, 
                letterSpacing: 1,
                textDecoration: 'none',
                display: 'inline-block',
                textAlign: 'center',
              }}>▼ DOWNLOAD RESUME.EXE</a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" style={{
                fontFamily: 'monospace',
                background: 'var(--c-highlight)',
                color: '#0F2A0F', border: 'none', 
                padding: '10px 18px', borderRadius: 6,
                cursor: 'pointer', fontSize: 14,fontWeight: 700,
                letterSpacing: 1,
                opacity: blink ? 1 : 0.75,
                transition: 'opacity 0.3s',
                textDecoration: 'none',
                display: 'inline-block',
                textAlign: 'center',
              }}>⤢ PREVIEW</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
