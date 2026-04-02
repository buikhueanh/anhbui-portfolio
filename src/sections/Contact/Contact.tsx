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
    <div style={{ padding: '32px 0', maxWidth: 860, margin: '0 auto', width: '100%', paddingLeft: 40, paddingRight: 40 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 12,
          borderBottom: '1px solid var(--c-border)',
          paddingBottom: 14,
          marginBottom: 22,
        }}
      >
        <span
          style={{
            fontFamily: 'monospace',
            color: 'var(--c-muted)',
            fontSize: 10,
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
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 24,
        }}
      >
        <div>
          <div
            style={{
              color: 'var(--c-light)',
              fontSize: 20,
              fontWeight: 600,
              lineHeight: 1.3,
              marginBottom: 8,
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
              fontSize: 13,
              lineHeight: 1.7,
              marginBottom: 20,
            }}
          >
            I'm a Computer Science and Business Analytics student at DePauw,
            building full-stack, AI-powered, and data-driven products.
            Currently looking for new grad opportunities in software
            engineering, product, or data.
          </div>

          <div
            style={{
              fontFamily: 'monospace',
              color: 'var(--c-muted)',
              fontSize: 9,
              letterSpacing: 2,
              marginBottom: 10,
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
