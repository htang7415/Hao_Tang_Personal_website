import React from 'react';
import { ArrowRight, Github, GraduationCap, Linkedin, Mail } from '../components/icons';
import { profile } from '../data/profile';

type Project = {
  title: string;
  meta: string;
  href: string;
  summary: string;
  result: string;
};

const layers: { title: string; description: string; projects: Project[] }[] = [
  {
    title: 'Product engineering',
    description: 'Native iOS discovery and evidence workflows for Industry Intelligence.',
    projects: [
      {
        title: 'MeshStake',
        meta: 'In development · May 2026 - Present',
        href: '#/products#meshstake',
        summary: 'Industry Intelligence focused initially on AI Infrastructure, with reviewed filings and source-rights controls.',
        result: 'Filing Search passed Staging acceptance; Production Intelligence remains disabled.',
      },
      {
        title: 'MeshForth',
        meta: 'App Store · iOS 1.1',
        href: '#/products#meshforth',
        summary: 'Native SwiftUI discovery with reviewed activities, Apple Maps places, and private saved discoveries.',
        result: 'Published iOS 1.1 with Explore and Saved; future Capture and Reflect features remain planned.',
      },
    ],
  },
  {
    title: 'LLM serving and open source',
    description: 'Research on agent context and KV caches, alongside upstream inference-router contributions.',
    projects: [
      {
        title: 'llm-d router contributions',
        meta: 'Upstream contribution · Nov. 2026',
        href: '#/research#llm-d',
        summary: 'Added opt-in exploration for zero-score endpoints while preserving default weighted routing.',
        result: 'PR #3972 merged November 15; the multi-role overflow proposal in #3965 remains open.',
      },
      {
        title: 'MEMTRACE',
        meta: 'Historical research · Sept. 2025 - Oct. 2026',
        href: '#/research#memtrace',
        summary: 'An independent open-source platform on one Apple Silicon Mac, with vLLM, llama.cpp, llm-d, and a Go gateway.',
        result: 'Cut prefill recompute 14–39% in four paired Copilot replays on Qwen3-8B.',
      },
    ],
  },
  {
    title: 'Model training and alignment',
    description: 'Training generative models, aligning them with reinforcement learning, and measuring how far to trust their predictions.',
    projects: [
      {
        title: 'RL-Aligned Diffusion Transformer',
        meta: 'Research · Sept. 2025 - Mar. 2026',
        href: '#/research#rl-inverse-design',
        summary: 'Aligned a conditional Diffusion Transformer to a multi-constraint reward with PPO, GRPO, and DPO.',
        result: 'Raised discovery hit rate from 66.9% to 98.9% with PPO (79.7% quota fill).',
      },
      {
        title: 'PolyDiT',
        meta: 'Research · Sept. 2024 - Aug. 2025',
        href: '#/research#polydit',
        summary: 'Masked Diffusion Transformers trained across five data representations and four model sizes.',
        result: 'Showed that no single representation wins on both validity and property prediction.',
      },
      {
        title: 'Uncertainty Quantification Benchmark',
        meta: 'Publication · JCIM 2025',
        href: '#/research#uq-benchmark',
        summary: 'Benchmarked nine uncertainty-quantification methods for property prediction.',
        result: 'Found that no method wins everywhere: the right choice depends on the data regime.',
      },
    ],
  },
];

const Home: React.FC = () => {
  return (
    <div className="pb-20">
      <section className="max-w-4xl mx-auto px-6 pt-28 md:pt-32">
        <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-10 border-b border-slate-200 dark:border-slate-800 pb-10">
          <div className="h-48 w-48 sm:h-56 sm:w-56 md:h-auto md:w-56 flex-none overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                About
              </h1>
              <div className="space-y-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {profile.about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium">
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Mail size={16} />
                {profile.email}
              </a>
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Github size={16} />
                GitHub
              </a>
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a href={profile.social.googleScholar} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                <GraduationCap size={16} />
                Google Scholar
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">What I Build</h2>
          <div className="flex items-center gap-4">
            <a href="#/products" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
              Products <ArrowRight size={15} />
            </a>
            <a href="#/research" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
              Research <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <div className="space-y-10">
          {layers.map((layer, index) => (
            <div key={layer.title}>
              <p className="text-xs font-medium uppercase text-slate-500 dark:text-slate-500">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                {layer.title}
              </h3>
              <p className="mt-1 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {layer.description}
              </p>
              <div className="mt-4 space-y-4 border-l-2 border-slate-200 dark:border-slate-800 pl-5">
                {layer.projects.map((project) => (
                  <article key={project.title}>
                    <a
                      href={project.href}
                      className="group inline-flex items-center gap-2 text-base font-semibold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {project.title}
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </a>
                    <p className="text-xs font-medium uppercase text-slate-500 dark:text-slate-500">
                      {project.meta}
                    </p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.summary}
                    </p>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {project.result}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Previously shipped:{' '}
          <a href="#/products#hyprshare" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">
            HyprShare
          </a>
          , an iOS app on the App Store for shared bills and group plans.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Contact</h2>
        <p className="mt-2 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          I am open to AI Engineer, AI Infrastructure, Machine Learning Engineer, and Software Engineer roles.
        </p>
        <a href={`mailto:${profile.email}`} className="mt-4 inline-flex items-center gap-2 text-base font-medium text-blue-600 dark:text-blue-400 hover:underline">
          <Mail size={18} />
          {profile.email}
        </a>
      </section>
    </div>
  );
};

export default Home;
