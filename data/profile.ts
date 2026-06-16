import { Profile } from '../types';

export const profile: Profile = {
  name: "Hao Tang",
  tagline: "I build evaluation systems, retrieval-memory benchmarks, and reliable ML infrastructure for agents and scientific ML.",
  email: "hao.tang@wisc.edu",
  // To replace the image:
  // 1. Add your image file to your project's public folder (e.g., 'me.jpg')
  // 2. Change the line below to: avatar: "/me.jpg"
  avatar: "/me.jpg",
  social: {
    github: "https://github.com/htang7415",
    linkedin: "https://www.linkedin.com/in/hao-tang-1b9069255/",
  },
  about: {
    paragraphs: [
      "I'm pursuing an M.S. in Computer Sciences at UW-Madison and building systems that make model behavior easier to measure, compare, and reproduce.",
      "Recent work includes MEMTRACE for agent memory risk, MaxionBench for vector retrieval decisions, HyprShare as a SwiftUI product, and diffusion/UQ pipelines for scientific ML."
    ]
  }
};
