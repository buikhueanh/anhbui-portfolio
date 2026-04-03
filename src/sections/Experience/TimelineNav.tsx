 'use client'

import { TimelineNode } from './TimelineNode'
import type { Job } from '@/types'

import type { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  jobs: Job[]
  activeIndex: number
  onSelect: (i: number) => void
  renderMobileDetail?: (job: Job) => ReactNode
}

export function TimelineNav({ jobs, activeIndex, onSelect, renderMobileDetail }: Props) {
  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column',
    }}>
      {jobs.map((job, i) => (
        <div key={job.id}>
          <TimelineNode
            job={job}
            isActive={activeIndex === i}
            isLast={i === jobs.length - 1}
            onClick={() => onSelect(i)}
          />

          {renderMobileDetail && (
            <AnimatePresence initial={false}>
              {activeIndex === i && (
                <motion.div
                  key={job.id + '_detail'}
                  className="mt-3 xl:hidden"
                  style={{ paddingLeft: 48, overflow: 'hidden' }}
                  initial={{ height: 0, opacity: 0, y: -6 }}
                  animate={{ height: 'auto', opacity: 1, y: 0 }}
                  exit={{ height: 0, opacity: 0, y: -6 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                >
                  {renderMobileDetail(job)}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      ))}
    </div>
  )
}
