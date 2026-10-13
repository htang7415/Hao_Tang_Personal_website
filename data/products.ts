import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'meshstake',
    name: 'MeshStake',
    subtitle: 'Evidence-Bound AI Research Agent for Capital Markets',
    description:
      'A live AI agent that answers questions about companies, investors, holdings, earnings, and market moves. The model only plans lookups and writes prose; deterministic code runs the tools and checks every number, so only source-verified data reaches the user. It does not give investment advice.',
    role: 'Founder & AI/Software Engineer',
    year: 'May 2026 - Present',
    tags: ['Gemini', 'Python', 'AWS Lambda', 'DynamoDB', 'React', 'LLM Evaluation', 'AI Reliability'],
    url: 'https://app.meshstake.com/',
    featured: true,
    highlights: [
      'Bounded plan-tool-compose agent loop over 8 sandboxed tools: 2.8 s median and $0.0012 per answer across 51 production turns.',
      'Deterministic guardrails check every citation, number, and up/down claim; 34 of 36 answers passed, and both failures were withheld rather than shown.',
      'A 32-case adversarial golden eval runs in CI (unknown tools, call flooding, cross-user reads, invented numbers), with a new case for every live bug.',
      'Cut AWS run-rate 95% (~$283 to $13/month) by measuring Aurora against real usage and migrating to single-table DynamoDB.',
    ],
  },
  {
    id: 'hyprshare',
    name: 'HyprShare',
    subtitle: 'iOS App for Shared Bills and Group Plans',
    description:
      'A native SwiftUI app on the App Store (iPhone and iPad, 8 languages) that gives groups one place for shared bills, debt settlement, and co-edited plans, with invite-code, QR, and deep-link onboarding.',
    role: 'Founder & iOS/Backend Engineer',
    year: 'May 2025 - Nov. 2025',
    tags: ['SwiftUI', 'Core Data', 'Supabase', 'PostgreSQL', 'RLS', 'XCTest'],
    url: 'https://hyprshare.vercel.app/',
    featured: true,
    highlights: [
      'Offline-first: every edit lands in a local Core Data replica, then syncs to Supabase/PostgreSQL with last-writer-wins conflict handling and soft-delete reconciliation.',
      '67 versioned SQL migrations with group-scoped row-level security, so each ledger stays private to its members.',
    ],
  },
];
