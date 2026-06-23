import { Profile } from '../types';

export const profile: Profile = {
  name: "Hao Tang",
  tagline: "",
  email: "hao.tang@wisc.edu",
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
      "Hao Tang is an M.S. Computer Sciences student at UW-Madison working across AI evaluation, retrieval systems, scientific ML, and product software.",
      "My recent work includes MEMTRACE for agent memory risk, MaxionBench for retrieval decisions, HyprShare for shared expenses, and diffusion/UQ research for reliability."
    ]
  }
};
