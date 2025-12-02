
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
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  url: string;
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
