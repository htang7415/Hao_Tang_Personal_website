import { Profile } from '../types';

export const profile: Profile = {
  name: "Hao Tang",
  tagline: "I build tools for evaluating agents, retrieval systems, scientific ML models, and useful software products.",
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
      "I'm pursuing an M.S. in Computer Sciences at UW-Madison. My work centers on measurable software: retained traces, typed schemas, reproducible benchmarks, and products that keep working outside ideal conditions.",
      "Recent projects include MEMTRACE for agent memory risk, MaxionBench for retrieval decisions, HyprShare for shared expenses, and diffusion/UQ research for scientific data."
    ]
  }
};
