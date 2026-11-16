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
      "I am a software and AI engineer with an M.S. in Computer Sciences from UW–Madison (August 2026). My work spans native iOS apps, Industry Intelligence, open-source inference routing, and research on LLM serving and generative models."
    ]
  }
};
