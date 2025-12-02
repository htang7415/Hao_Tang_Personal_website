
import { Product, ResearchItem, BlogPost, ResourceItem, InterestItem } from './types';

// --- PRODUCTS ---
export const products: Product[] = [
  {
    id: 'p1',
    name: 'AutoSummary AI',
    subtitle: 'Intelligent Document Summarization',
    description: 'A SaaS platform that processes long-form PDF documents and generates concise, actionable executive summaries using custom LLM chains.',
    role: 'Lead Engineer',
    year: '2024',
    tags: ['AI', 'SaaS', 'React', 'Python'],
    url: '#',
    featured: true,
  },
  {
    id: 'p2',
    name: 'DevFlow Dashboard',
    subtitle: 'Internal Developer Productivity Tool',
    description: 'An internal dashboard aggregating metrics from Jira, GitHub, and CI/CD pipelines to give engineering managers a holistic view of team velocity.',
    role: 'Solo Developer',
    year: '2023',
    tags: ['Internal Tool', 'Dashboard', 'TypeScript'],
    url: '#',
    featured: true,
  },
  {
    id: 'p3',
    name: 'EcoTrack Mobile',
    subtitle: 'Sustainable Habit Tracker',
    description: 'A React Native application helping users track their carbon footprint based on daily commute and dietary choices.',
    role: 'Product & Engineering',
    year: '2022',
    tags: ['Mobile', 'React Native', 'B2C'],
    url: '#',
    featured: false,
  },
];

// --- RESEARCH ---
export const researchItems: ResearchItem[] = [
  {
    id: 'r1',
    title: 'Optimizing RAG Pipelines for Technical Documentation',
    typeOrVenue: 'Internal Whitepaper / Experiment',
    summary: 'Investigating hybrid search strategies (dense + sparse vector retrieval) to improve retrieval accuracy for highly technical API documentation.',
    tags: ['NLP', 'RAG', 'LLMs'],
    links: {
      pdf: '#',
      code: '#',
    },
    featured: true,
  },
  {
    id: 'r2',
    title: 'Low-Resource Language Translation Prototype',
    typeOrVenue: 'Side Project / Prototype',
    summary: 'Fine-tuning a smaller transformer model to handle translation between English and specific low-resource dialects with limited training data.',
    tags: ['Translation', 'Fine-tuning', 'PyTorch'],
    links: {
      demo: '#',
    },
    featured: true,
  },
  {
    id: 'r3',
    title: 'Visualizing High-Dimensional Embeddings',
    typeOrVenue: 'Blog Experiment',
    summary: 'A web-based interactive tool using WebGL to visualize latent spaces of various text embedding models.',
    tags: ['Visualization', 'WebGL', 'Embeddings'],
    links: {
      demo: '#',
      code: '#',
    },
    featured: false,
  },
];

// --- BLOGS ---
export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'Why I Switched from Redux to Zustand',
    date: 'Oct 12, 2024',
    summary: 'A look at state management simplicity and why boilerplate reduction matters for velocity.',
    tags: ['Engineering', 'React'],
    url: '#',
  },
  {
    id: 'b2',
    title: 'Practical Prompt Engineering for Developers',
    date: 'Aug 04, 2024',
    summary: 'Moving beyond "magic words" to structured prompt templates and output validation.',
    tags: ['AI', 'Guide'],
    url: '#',
  },
  {
    id: 'b3',
    title: 'Building Resilient APIs',
    date: 'Jun 20, 2024',
    summary: 'Strategies for rate limiting, caching, and graceful degradation in production services.',
    tags: ['Backend', 'System Design'],
    url: '#',
  },
];

// --- RESOURCES ---
export const resources: ResourceItem[] = [
  {
    id: 'res1',
    title: 'Latent Space',
    description: 'Deep dives into AI engineering and the business of ML.',
    category: 'Podcast',
    url: '#',
  },
  {
    id: 'res2',
    title: 'Hacker News',
    description: 'The classic tech news aggregator. Good for keeping a pulse on the industry.',
    category: 'Community',
    url: '#',
  },
  {
    id: 'res3',
    title: 'Karpathy on YouTube',
    description: 'Andrej Karpathy\'s deep dives into how LLMs and neural nets actually work.',
    category: 'Channel',
    url: '#',
  },
  {
    id: 'res4',
    title: 'Excalidraw',
    description: 'My go-to tool for quick architecture diagrams and wireframes.',
    category: 'Tool',
    url: '#',
  },
];

// --- INTERESTS ---
// Helper to generate dummy books for pagination demo
const generateBooks = (): InterestItem[] => {
  const baseBooks: InterestItem[] = [
    {
      id: 'b1',
      category: 'Reading',
      title: 'The Design of Everyday Things',
      subtitle: 'Don Norman',
      status: 'Read',
      type: 'Design',
      note: 'Essential UX foundation.',
    },
    {
      id: 'b2',
      category: 'Reading',
      title: 'Superintelligence',
      subtitle: 'Nick Bostrom',
      status: 'Reading',
      type: 'AI / Philosophy',
      note: 'Dense, but critical for AI safety context.',
    },
    {
      id: 'b3',
      category: 'Reading',
      title: 'Designing Data-Intensive Applications',
      subtitle: 'Martin Kleppmann',
      status: 'Read',
      type: 'Engineering',
      note: 'The bible for distributed systems.',
    },
    {
      id: 'b4',
      category: 'Reading',
      title: 'Chip War',
      subtitle: 'Chris Miller',
      status: 'Want to Read',
      type: 'History / Tech',
      note: 'Understanding the hardware layer.',
    },
    {
      id: 'b5',
      category: 'Reading',
      title: 'Build',
      subtitle: 'Tony Fadell',
      status: 'Read',
      type: 'Business',
      note: 'Practical advice on product management.',
    },
    {
      id: 'b6',
      category: 'Reading',
      title: 'Thinking, Fast and Slow',
      subtitle: 'Daniel Kahneman',
      status: 'Read',
      type: 'Psychology',
      note: 'Cognitive biases explained.',
    },
    {
      id: 'b7',
      category: 'Reading',
      title: 'Deep Work',
      subtitle: 'Cal Newport',
      status: 'Read',
      type: 'Productivity',
      note: 'Reclaiming focus in a distracted world.',
    },
    {
      id: 'b8',
      category: 'Reading',
      title: 'Human Compatible',
      subtitle: 'Stuart Russell',
      status: 'Reading',
      type: 'AI Safety',
      note: 'Control problem in AI.',
    },
    {
      id: 'b9',
      category: 'Reading',
      title: 'Zero to One',
      subtitle: 'Peter Thiel',
      status: 'Read',
      type: 'Business',
      note: 'Startups and contrarian thinking.',
    },
    {
      id: 'b10',
      category: 'Reading',
      title: 'Atomic Habits',
      subtitle: 'James Clear',
      status: 'Read',
      type: 'Self Improvement',
      note: 'Systematic approach to self-improvement.',
    },
    {
      id: 'b11',
      category: 'Reading',
      title: 'Clean Code',
      subtitle: 'Robert C. Martin',
      status: 'Read',
      type: 'Engineering',
      note: 'Fundamentals.',
    },
    {
      id: 'b12',
      category: 'Reading',
      title: 'The Pragmatic Programmer',
      subtitle: 'Andrew Hunt',
      status: 'Read',
      type: 'Engineering',
      note: 'Timeless advice.',
    },
    // Adding more diverse books to reach > 25 for pagination demo
    { id: 'b13', category: 'Reading', title: 'Sapiens', subtitle: 'Yuval Noah Harari', status: 'Read', type: 'History' },
    { id: 'b14', category: 'Reading', title: 'Dune', subtitle: 'Frank Herbert', status: 'Read', type: 'Sci-Fi' },
    { id: 'b15', category: 'Reading', title: 'Snow Crash', subtitle: 'Neal Stephenson', status: 'Read', type: 'Sci-Fi' },
    { id: 'b16', category: 'Reading', title: 'Steve Jobs', subtitle: 'Walter Isaacson', status: 'Read', type: 'Biography' },
    { id: 'b17', category: 'Reading', title: 'Shoe Dog', subtitle: 'Phil Knight', status: 'Read', type: 'Memoir' },
    { id: 'b18', category: 'Reading', title: 'The Lean Startup', subtitle: 'Eric Ries', status: 'Read', type: 'Business' },
    { id: 'b19', category: 'Reading', title: 'Refactoring', subtitle: 'Martin Fowler', status: 'Read', type: 'Engineering' },
    { id: 'b20', category: 'Reading', title: 'The Mythical Man-Month', subtitle: 'Fred Brooks', status: 'Read', type: 'Engineering' },
    { id: 'b21', category: 'Reading', title: 'Meditations', subtitle: 'Marcus Aurelius', status: 'Read', type: 'Philosophy' },
    { id: 'b22', category: 'Reading', title: '1984', subtitle: 'George Orwell', status: 'Read', type: 'Fiction' },
    { id: 'b23', category: 'Reading', title: 'Brave New World', subtitle: 'Aldous Huxley', status: 'Read', type: 'Fiction' },
    { id: 'b24', category: 'Reading', title: 'Introduction to Algorithms', subtitle: 'CLRS', status: 'Read', type: 'Computer Science' },
    { id: 'b25', category: 'Reading', title: 'Structure and Interpretation of Computer Programs', subtitle: 'Abelson & Sussman', status: 'Want to Read', type: 'Computer Science' },
    { id: 'b26', category: 'Reading', title: 'Code Complete', subtitle: 'Steve McConnell', status: 'Read', type: 'Engineering' },
    { id: 'b27', category: 'Reading', title: 'Hooked', subtitle: 'Nir Eyal', status: 'Read', type: 'Product' },
    { id: 'b28', category: 'Reading', title: 'Inspired', subtitle: 'Marty Cagan', status: 'Read', type: 'Product' },
  ];
  return baseBooks;
};

export const interests: InterestItem[] = [
  // --- SPORTS ---
  {
    id: 's1',
    category: 'Sports',
    title: 'Soccer',
    subtitle: 'Messi, Pedri',
    note: 'Watching FC Barcelona.',
  },
  {
    id: 's2',
    category: 'Sports',
    title: 'Formula 1',
    subtitle: 'Max Verstappen, Charles Leclerc',
    note: 'Red Bull & Ferrari battles.',
  },
  {
    id: 's3',
    category: 'Sports',
    title: 'Tennis',
    subtitle: 'Novak Djokovic, Carlos Alcaraz',
    note: 'Grand Slam excitement.',
  },
  {
    id: 's4',
    category: 'Sports',
    title: 'Basketball',
    subtitle: 'Kobe Bryant, Jayson Tatum',
    note: 'NBA action.',
  },

  // --- MUSIC: ARTISTS LIST ---
  // We use a special item to hold the list of artists
  {
    id: 'm-artists-list',
    category: 'Music',
    title: 'Favorite Artists',
    items: ['The Beatles', 'Bob Dylan', 'David Tao', 'IU', 'SZA', 'Kendrick Lamar'],
  },

  // --- MUSIC: ALBUMS LIST ---
  {
    id: 'm-alb-1',
    category: 'Music',
    title: 'Abbey Road',
    subtitle: 'The Beatles',
    year: '1969',
    type: 'Rock',
  },
  {
    id: 'm-alb-2',
    category: 'Music',
    title: 'David Tao',
    subtitle: 'David Tao',
    year: '1997',
    type: 'R&B',
  },
  {
    id: 'm-alb-3',
    category: 'Music',
    title: 'Rumours',
    subtitle: 'Fleetwood Mac',
    year: '1977',
    type: 'Rock',
  },
  {
    id: 'm-alb-4',
    category: 'Music',
    title: 'good kid, m.A.A.d city',
    subtitle: 'Kendrick Lamar',
    year: '2012',
    type: 'Hip Hop',
  },
  {
    id: 'm-alb-5',
    category: 'Music',
    title: 'Orange Moon',
    subtitle: 'Khalil Fong',
    year: '2008',
    type: 'Soul / R&B',
  },
  {
    id: 'm-alb-6',
    category: 'Music',
    title: 'The Miseducation of Lauryn Hill',
    subtitle: 'Lauryn Hill',
    year: '1998',
    type: 'R&B / Neo Soul',
  },
  {
    id: 'm-alb-7',
    category: 'Music',
    title: 'Songs in the Key of Life',
    subtitle: 'Stevie Wonder',
    year: '1976',
    type: 'Soul / Funk',
  },
  {
    id: 'm-alb-8',
    category: 'Music',
    title: 'SOS',
    subtitle: 'SZA',
    year: '2022',
    type: 'R&B',
  },
  {
    id: 'm-alb-9',
    category: 'Music',
    title: 'Starboy',
    subtitle: 'The Weeknd',
    year: '2016',
    type: 'Pop / R&B',
  },
  {
    id: 'm-alb-10',
    category: 'Music',
    title: 'Nevermind',
    subtitle: 'Nirvana',
    year: '1991',
    type: 'Rock',
  },
  
  // READING
  ...generateBooks(),
];
