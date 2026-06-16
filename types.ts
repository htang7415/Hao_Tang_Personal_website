
export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  role: string;
  year: string;
  tags: string[];
  url: string;
  featured: boolean;
}

export interface ResearchItem {
  id: string;
  title: string;
  typeOrVenue: string; // e.g. "Preprint", "Experiment", "Conference"
  summary: string;
  tags: string[];
  links?: {
    pdf?: string;
    code?: string;
    demo?: string;
  };
  featured: boolean;
  highlights?: string; // markdown list
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  url: string;
  slug: string;
}

export interface BlogPostFrontmatter {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  slug: string;
  published: boolean;
  readingTime?: number; // Reading time in minutes
  author?: string; // Optional author override
  coverImage?: string; // Optional hero/cover image
  views?: number; // View count
}

export interface MDXContent {
  default: React.ComponentType;
  frontmatter: BlogPostFrontmatter;
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  category: 'Podcast' | 'Community' | 'Channel' | 'Tool';
  url: string;
}

export interface InterestItem {
  id: string;
  category: 'Sports' | 'Music' | 'Reading';
  title: string; // Artist Name (Music), Book Title (Reading), Sport Name (Sports)
  subtitle?: string; // Author (Reading), Team (Sports), Artist (Album)
  items?: string[]; // List of items (e.g. Artists list)
  note?: string; // Commentary
  status?: 'Reading' | 'Read' | 'Want to Read'; // For Books
  type?: string; // For Books (e.g. History) or Albums (e.g. Genre)
  url?: string;
  year?: string; // For Albums
}

export interface Profile {
  name: string;
  tagline: string;
  email: string;
  avatar: string;
  social: {
    github: string;
    linkedin: string;
  };
  about: {
    paragraphs: string[];
  };
}
