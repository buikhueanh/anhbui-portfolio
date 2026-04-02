const CARDS = [
  ['Why I build',
   'To make complex things effortless for real people.'],
  ['What I care about',
   'Performance, accessibility, and beautiful interactions.'],
  ['Teams I love',
   'Small, opinionated teams that ship and care about craft.'],
  ['Learning now',
   'Rust, generative UI, and AI-native product patterns.'],
]

export function FocusCards() {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10,
    }}>
      {CARDS.map(([title, desc]) => (
        <div key={title} style={{
          background: 'var(--c-surface)',
          border: '1px solid var(--c-border)',
          borderRadius: 8, padding: 12,
        }}>
          <div style={{
            fontFamily: 'monospace', color: 'var(--c-secondary)',
            fontSize: 10, letterSpacing: 1, marginBottom: 5,
          }}>{title!.toUpperCase()}</div>
          <div style={{
            color: 'var(--c-soft)', fontSize: 12, lineHeight: 1.6,
          }}>{desc}</div>
        </div>
      ))}
    </div>
  )
}
