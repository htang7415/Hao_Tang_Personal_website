import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'meshstake',
    name: 'MeshStake',
    subtitle: 'Industry Intelligence · Initially AI Infrastructure',
    description:
      'Developing Discover, Library, and Search around reviewed evidence. Filing Search has Staging acceptance; Production Intelligence remains disabled. The earlier capital-markets agent and daily News have been retired.',
    role: 'Founder & AI/Software Engineer',
    year: 'May 2026 - Present',
    tags: ['Python', 'AWS', 'React', 'TypeScript', 'Evidence Validation'],
    url: 'https://meshstake.com/',
    featured: true,
    highlights: [
      'Implemented independently composed filing lineages with rights and expiry checks; multi-filing behavior is verified offline, with Production flags off.',
      'NVIDIA filing Search passed Staging desktop/mobile and account-isolation acceptance; this does not establish public Intelligence availability.',
      'Historical October 2026 architecture: reduced measured AWS run-rate about 95% ($283 to $13/month) through Aurora/RDS Proxy retirement and DynamoDB migration.',
    ],
  },
  {
    id: 'meshforth',
    name: 'MeshForth',
    subtitle: 'Native iOS Discovery · App Store-published 1.1',
    description:
      'A SwiftUI app for discovering reviewed activities and Apple Maps places, with Explore and a private Saved list. iOS 1.1 is published; Capture, Reflect, and AI Moment Match remain future work.',
    role: 'Independent iOS/Backend Engineer',
    year: 'iOS 1.1 · Nov. 2026',
    tags: ['SwiftUI', 'MapKit', 'Supabase', 'PostgreSQL', 'TypeScript'],
    url: 'https://apps.apple.com/us/app/meshforth/id6823819592',
    featured: true,
    highlights: [
      'Unified saved activities and places under live-session authorization and per-user PostgreSQL row-level security.',
      'Implemented retryable account deletion with Keychain receipts, bounded cleanup, and a deletion journal for recovery.',
    ],
  },
  {
    id: 'hyprshare',
    name: 'HyprShare',
    subtitle: 'Earlier iOS App for Shared Bills and Group Plans',
    description:
      'A native SwiftUI app on the App Store (iPhone and iPad, 8 languages) that gives groups one place for shared bills, debt settlement, and co-edited plans, with invite-code, QR, and deep-link onboarding.',
    role: 'Founder & iOS/Backend Engineer',
    year: 'May 2025 - Nov. 2025',
    tags: ['SwiftUI', 'Core Data', 'Supabase', 'PostgreSQL', 'RLS', 'XCTest'],
    url: 'https://apps.apple.com/de/app/hyprshare/id6754544881',
    featured: false,
    highlights: [
      'Offline-first: every edit lands in a local Core Data replica, then syncs to Supabase/PostgreSQL with last-writer-wins conflict handling and soft-delete reconciliation.',
      '67 versioned SQL migrations with group-scoped row-level security, so each ledger stays private to its members.',
    ],
  },
];
