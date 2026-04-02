import type { Job } from '@/types'

export const jobs: Job[] = [
  {
    id: 'parker-hannifin-2025',
    role: 'Full Stack Software Engineer Intern',
    company: 'Parker Hannifin',
    period: 'May 2025 – Aug 2025',
    color: '#A9DEF9',
    xpLabel: '3,000 XP',
    quest: 'Build scalable internal tools to improve engineering productivity and data accessibility.',
    achievements: [
      'Owned end-to-end development of an SAP document search platform using React and ASP.NET Core 9, reducing query time by 75% across 500+ users',
      'Designed modular REST APIs and optimized SQL queries with Dapper ORM, improving backend performance by 40%',
      'Leveraged AI coding tools (GitHub Copilot, Claude Code) to accelerate development, debugging, and refactoring while maintaining production-quality code',
    ],
    tools: ['React', 'ASP.NET Core', 'SQL', 'Dapper ORM', 'Python', 'GitHub Copilot'],
  },
  {
    id: 'bcforward',
    role: 'Data Analyst Intern',
    company: 'BCforward',
    period: 'Aug 2024 – Dec 2024',
    color: '#E4C1F9',
    xpLabel: '2,500 XP',
    quest: 'Transform raw financial and recruiting data into actionable business insights.',
    achievements: [
      'Automated processing of 700,000+ financial records using Power Query, reducing data transformation time by 50%',
      'Refactored Python scripts and validated outputs, improving data integrity by 40% across reporting systems',
      'Redesigned Salesforce dashboards with HR and analytics teams, enabling real-time KPI tracking and better decision-making',
    ],
    tools: ['Python', 'SQL', 'Power Query', 'Salesforce', 'Excel'],
  },
  {
    id: 'parker-hannifin-2024',
    role: 'Software Engineer Intern',
    company: 'Parker Hannifin',
    period: 'May 2024 – Aug 2024',
    color: '#FF99C8',
    xpLabel: '2,800 XP',
    quest: 'Automate workflows and improve global content systems across enterprise platforms.',
    achievements: [
      'Built Python automation scripts to process and update 1,000+ records, eliminating 120+ hours of manual work',
      'Implemented automated AEM translation and publishing pipelines, reducing deployment time from 6 weeks to 15 minutes',
      'Standardized and updated 150+ global “Contact Us” pages, improving data consistency and localization accuracy',
    ],
    tools: ['Python', 'AEM', 'Automation', 'Data Processing'],
  },
  {
    id: 'depauw-ta',
    role: 'Computer Science Teaching Assistant',
    company: 'DePauw University',
    period: 'Feb 2023 – Dec 2023',
    color: '#A9DEF9',
    xpLabel: '1,800 XP',
    quest: 'Support student learning in core computer science concepts and programming fundamentals.',
    achievements: [
      'Led weekly Java labs covering OOP, data structures, and debugging for 60+ students',
      'Improved student assignment performance through hands-on instruction and targeted support',
      'Mentored and trained 5 new TAs, standardizing lab materials and improving teaching consistency',
    ],
    tools: ['Java', 'OOP', 'Data Structures', 'Teaching', 'Debugging'],
  },
]