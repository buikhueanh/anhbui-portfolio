import { TimelineNode } from './TimelineNode'
import type { Job } from '@/types'

interface Props {
  jobs: Job[]
  activeIndex: number
  onSelect: (i: number) => void
}

export function TimelineNav({ jobs, activeIndex, onSelect }: Props) {
  return (
    <div style={{
      position: 'relative', paddingLeft: 20,
      width: 180, flexShrink: 0,
    }}>
      <div style={{
        position: 'absolute',
        left: 9, top: 13, bottom: 13,
        width: 1, background: 'var(--c-border)',
      }} />
      {jobs.map((job, i) => (
        <TimelineNode key={job.id} job={job}
          isActive={activeIndex === i}
          onClick={() => onSelect(i)} />
      ))}
    </div>
  )
}
