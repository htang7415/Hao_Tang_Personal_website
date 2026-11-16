import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'meshstake',
    name: 'MeshStake',
    subtitle: 'AI-native Industry Intelligence',
    description: 'An independently developed platform for source-grounded industry research, starting with AI infrastructure. The engineering centers on traceable evidence, controlled publication and reliable research workflows.',
    role: 'Independent developer',
    year: 'In development',
    tags: ['Python', 'TypeScript', 'React', 'AWS'],
    url: 'https://meshstake.com/',
    featured: true,
    highlights: [
      'Implemented reviewed-filing publication with source validation, citation expiry and isolated evidence lineages.',
      'Offline-tested event research validates quotes and bounds model attempts; live model processing and UI integration are not established.',
      'Search and private Save/Follow workflows have Staging acceptance. Production Intelligence is not publicly launched.',
    ],
  },
  {
    id: 'meshforth',
    name: 'MeshForth',
    subtitle: 'Native iOS discovery · App Store 1.1',
    description: 'An independently developed iPhone and iPad app for finding activities and Apple Maps places, with private saved discoveries. Version 1.1 is available on the App Store.',
    role: 'Independent developer',
    year: 'Released',
    tags: ['Swift', 'SwiftUI', 'MapKit', 'Supabase', 'PostgreSQL'],
    url: 'https://apps.apple.com/us/app/meshforth/id6823819592',
    featured: true,
    highlights: [
      'Built native Explore and Saved experiences with MapKit discovery and optional location access.',
      'Implemented per-user authorization and retryable account deletion across database, storage and authentication services.',
      'Validated releases through separate app and backend checks, signed archives and App Store delivery records.',
    ],
  },
];
