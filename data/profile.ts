import { Profile } from '../types';

export const profile: Profile = {
  name: "Hao Tang",
  tagline: "AI research engineering and reliable ML systems",
  email: "hao.max.tang@gmail.com",
  // To replace the image:
  // 1. Add your image file to your project's public folder (e.g., 'me.jpg')
  // 2. Change the line below to: avatar: "/me.jpg"
  avatar: "/me.jpg",
  social: {
    github: "https://github.com/htang7415",
    linkedin: "https://www.linkedin.com/in/hao-tang-1b9069255/",
    googleScholar: "https://scholar.google.com/citations?user=L0lvjVkAAAAJ&hl=en",
  },
  about: {
    paragraphs: [
      "I am an M.S. Computer Sciences student at UW-Madison building reliable AI infrastructure: agent evaluation harnesses, retrieval-memory benchmarks, post-training/RL workflows, and reproducible ML systems.",
      "My recent work includes MEMTRACE for persistent-memory safety evaluation, MaxionBench for vector retrieval decisions, RL-aligned diffusion for target-conditioned generation, PolyDiT for scalable discrete diffusion training, and HyprShare as a SwiftUI/Supabase product engineering project."
    ]
  }
};
