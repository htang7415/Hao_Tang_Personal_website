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
      "I am an M.S. Computer Sciences student at UW-Madison, graduating in August 2026. I build AI systems end to end: LLM agents people can trust, the infrastructure that serves them efficiently, and the models underneath."
    ]
  }
};
