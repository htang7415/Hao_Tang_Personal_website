import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'HyprShare',
    subtitle: 'Native iOS Expense Sharing',
    description:
      'A SwiftUI app for group expense tracking with invite-code and QR joins, equal-split expense entry, settlement suggestions, group notes, notification history, Core Data persistence, and optional Supabase sync.',
    role: 'Founder & Full-stack iOS Developer',
    year: '2025',
    tags: ['iOS', 'SwiftUI', 'Supabase', 'Product'],
    url: 'https://hyprshare.vercel.app/',
    featured: true,
  },
  {
    id: 'p2',
    name: 'AI Benchmark Systems',
    subtitle: 'Retrieval and Agent-Memory Evaluation',
    description:
      'Python benchmark systems for retrieval infrastructure and tool-using AI agents, including MaxionBench decision audits across vector engines and MEMTRACE trace-level persistent-memory evaluation.',
    role: 'Research Software Engineer',
    year: '2026',
    tags: ['Python', 'Evaluation', 'FAISS', 'MLX'],
    url: '/research',
    featured: true,
  },
];
