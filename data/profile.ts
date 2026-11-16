import { Profile } from '../types';

export const profile: Profile = {
  name: "Hao Tang",
  tagline: "AI Systems Engineer",
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
      "I build inference routing, scheduling and reliable AI applications. My work spans upstream open-source contributions, independent products and ML research. I hold an M.S. in Computer Sciences from UW–Madison (August 2026)."
    ]
  }
};
