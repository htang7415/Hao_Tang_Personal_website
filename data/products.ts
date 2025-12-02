import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'AutoSummary AI',
    subtitle: 'Intelligent Document Summarization',
    description: 'A SaaS platform that processes long-form PDF documents and generates concise, actionable executive summaries using custom LLM chains.',
    role: 'Lead Engineer',
    year: '2024',
    tags: ['AI', 'SaaS', 'React', 'Python'],
    url: '#',
    featured: true,
  },
  {
    id: 'p2',
    name: 'DevFlow Dashboard',
    subtitle: 'Internal Developer Productivity Tool',
    description: 'An internal dashboard aggregating metrics from Jira, GitHub, and CI/CD pipelines to give engineering managers a holistic view of team velocity.',
    role: 'Solo Developer',
    year: '2023',
    tags: ['Internal Tool', 'Dashboard', 'TypeScript'],
    url: '#',
    featured: true,
  },
  {
    id: 'p3',
    name: 'EcoTrack Mobile',
    subtitle: 'Sustainable Habit Tracker',
    description: 'A React Native application helping users track their carbon footprint based on daily commute and dietary choices.',
    role: 'Product & Engineering',
    year: '2022',
    tags: ['Mobile', 'React Native', 'B2C'],
    url: '#',
    featured: false,
  },
];
