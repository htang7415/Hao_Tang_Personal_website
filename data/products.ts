import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'HyprShare',
    subtitle: 'Native iOS Expense Sharing',
    description:
      'A SwiftUI app for group expense tracking, QR/code joins, equal-split expense entry, settlement suggestions, notification history, Core Data persistence, and optional Supabase sync.',
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
      'Python benchmark systems for retrieval infrastructure and tool-using AI agents, including MaxionBench vector-engine decision audits and MEMTRACE persistent-memory evaluation.',
    role: 'Research Software Engineer',
    year: '2026',
    tags: ['Python', 'Evaluation', 'FAISS', 'MLX'],
    url: '/research',
    featured: true,
  },
  {
    id: 'p3',
    name: 'Polymer Design Systems',
    subtitle: 'Diffusion Generation and Inverse Design',
    description:
      'Research software for multi-view polymer generation, property prediction, uncertainty-aware evaluation, and constrained water-miscible inverse design.',
    role: 'Machine Learning Researcher',
    year: '2025-2026',
    tags: ['PyTorch', 'Diffusion', 'RDKit', 'UQ'],
    url: '/research',
    featured: false,
  },
];
