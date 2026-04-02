import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'type-a-buddy',
    title: 'Type A Buddy',
    category: 'Technical',
    type: 'AI / ML',
    stack: ['React Native', 'FastAPI', 'MongoDB', 'Docker', 'Gemini API', 'Pydantic'],
    color: '#A9DEF9',
    shortDesc: 'AI-powered planner that turns goals, deadlines, and availability into structured daily plans.',
    problem:
      'Students often struggle to turn large goals into realistic daily action plans, which leads to missed deadlines and poor time management.',
    outcome:
      'Built a full stack AI application that generates structured daily plans using LLM output validation, authentication, and database persistence, showing strong potential for real-world productivity use cases.',
    repoUrl: 'https://github.com/buikhueanh/type-a-buddy',
  },
  {
    id: 'defind',
    title: 'DeFind',
    category: 'Technical',
    type: 'Hackathon',
    stack: ['React', 'Google Maps API', 'Firebase'],
    color: '#E4C1F9',
    shortDesc: 'Real-time accessibility mapping tool that improves campus navigation for mobility-impaired users.',
    problem:
      'Students with mobility challenges often lack reliable, real-time information about accessibility features across campus.',
    outcome:
      'Led a team of 3 building a real-time accessibility mapping tool using Google Maps API and Firebase, improving campus navigation for mobility-impaired users and winning 1st place at TigerHacks.',
    demoUrl: 'https://devpost.com/software/defind',
    repoUrl: 'https://github.com/buikhueanh/DeFind',
  },
  {
    id: 'cognizenx',
    title: 'CognizenX',
    category: 'Technical',
    type: 'Production',
    stack: ['React Native', 'MongoDB', 'OpenAI GPT-4', 'Serverless APIs'],
    color: '#FF99C8',
    shortDesc: 'Dementia support app that uses AI-generated content and analytics to improve user engagement.',
    problem:
      'Elderly users with cognitive decline need engaging and adaptive digital support tools that can personalize experiences over time.',
    outcome:
      'Integrated OpenAI GPT-4 into a production mobile application, designed backend services with serverless APIs and MongoDB, and implemented session tracking pipelines to support scalable AI experimentation and product iteration.',
    demoUrl: 'https://apps.apple.com/us/app/cognizenx/id6745492895',
  },
  {
    id: 'c-section-prediction',
    title: 'C-Section Prediction & Overuse Analysis',
    category: 'Data & ML',
    type: 'Research',
    stack: ['Python', 'Stata', 'Logistic Regression', 'Machine Learning'],
    color: '#A9DEF9',
    shortDesc: 'Modeled C-section probability using 320K+ U.S. natality records to study overuse under low-risk conditions.',
    problem:
      'C-sections are sometimes overused in low-risk pregnancies, but identifying the demographic and clinical drivers requires large-scale statistical analysis.',
    outcome:
      'Applied Python and Stata to engineer, clean, and model 320K+ U.S. natality observations, using logistic regression and machine-learning methods to quantify how demographic and clinical factors influence C-section probability under low-risk conditions.',
  },
  {
    id: 'p2p-lending-default-risk',
    title: 'P2P Lending Default Risk Prediction',
    category: 'Data & ML',
    type: 'AI / ML',
    stack: ['Python', 'SQL', 'Logistic Regression', 'Random Forest'],
    color: '#E4C1F9',
    shortDesc: 'Default risk modeling project built on 1M+ lending records to uncover drivers of loan performance.',
    problem:
      'Lenders need better ways to identify high-risk borrowers and reduce default exposure using historical lending data.',
    outcome:
      'Cleaned and analyzed 1M+ lending records using Python and SQL, then built Logistic Regression and Random Forest models achieving 0.715 AUC to generate actionable lending risk insights.',
    repoUrl: 'https://github.com/buikhueanh/P2P_lending_default_risk_prediction',
  },
  {
    id: 'ibm-equinix-ma-strategy',
    title: 'M&A Strategy for IBM and Equinix',
    category: 'Business Analytics',
    type: 'Case Study',
    stack: ['Bloomberg Terminal', 'Excel', 'Financial Analysis', 'Market Research'],
    color: '#FF99C8',
    shortDesc: 'Strategic acquisition analysis using financial and market data from 50+ companies.',
    problem:
      'IBM needed a data-backed acquisition strategy in a rapidly evolving data center infrastructure market.',
    outcome:
      'Led a 5-member team analyzing financial and market datasets from 50+ companies using Bloomberg Terminal, identifying industry trends and synthesizing recommendations that ranked Top 25 out of 1,000+ teams globally at the Harvard Global Case Competition.',
    demoUrl:
      'https://www.linkedin.com/posts/anh-k-bui-b3954b212_our-teams-submission-activity-7201612458157895681-f_sY?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADXUcJ0BGurgccmhxYHT35HQVRcPJ7Q7kis',
  },
  {
    id: 'efficient-frontier-portfolio-optimization',
    title: 'Efficient Frontier Portfolio Optimization',
    category: 'Finance',
    type: 'Data Analysis',
    stack: ['Excel VBA', 'Portfolio Optimization', 'Risk Analysis', 'Modern Portfolio Theory'],
    color: '#A9DEF9',
    shortDesc: 'Portfolio optimization model that computes the efficient frontier across diversified assets.',
    problem:
      'Investors need a structured way to evaluate trade-offs between return and risk across multiple asset combinations.',
    outcome:
      'Built an Excel VBA-based portfolio optimization model to compute the efficient frontier, identify minimum-variance and maximum-return portfolios, and translate quantitative findings into client-oriented asset allocation insights.',
  },
  {
    id: 'grabbeforegrad',
    title: 'GrabBeforeGrad',
    category: 'Product & Leadership',
    type: 'Product',
    stack: ['Product Strategy', 'Growth Marketing', 'Marketplace Operations', 'Content Strategy'],
    color: '#E4C1F9',
    shortDesc: 'Student resale marketplace launched for graduating seniors with strong early organic traction.',
    problem:
      'Graduating seniors often struggle to quickly sell furniture and belongings before leaving campus, while other students want affordable secondhand options.',
    outcome:
      'Co-founded and launched a student resale marketplace that reached 40,000+ views in 4 days, achieved a 50% sell-through rate, and validated strong product-market demand through organic growth and marketplace execution.',
  },
]