import React from 'react';
import { ArrowRight, Github, GraduationCap, Linkedin, Mail } from '../components/icons';
import { profile } from '../data/profile';

const coreAreas = [
  {
    title: 'LLM Agents & Evaluation',
    description: 'Bounded tool-calling agents, deterministic grounding guardrails, adversarial golden evals, and LLM judges calibrated against labeled answers.',
  },
  {
    title: 'LLM Serving & KV Cache',
    description: 'vLLM and llama.cpp behind llm-d on Kubernetes: cache-aware routing, context management, and KV offload, with every result labeled real or simulated.',
  },
  {
    title: 'Model Training & Alignment',
    description: 'PyTorch Diffusion Transformers trained with multi-node DDP on H100 GPUs, PPO/GRPO/DPO alignment, and uncertainty quantification.',
  },
  {
    title: 'Product & Cloud Engineering',
    description: 'Shipped products on serverless AWS and SwiftUI/Supabase, with cost control, tests, and live operations.',
  },
];

const selectedWork = [
  {
    title: 'MeshStake',
    meta: 'Live AI agent · May 2026 - Present',
    href: '#/products#meshstake',
    summary: 'AI research agent for capital markets that only shows source-verified numbers.',
    points: [
      'Answers in 2.8 s median at $0.0012 per answer; deterministic guardrails passed 34 of 36 answers and withheld both failures.',
      'Cut AWS run-rate 95% (~$283 to $13/month) by migrating Aurora to DynamoDB.',
    ],
    tags: ['LLM agents', 'Guardrails', 'Evaluation', 'AWS'],
  },
  {
    title: 'MEMTRACE',
    meta: 'LLM serving research · Sept. 2025 - Oct. 2026',
    href: '#/research#memtrace',
    summary: 'Platform for serving LLM agents efficiently, measuring how serving decisions keep an agent\'s history in the KV cache.',
    points: [
      'Gateway context management cut prefill recompute 14-39% on replayed GitHub Copilot traffic.',
      'A real SSD KV-offload tier cut TTFT p95 41-53% for calls returning after a pause.',
    ],
    tags: ['vLLM', 'llm-d', 'KV cache', 'Go'],
  },
  {
    title: 'RL-Aligned Conditional Diffusion Transformer',
    meta: 'Research assistant, UW-Madison · Sept. 2025 - Mar. 2026',
    href: '#/research#rl-inverse-design',
    summary: 'Aligns a conditional Diffusion Transformer to a multi-constraint reward with PPO, GRPO, and DPO under KL control.',
    points: [
      'Raised discovery hit rate from 66.9% to 93.2% (conditional) and 98.9% (PPO, 79.7% quota fill).',
    ],
    tags: ['Diffusion', 'RL', 'PPO/GRPO/DPO', 'PyTorch'],
  },
  {
    title: 'HyprShare',
    meta: 'iOS app on the App Store · May 2025 - Nov. 2025',
    href: '#/products#hyprshare',
    summary: 'SwiftUI app for shared bills and group plans, with offline-first sync to Supabase/PostgreSQL.',
    points: [
      'Shipped for iPhone and iPad in 8 languages, with 67 SQL migrations and group-scoped row-level security.',
    ],
    tags: ['SwiftUI', 'Core Data', 'Supabase', 'iOS'],
  },
  {
    title: 'PolyDiT',
    meta: 'Research assistant, UW-Madison · Sept. 2024 - Aug. 2025',
    href: '#/research#polydit',
    summary: 'Masked Diffusion Transformers across five data representations.',
    points: [
      'Trained 10.9M-681.1M-parameter models with PyTorch DDP on 2 nodes × 4 H100 GPUs; best held-out R^2 0.943.',
    ],
    tags: ['Transformers', 'Diffusion', 'Distributed training'],
  },
];

const externalHref = (href: string) => href.startsWith('http');

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
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-5">Core Areas</h2>
        <div className="space-y-5">
          {coreAreas.map((area) => (
            <div key={area.title}>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                {area.title}
              </h3>
              <p className="mt-1 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Selected Work</h2>
          <div className="flex items-center gap-4">
            <a href="#/products" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
              Products <ArrowRight size={15} />
            </a>
            <a href="#/research" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
              Research <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <div className="divide-y divide-slate-200 dark:divide-slate-800">
          {selectedWork.map((item) => (
            <article key={item.title} className="py-7 first:pt-0">
              <p className="text-xs font-medium uppercase text-slate-500 dark:text-slate-500">
                {item.meta}
              </p>
              <a
                href={item.href}
                target={externalHref(item.href) ? '_blank' : undefined}
                rel={externalHref(item.href) ? 'noopener noreferrer' : undefined}
                className="group mt-2 inline-flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item.title}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-2 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.summary}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600 dark:bg-blue-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
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
