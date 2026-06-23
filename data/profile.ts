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
      "Hao Tang is an M.S. Computer Sciences student at UW-Madison focused on AI evaluation, retrieval systems, scientific ML, and practical product software.",
      "His recent work includes MEMTRACE, MaxionBench, HyprShare, and diffusion/UQ research. Outside work, he enjoys reading, sports, music, and podcasts."
    ]
  }
};
