import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'meshstake',
    name: 'MeshStake',
    subtitle: 'AI-Native Industry Intelligence · 1.1 in Production',
    description:
      'Tracks Energy, Chips, Infrastructure, Models, and Applications through reviewed Events, including cited SEC financial comparisons. Discover also features Latest News, with Search and a private Library for saving and following.',
    role: 'Founder & AI/Software Engineer',
    year: 'May 2026 - Present',
    tags: ['Claude', 'Agent Harness', 'Evaluation', 'Python', 'AWS'],
    url: 'https://meshstake.com/',
    featured: true,
    highlights: [
      'The first documented Production run of the Claude editorial agent screened 9 leads and proposed 5 reviewable Event candidates in 7 calls at $0.0019. Publication requires separate approval.',
      'The fail-closed harness enforces source rights, caps requests at 18,000 bytes and replies at 800 tokens, checks claims against verbatim evidence, replays recorded results, and reserves spend.',
      'A labeled editorial holdout yielded 19/20 precision@5, 16/16 critical coverage, and 0/190 citation problems at $0.0009 in model cost per Event.',
      'Raised a live Claude research agent from 7/18 to 17/18 on unchanged labeled cases in Staging by resizing its token bound from measured requests and narrowing quote selection.',
    ],
  },
  {
    id: 'meshforth',
    name: 'MeshForth',
    subtitle: 'Native iOS Discovery · App Store-published 1.1',
    description:
      'A SwiftUI app for iPhone and iPad. Browse reviewed activity ideas in Explore, discover nearby places with Apple Maps, and keep activities and places in one private Saved list.',
    role: 'Independent iOS/Backend Engineer',
    year: 'iOS 1.1 · Nov. 2026',
    tags: ['SwiftUI', 'MapKit', 'Supabase', 'PostgreSQL', 'TypeScript', 'Claude API'],
    url: 'https://apps.apple.com/us/app/meshforth/id6823819592',
    featured: true,
    highlights: [
      'Matched 36/40 live Claude intent cases with 100% strict-schema replies and no flagged sensitive terms at about $0.007 per 40-case run, with consent gating and on-device fallback.',
      'Unified saved activities and places under live-session authorization and per-user PostgreSQL row-level security.',
      'Implemented retryable account deletion with Keychain receipts, bounded cleanup, and a deletion journal for recovery.',
    ],
  },
  {
    id: 'hyprshare',
    name: 'HyprShare',
    subtitle: 'Earlier iOS App for Shared Bills and Group Plans',
    description:
      'An earlier native SwiftUI app for iPhone and iPad, shipped through the App Store in 8 languages. It brought shared bills, debt settlement, and co-edited plans together with invite-code, QR, and deep-link onboarding.',
    role: 'Founder & iOS/Backend Engineer',
    year: 'May 2025 - Nov. 2025',
    tags: ['SwiftUI', 'Core Data', 'Supabase', 'PostgreSQL', 'RLS', 'XCTest'],
    url: 'https://hyprshare.vercel.app/',
    featured: false,
    highlights: [
      'Offline-first: every edit lands in a local Core Data replica, then syncs to Supabase/PostgreSQL with last-writer-wins conflict handling and soft-delete reconciliation.',
      '67 versioned SQL migrations with group-scoped row-level security, so each ledger stays private to its members.',
    ],
  },
];
