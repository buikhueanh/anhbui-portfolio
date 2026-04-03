interface Props { chips: string[] }

export function SkillInventory({ chips }: Props) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
      {chips.map(chip => (
        <span key={chip} style={{
          fontFamily: 'monospace',
          background: 'var(--c-surface-2)',
          border: '1px solid var(--c-border-hi)',
          color: 'var(--c-soft)',
          padding: '4px 10px', borderRadius: 5, fontSize: 15,
        }}>{chip}</span>
      ))}
    </div>
  )
}
