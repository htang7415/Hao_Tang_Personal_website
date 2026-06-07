import { Profile } from '../types';

export const profile: Profile = {
  name: "Hao Tang",
  role: "AI Research Engineer / ML Systems Research Engineer",
  tagline: "I build agent-evaluation systems, retrieval-memory benchmarks, post-training workflows, and reliable ML infrastructure with measurable behavior.",
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
      "I'm a Ph.D. student in Mechanical Engineering at UW-Madison with a parallel M.S. in Computer Sciences. My work connects AI evaluations, retrieval-memory infrastructure, post-training and RL workflows, uncertainty quantification, and production software.",
      "Recent work includes MEMTRACE for tool-using agent memory risk, MaxionBench for vector retrieval decision audits, HyprShare as a native SwiftUI product, and diffusion/uncertainty pipelines for scientific ML."
    ]
  }
};
