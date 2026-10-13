import { Profile } from '../types';

export const profile: Profile = {
  name: "Hao Tang",
  tagline: "LLM agents, serving infrastructure, and ML systems",
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
      "I am an M.S. Computer Sciences student at UW-Madison (graduating Aug. 2026). I build LLM agents that hold up in production, the serving infrastructure underneath them, and the models they run.",
      "Recent work: MeshStake, a live AI research agent for capital markets that only shows source-verified numbers; MEMTRACE, a platform for serving LLM agents efficiently with vLLM, llm-d, and KV-cache management; and research on RL-aligned diffusion and Diffusion Transformers trained on 8 H100 GPUs."
    ]
  }
};
