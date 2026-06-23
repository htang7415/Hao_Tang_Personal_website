import React from 'react';
import { ArrowRight, Github, GraduationCap, Linkedin, Mail } from '../components/icons';
import { profile } from '../data/profile';

const interests = [
  {
    title: 'Agent behavior that can be audited',
    description: 'Traces, stage-level metrics, scorer reconciliation, and release checks for understanding how agent failures happen.',
  },
  {
    title: 'Retrieval systems as memory',
    description: 'FAISS, LanceDB, pgvector, and Qdrant comparisons under quality, freshness, latency, cost, and stability constraints.',
  },
  {
    title: 'Scientific ML with reliability in mind',
    description: 'Discrete diffusion, reinforcement learning for inverse design, uncertainty quantification, calibration, and OOD testing.',
  },
  {
    title: 'Products that stay useful in real settings',
    description: 'Offline-first apps, exact accounting logic, sync conflict handling, localization, notifications, and end-to-end validation.',
  },
];

const selectedWork = [
  {
    title: 'MEMTRACE',
    meta: 'Agent memory evaluation · Jan. 2026 - May 2026',
    href: '#/research#memtrace',
    summary: 'Trace-level benchmark for persistent-memory risk in tool-using agents, with 324 main traces and 72 oracle calibration traces across 12 synthetic enterprise tasks.',
    points: [
      'Separates retrieval exposure, memory admission, planner proposal, policy diagnostics, and tool execution.',
      'Uses deterministic tool stubs, causal-chain scoring, Wilson intervals, and no-inference metric regeneration.',
    ],
    tags: ['LLM agents', 'Memory', 'Evaluation', 'Python'],
  },
  {
    title: 'RL-Aligned Conditional Diffusion Transformer',
    meta: 'Research assistant, UW-Madison · Sept. 2025 - Mar. 2026',
    href: '#/research#rl-inverse-design',
    summary: 'Target-conditioned discrete diffusion workflow for constrained inverse design with classifier-free guidance, oracle-guided sampling, PPO, GRPO, and DPO alignment.',
    points: [
      'Uses 7-dimensional condition bundles and reward-shaped evaluation over validity, novelty, class match, feasibility, and target bounds.',
      'Improved mean discovery hit rates from 93.2% with supervised conditional diffusion to 96.7%-98.9% with aligned variants.',
    ],
    tags: ['Diffusion', 'RL', 'PPO/GRPO/DPO', 'PyTorch'],
  },
  {
    title: 'MaxionBench',
    meta: 'Retrieval decision benchmark · Sept. 2025 - Feb. 2026',
    href: '#/research#maxionbench',
    summary: 'Conformance-gated benchmark for retrieval infrastructure used as operational memory, with shared adapters for FAISS, LanceDB, pgvector, and Qdrant.',
    points: [
      'Validated 72 archived run directories with 0 strict-schema errors.',
      'Reports objective-sensitive decisions across quality, p99 latency, throughput, retrievability, context cost, and budget stability.',
    ],
    tags: ['Retrieval', 'Vector search', 'Schemas', 'Docker'],
  },
  {
    title: 'HyprShare',
    meta: 'Offline-first iOS app · May 2025 - Nov. 2025',
    href: 'https://hyprshare.vercel.app/',
    summary: 'Native SwiftUI app for shared expense tracking with invite-code and QR joining, equal-split entry, settlement suggestions, planning notes, notification history, and optional Supabase sync.',
    points: [
      'Designed a 10-entity Core Data ledger with sync metadata, soft deletes, dirty flags, and remote identifiers.',
      'Built Supabase/PostgreSQL workflows with row-level security, RPC functions, triggers, Edge Functions, APNs, localization, and tests.',
    ],
    tags: ['SwiftUI', 'Core Data', 'Supabase', 'iOS'],
  },
  {
    title: 'PolyDiT',
    meta: 'Multi-representation diffusion modeling · Sept. 2024 - Aug. 2025',
    href: '#/research#polydit',
    summary: 'Masked discrete Diffusion Transformer work across character, BPE, validity-preserving, fragment/group, and graph state spaces.',
    points: [
      'Scaled Transformer backbones from 10.9M to 681.1M parameters with DDP-compatible training, BF16, gradient accumulation, and memory-aware batching.',
      'Benchmarked 200,000 generated samples and reused denoisers for downstream representation learning.',
    ],
    tags: ['Transformers', 'Discrete diffusion', 'Representation learning', 'Distributed training'],
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
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-5">Interests</h2>
        <div className="space-y-5">
          {interests.map((interest) => (
            <div key={interest.title}>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                {interest.title}
              </h3>
              <p className="mt-1 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Selected Work</h2>
          <a href="#/research" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
            Research <ArrowRight size={15} />
          </a>
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
          I am open to conversations about research, engineering roles, product ideas, and collaborations around AI systems, retrieval, and reliable ML.
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
