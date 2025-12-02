import { BlogPost } from '../types';

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
