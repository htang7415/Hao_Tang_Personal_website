import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'HyprShare',
    subtitle: 'Group Expense Sharing and Trip Planning',
    description:
      'A privacy-first iOS app for splitting group expenses and coordinating trips, with Core Data storage, optional Supabase sync, real-time collaboration, and a greedy debt-simplification engine that minimizes settlement transfers.',
    role: 'Founder & Full-stack iOS Developer',
    year: '2025',
    tags: ['iOS', 'SwiftUI', 'Supabase', 'Product'],
    url: 'https://hyprshare.vercel.app/',
    featured: true,
  },
  {
    id: 'p2',
    name: 'Polymer Discovery Platform',
    subtitle: 'ML Platform for Water-Soluble Polymer Design',
    description:
      'A Streamlit-based web app that surfaces trained PINN and transfer-learning models for polymer property prediction and Bayesian optimization, enabling rapid exploration of 14.8M+ candidates through an intuitive UI.',
    role: 'Developer & ML Researcher',
    year: '2025',
    tags: ['Machine Learning', 'Streamlit', 'AI for Science'],
    url: 'https://polymer-prediction-platform-ht.streamlit.app/',
    featured: true,
  },
];

