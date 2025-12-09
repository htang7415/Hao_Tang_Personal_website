import { Profile } from '../types';

export const profile: Profile = {
  name: "Hao Tang",
  role: "Software & Machine Learning Engineer",
  tagline: "I build robust web applications and software products. I apply Artificial Intelligence where it solves real problems, focusing on clarity, utility, and user experience.",
  email: "htang7415@gmail.com",
  // To replace the image:
  // 1. Add your image file to your project's public folder (e.g., 'me.jpg')
  // 2. Change the line below to: avatar: "/me.jpg"
  avatar: "me.jpeg",
  social: {
    github: "https://github.com/htang7415",
    linkedin: "https://www.linkedin.com/in/hao-tang-1b9069255/",
  },
  about: {
    paragraphs: [
    "I'm a Ph.D. student in Mechanical Engineering at UW–Madison, working on machine learning for polymer and materials design. My recent work spans generative models (diffusion, transformers, LLM-based encoders), uncertainty-aware ML, and large-scale HPC pipelines, alongside building real tools like the Polymer Discovery Platform.",
    "Outside of research, I design and ship software products—most recently HyprShare, an iOS app for group expense sharing and trip planning built with SwiftUI, Core Data, and Supabase. I'm especially interested in roles and collaborations at the intersection of product engineering and applied AI, where I can take ideas or rough prototypes and turn them into reliable, production-ready systems that people actually use."
  ]
  }
};