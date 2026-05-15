import { Profile } from '../types';

export const profile: Profile = {
  name: "Hao Tang",
  role: "Software & Machine Learning Engineer",
  tagline: "I build production software, ML evaluation systems, and applied AI workflows with a focus on reliability, clear interfaces, and measurable behavior.",
  email: "htang7415@gmail.com",
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
    "I'm a Ph.D. student in Mechanical Engineering at UW–Madison with a parallel M.S. in Computer Sciences. My work spans software products, ML systems, retrieval benchmarks, agent-memory evaluation, uncertainty quantification, and generative modeling for scientific design.",
    "Outside of research, I design and ship practical software. My recent projects include HyprShare, a native SwiftUI app for group expense tracking with Core Data and optional Supabase sync, and Python benchmark systems for evaluating retrieval infrastructure and tool-using AI agents."
  ]
  }
};
