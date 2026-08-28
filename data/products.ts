import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'meshstake',
    name: 'MeshStake',
    subtitle: 'Verified Public-Company Analysis Platform',
    description:
      'A live, evidence-first AI product for professional company-analysis workflows. A pinned LLM extracts typed candidate claims, while deterministic software validates grounding, evidence, warrant, and counterevidence before issuing a scoped publication verdict.',
    role: 'Founder & AI/Software Engineer',
    year: 'May 2026 - Present',
    tags: ['React', 'FastAPI', 'AWS', 'PostgreSQL', 'LLM Evaluation', 'AI Reliability'],
    url: 'https://app.meshstake.com/',
    featured: true,
    highlights: [
      'Built the verification and product platform across 159 Python modules and 105 TypeScript/TSX files, backed by 953 Python test functions and 190 web test cases.',
      'Shipped authenticated News, Markets, Agent, and Watchlist surfaces with frozen evidence releases, replayable policy hashes, market-data ingestion, and PostgreSQL-backed accounts.',
    ],
  },
  {
    id: 'hyprshare',
    name: 'HyprShare',
    subtitle: 'Group Expense and Planning iOS App',
    description:
      'A native SwiftUI app for shared expenses and group planning with exact split and settlement logic, invite/QR joins, notification history, localization, and optional Supabase/PostgreSQL collaboration sync.',
    role: 'Founder & iOS/Backend Engineer',
    year: 'May 2025 - Nov. 2025',
    tags: ['SwiftUI', 'Core Data', 'Supabase', 'PostgreSQL', 'RLS', 'XCTest'],
    url: 'https://hyprshare.vercel.app/',
    featured: true,
  },
];
