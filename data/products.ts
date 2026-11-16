import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'meshstake',
    name: 'MeshStake',
    subtitle: 'AI Infrastructure Industry Intelligence',
    description: 'An industry research product built around evidence publication, source rights and traceable filings. The current focus is AI infrastructure; the implemented Intelligence architecture is separate from its public release.',
    role: 'Independent project owner',
    year: 'May 2026 – Present',
    tags: ['Python', 'React', 'TypeScript', 'AWS'],
    url: 'https://meshstake.com/',
    featured: true,
    highlights: [
      'Versioned publication contracts bind claims to reviewed filing statements. Rights and citation-expiry checks gate what the system can serve.',
      'The runtime composes independently verified filing lineages, isolating expiry, withdrawal and failure to the affected lineage. Multi-lineage behavior was verified offline; filing Search was accepted on Staging.',
      'Production Intelligence remains default-off. The former capital-markets agent and OpenRouter architecture have been retired.',
      'Historical engineering result, October 5, 2026: reduced measured AWS monthly run-rate from approximately $283 to $13 by migrating Aurora/RDS Proxy to DynamoDB and retiring idle infrastructure. This describes the retired system, not the current product’s operating cost.',
    ],
  },
  {
    id: 'meshforth',
    name: 'MeshForth',
    subtitle: 'Native iOS activity and place discovery',
    description: 'A SwiftUI app combining activity discovery with device-side MapKit place search. Version 1.1 is published on the App Store; activities and places can be kept together in a private Saved list.',
    role: 'Independent project owner',
    year: '2026',
    tags: ['SwiftUI', 'MapKit', 'Supabase', 'PostgreSQL'],
    url: 'https://apps.apple.com/us/app/meshforth/id6823819592',
    featured: true,
    highlights: [
      'Apple Maps place data stays between the device and Apple, except for a saved Place ID. Discovery works without location permission.',
      'Private Saved data uses live-session authorization and per-user row-level access controls.',
      'Retryable account deletion coordinates database, Storage and Auth cleanup. Deletion receipts allow an accepted request to finish after authentication is removed.',
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
    featured: false,
    highlights: [
      'Offline-first: every edit lands in a local Core Data replica, then syncs to Supabase/PostgreSQL with last-writer-wins conflict handling and soft-delete reconciliation.',
      '67 versioned SQL migrations with group-scoped row-level security, so each ledger stays private to its members.',
    ],
  },
];
