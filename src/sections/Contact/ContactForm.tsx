'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import type { ContactFormData } from '@/types'

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      setErrorMessage('Please fill out all fields.')
      return
    }

    if (!isValidEmail(form.email)) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address.')
      return
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error')
      setErrorMessage('Email service is not configured correctly.')
      return
    }

    setStatus('sending')
    setErrorMessage('')

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        PUBLIC_KEY
      )

      setStatus('sent')
      setForm({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  const inputStyle = {
    width: '100%',
    background: 'var(--c-surface)',
    border: '1px solid var(--c-border-hi)',
    borderRadius: 6,
    color: 'var(--c-light)',
    padding: '9px 12px',
    fontSize: 15,
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box' as const,
  }

  return (
    <form onSubmit={handleSubmit} style={{
      background: 'var(--c-surface)',
      border: '1px solid var(--c-border-hi)',
      borderRadius: 12, padding: 24,
      display: 'flex', flexDirection: 'column',
    }}>
      {[
        ['NAME', 'name', 'Your name'],
        ['EMAIL', 'email', 'your@email.com'],
      ].map(([label, field, placeholder]) => (
        <div key={field} style={{ marginBottom: 12 }}>
          <div
            style={{
              fontFamily: 'monospace',
              color: 'var(--c-muted)',
              fontSize: 12,
              letterSpacing: 2,
              marginBottom: 5,
            }}
          >
            {label} _
          </div>

          <input
            type={field === 'email' ? 'email' : 'text'}
            placeholder={placeholder}
            value={form[field as keyof ContactFormData]}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                [field as keyof ContactFormData]: e.target.value,
              }))
            }
            style={inputStyle}
          />
        </div>
      ))}

      <div style={{ marginBottom: 16 }}>
        <div
          style={{
            fontFamily: 'monospace',
            color: 'var(--c-muted)',
            fontSize: 12,
            letterSpacing: 2,
            marginBottom: 5,
          }}
        >
          MESSAGE _
        </div>

        <textarea
          rows={4}
          placeholder="What's on your mind?"
          value={form.message}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              message: e.target.value,
            }))
          }
          style={{ ...inputStyle, resize: 'none' }}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          marginTop: 'auto',
          fontFamily: 'monospace',
          background: 'var(--c-accent)',
          color: '#2A0A1A',
          border: 'none',
          padding: '12px 22px',
          borderRadius: 6,
          cursor: 'pointer',
          fontSize: 14,
          width: '100%',
          fontWeight: 700,
          letterSpacing: 1,
          opacity: status === 'sending' ? 0.6 : 1,
        }}
      >
        {status === 'sending'
          ? 'SENDING...'
          : status === 'sent'
            ? 'SENT!'
            : '► SEND TRANSMISSION'}
      </button>

      {status === 'sent' && (
        <div
          style={{
            color: '#86EFAC',
            fontSize: 11,
            marginTop: 8,
          }}
        >
          Message received. I&apos;ll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div
          style={{
            color: '#FCA5A5',
            fontSize: 11,
            marginTop: 8,
          }}
        >
          {errorMessage}
        </div>
      )}
    </form>
  )
}
