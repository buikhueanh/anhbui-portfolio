// src/types/index.ts
// This is the contract the whole project depends on.

export type SectionId =
  | 'hero'
  | 'about'
  | 'experience'
  | 'projects'
  | 'resume'
  | 'contact'

export type ProjectCategory =
  | 'Technical'
  | 'Data & ML'
  | 'Business Analytics'
  | 'Finance'
  | 'Product & Leadership'

export type ProjectType =
  | 'Full Stack'
  | 'Frontend'
  | 'Backend'
  | 'Mobile'
  | 'AI / ML'
  | 'Data Analysis'
  | 'Research'
  | 'Case Study'
  | 'Hackathon'
  | 'Production'
  | 'Product'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  type: ProjectType
  stack: string[]
  color: string
  shortDesc: string
  problem: string
  outcome: string
  demoUrl?: string
  repoUrl?: string
  imageUrl?: string
}
export interface Job {
  id: string
  role: string
  company: string
  period: string
  color: string
  xpLabel: string
  quest: string
  achievements: string[]
  tools: string[]
}

export interface Skill {
  name: string
  level: number
  color: string
  usedIn: string[]
}

export interface NavItem {
  id: SectionId
  label: string
  zone: string
}

export interface RoomObject {
  id: SectionId
  emoji: string
  tip: string
  top: number
  left: number
}

export interface ResumeStat {
  label: string
  value: string
}

export type ResumeTab = 'preview' | 'skills' | 'achievements'

export interface ContactFormData {
  name: string
  email: string
  message: string
}