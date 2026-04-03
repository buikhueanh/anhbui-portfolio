import type { NavItem, RoomObject } from '@/types'

export const navItems: NavItem[] = [
  { id: 'hero', label: 'Spawn', zone: 'ZONE 00' },
  { id: 'about', label: 'About', zone: 'ZONE 01' },
  { id: 'experience', label: 'Experience', zone: 'ZONE 02' },
  { id: 'projects', label: 'Projects', zone: 'ZONE 03' },
  { id: 'resume', label: 'Resume', zone: 'ZONE 04' },
  { id: 'contact', label: 'Contact', zone: 'ZONE 05' },
]

export const roomObjects: RoomObject[] = [
  {
    id: 'about',
    emoji: '🧑‍💻',
    tip: 'Inspect player stats',
    top: 120,
    left: 30,
  },
  {
    id: 'experience',
    emoji: '📜',
    tip: 'View experience log',
    top: 160,
    left: 140,
  },
  {
    id: 'projects',
    emoji: '🖥️',
    tip: 'Open project terminal',
    top: 200,
    left: 60,
  },
  {
    id: 'resume',
    emoji: '📄',
    tip: 'Download resume.exe',
    top: 130,
    left: 320,
  },
  {
    id: 'contact',
    emoji: '🚪',
    tip: 'Enter contact portal',
    top: 190,
    left: 400,
  },
]