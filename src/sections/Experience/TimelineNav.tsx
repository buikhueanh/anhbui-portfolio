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
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column',
    }}>
      {jobs.map((job, i) => (
        <TimelineNode key={job.id} job={job}
          isActive={activeIndex === i}
          isLast={i === jobs.length - 1}
          onClick={() => onSelect(i)} />
      ))}
    </div>
  )
}
