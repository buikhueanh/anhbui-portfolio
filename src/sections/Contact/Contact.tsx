import { ChannelCard } from './ChannelCard'
import { ContactForm } from './ContactForm'

const CHANNELS = [
  {
    label: 'Email Beacon',
    value: 'anhkhuebui.work@gmail.com',
    color: 'var(--c-primary)',
    href: 'mailto:anhkhuebui.work@gmail.com',
  },
  {
    label: 'LinkedIn Portal',
    value: 'linkedin.com/in/anhbui',
    color: 'var(--c-secondary)',
    href: 'https://www.linkedin.com/in/anh-k-bui-b3954b212/',
  },
  {
    label: 'GitHub Gate',
    value: 'github.com/anhbui',
    color: 'var(--c-accent)',
    href: 'https://github.com/buikhueanh',
  },
]

export function Contact() {
  return (
    <div style={{ padding: '32px 24px', maxWidth: 1400, margin: '0 auto', width: '100%' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 12,
          borderBottom: '1px solid var(--c-border)',
          paddingBottom: 14,
          marginBottom: 28,
        }}
      >
        <span
          style={{
            fontFamily: 'monospace',
            color: 'var(--c-muted)',
            fontSize: 15,
            letterSpacing: 3,
          }}
        >
          ZONE 05
        </span>
        <span
          style={{
            fontFamily: 'monospace',
            color: 'var(--c-light)',
            fontSize: 22,
            letterSpacing: 2,
          }}
        >
          CONTACT
        </span>
      </div>

      <div
        className="grid grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-6"
      >
        <div>
          <div
            style={{
              color: 'var(--c-light)',
              fontSize: 28,
              fontWeight: 600,
              lineHeight: 1.3,
              marginBottom: 12,
            }}
          >
            {"Let's build"}<br />
            <span style={{ color: 'var(--c-accent)' }}>
              something impactful.
            </span>
          </div>

          <div
            style={{
              color: 'var(--c-soft)',
              fontSize: 16,
              lineHeight: 1.7,
              marginBottom: 24,
            }}
          >
            I&apos;m a Computer Science and Business Analytics student at DePauw,
            building full-stack, AI-powered, and data-driven products.
            Currently looking for new grad opportunities in software
            engineering, product, or data.
          </div>

          <div
            style={{
              fontFamily: 'monospace',
              color: 'var(--c-muted)',
              fontSize: 12,
              letterSpacing: 2,
              marginBottom: 12,
            }}
          >
            CHANNELS
          </div>

          {CHANNELS.map((c) => (
            <ChannelCard key={c.label} {...c} />
          ))}
        </div>

        <ContactForm />
      </div>
    </div>
  )
}
