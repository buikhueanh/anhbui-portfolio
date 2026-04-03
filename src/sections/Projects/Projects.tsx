'use client'

import { useState } from 'react'
import { FilterBar } from './FilterBar'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'
import { projects } from '@/data'
import type { Project, ProjectType } from '@/types'

type Filter = ProjectType | 'All'

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All')
  const [selected, setSelected] = useState<Project | null>(null)

  const types = [
    'All',
    ...Array.from(new Set(projects.map(p => p.type))),
  ] as Filter[]

  const shown = filter === 'All'
    ? projects
    : projects.filter(p => p.type === filter)

  return (
    <div style={{ padding: '32px 24px', maxWidth: 1400, margin: '0 auto', width: '100%' }}>
      <div style={{
        display: 'flex', alignItems: 'baseline',
        gap: 12, borderBottom: '1px solid var(--c-border)',
        paddingBottom: 14, marginBottom: 22,
      }}>
        <span style={{
          fontFamily: 'monospace', color: 'var(--c-muted)',
          fontSize: 15, letterSpacing: 3,
        }}>ZONE 03</span>
        <span style={{
          fontFamily: 'monospace', color: 'var(--c-light)',
          fontSize: 22, letterSpacing: 2,
        }}>PROJECTS</span>
      </div>

      <FilterBar options={types} active={filter}
        onChange={setFilter} />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-3">
        {shown.map(p => (
          <ProjectCard key={p.id} project={p}
            onSelect={setSelected} />
        ))}
      </div>

      <ProjectModal project={selected}
        onClose={() => setSelected(null)} />
    </div>
  )
}
