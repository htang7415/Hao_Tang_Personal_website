import { Profile } from '../types';

export const profile: Profile = {
  name: "Hao Tang",
  role: "Software and ML Systems Engineer",
  tagline: "I build reliable software, ML evaluation systems, and scientific AI workflows with clear interfaces and measurable behavior.",
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
      "I'm a Ph.D. student in Mechanical Engineering at UW-Madison with a parallel M.S. in Computer Sciences. My work connects production software, ML systems, retrieval benchmarks, agent-memory evaluation, uncertainty quantification, and generative modeling.",
      "Recent work includes HyprShare, a native SwiftUI expense-sharing app, and Python benchmark systems for vector retrieval infrastructure, tool-using AI agents, and polymer inverse design."
    ]
  }
};
