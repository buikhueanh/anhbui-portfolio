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
    top: 20,
    left: 25,
  },
  {
    id: 'experience',
    emoji: '📜',
    tip: 'View experience log',
    top: 45,
    left: 60,
  },
  {
    id: 'projects',
    emoji: '🖥️',
    tip: 'Open project terminal',
    top: 70,
    left: 30,
  },
  {
    id: 'resume',
    emoji: '📄',
    tip: 'Download resume.exe',
    top: 35,
    left: 80,
  },
  {
    id: 'contact',
    emoji: '🚪',
    tip: 'Enter contact portal',
    top: 75,
    left: 85,
  },
]