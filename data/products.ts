import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'memtrace',
    name: 'MEMTRACE',
    subtitle: 'Memory-Safety Evaluation for Tool-Using Agents',
    description:
      'A Python/MLX benchmark for tracing persistent-memory risk in tool-using agents, with Pydantic schemas, deterministic tool stubs, causal scoring, Wilson intervals, and pytest validation.',
    role: 'AI Evaluation Research Engineer',
    year: '2026',
    tags: ['LLM Agents', 'Evaluation', 'MLX', 'Pydantic'],
    url: '/research',
    featured: true,
  },
  {
    id: 'maxionbench',
    name: 'MaxionBench',
    subtitle: 'Agent Memory Retrieval Benchmark',
    description:
      'A conformance-gated benchmark for vector retrieval infrastructure across FAISS, LanceDB, pgvector, and Qdrant, reporting quality, p99 latency, throughput, context cost, and budget stability.',
    role: 'Research Software Engineer',
    year: '2026',
    tags: ['Python', 'Retrieval', 'FAISS', 'Qdrant'],
    url: '/research',
    featured: true,
  },
  {
    id: 'hyprshare',
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
    id: 'polymer-design',
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
