import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'meshstake',
    name: 'MeshStake',
    subtitle: 'Evidence-Bound AI Research Agent for Capital Markets',
    description:
      'A live AI agent that answers questions about companies, investors, holdings, earnings, and market moves. The model only plans lookups and writes prose; deterministic code runs the tools and checks every number and citation against their results, and answers that fail are withheld. It does not give investment advice.',
    role: 'Founder & AI/Software Engineer',
    year: 'May 2026 - Present',
    tags: ['OpenRouter', 'Claude Haiku', 'Python', 'AWS Lambda', 'DynamoDB', 'React', 'LLM Evaluation', 'AI Reliability'],
    url: 'https://app.meshstake.com/',
    featured: true,
    highlights: [
      'Bounded agent loop (at most 3 planning steps, 6 lookups, and 25 s per turn) over 8 sandboxed tools, with cost reserved before every model call.',
      'Every model path runs Claude Haiku 5.5 through one OpenRouter gateway with zero-retention routes and a shared spend ledger; the first-choice model was dropped after measuring 26–32 s calls.',
      'Deterministic guardrails check every citation, number, and up/down claim against tool results; answers that fail are withheld while their sourced data stays visible.',
      'A 32-case adversarial golden eval runs in CI (unknown tools, call flooding, cross-user reads, invented numbers), turning live failures into regression cases.',
      'Cut AWS run-rate 95% (~$283 to $13/month at an Oct. 5 baseline) by measuring Aurora against real usage and migrating to single-table DynamoDB.',
      'Research activity shows each lookup\'s outcome, sources, coverage limits, and stopping reason; News, Markets, and the agent read one audited, hash-bound publication.',
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
