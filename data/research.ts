import { ResearchItem } from '../types';

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
