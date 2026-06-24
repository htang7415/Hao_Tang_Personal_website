import React from 'react';
import { ArrowRight, Github, GraduationCap, Linkedin, Mail } from '../components/icons';
import { profile } from '../data/profile';

const coreAreas = [
  {
    title: 'AI Agent Evaluation',
    description: 'Trace-level evaluation for tool-using agents: memory admission, planner behavior, policy diagnostics, execution, and audit-ready metrics.',
  },
  {
    title: 'Retrieval & Data Infrastructure',
    description: 'Vector search and RAG infrastructure across FAISS, LanceDB, pgvector, and Qdrant with schema gates, latency budgets, and decision reports.',
  },
  {
    title: 'ML Systems',
    description: 'PyTorch diffusion and Transformer systems with DDP/BF16 training, batch inference, model selection, calibration, and OOD evaluation.',
  },
  {
    title: 'Product Engineering',
    description: 'SwiftUI/Core Data product apps with Supabase/PostgreSQL collaboration, exact domain logic, release validation, and tests.',
  },
];

const selectedWork = [
  {
    title: 'MEMTRACE',
    meta: 'Agent memory evaluation · Jan. 2026 - May 2026',
    href: '#/research#memtrace',
    summary: 'Evaluation harness for persistent-memory risk in tool-using agents, with 396 trace records across 12 synthetic enterprise tasks.',
    points: [
      'Separates retrieval exposure, memory admission, planner proposal, policy diagnostics, and tool execution.',
      'Uses Pydantic trace schemas, deterministic tools, causal-chain scoring, Wilson intervals, and no-inference metric regeneration.',
    ],
    tags: ['LLM agents', 'Memory', 'Evaluation', 'Python'],
  },
  {
    title: 'RL-Aligned Conditional Diffusion Transformer',
    meta: 'Research assistant, UW-Madison · Sept. 2025 - Mar. 2026',
    href: '#/research#rl-inverse-design',
    summary: 'Target-conditioned discrete diffusion system for constrained generation with classifier-free guidance, oracle-guided sampling, PPO, GRPO, and DPO.',
    points: [
      'Built a 10.9M-parameter masked Diffusion Transformer with 1,250 target configurations, 7-dimensional conditions, and GPU batch inference.',
      'Raised discovery hit rate from a 93.2% supervised baseline to 98.9% after RL-style alignment.',
    ],
    tags: ['Diffusion', 'RL', 'PPO/GRPO/DPO', 'PyTorch'],
  },
  {
    title: 'MaxionBench',
    meta: 'Retrieval decision benchmark · Sept. 2025 - Feb. 2026',
    href: '#/research#maxionbench',
    summary: 'Conformance-gated benchmark for choosing retrieval infrastructure used as operational memory.',
    points: [
      'Built shared adapters for FAISS, LanceDB, pgvector, and Qdrant with schema and lifecycle checks.',
      'Validated 72 run directories with 0 schema errors and selected FAISS CPU/bge-small for 0.852 evidence coverage at 22.8 ms max p99 latency.',
    ],
    tags: ['Retrieval', 'Vector search', 'Schemas', 'Docker'],
  },
  {
    title: 'HyprShare',
    meta: 'Group expense iOS app · May 2025 - Nov. 2025',
    href: 'https://hyprshare.vercel.app/',
    summary: 'Native SwiftUI expense and planning app with exact split/settlement logic, invite/QR joins, notifications, localization, and Supabase/PostgreSQL sync.',
    points: [
      'Designed a 10-entity Core Data ledger with Decimal arithmetic, residual-cent rounding, sync metadata, and soft deletes.',
      'Built a 2,548-line sync engine with Supabase/PostgreSQL, row-level security, Edge Functions, APNs, and XCTest/UI coverage.',
    ],
    tags: ['SwiftUI', 'Core Data', 'Supabase', 'iOS'],
  },
  {
    title: 'PolyDiT',
    meta: 'Multi-representation diffusion modeling · Sept. 2024 - Aug. 2025',
    href: '#/research#polydit',
    summary: 'Masked discrete Diffusion Transformer stack across character, BPE, constrained-token, fragment, and graph representations.',
    points: [
      'Trained over 19.3M train and 1.0M validation objects with reproducible tokenization, BF16 DDP, and 8-GPU/2-node launch support.',
      'Scaled denoisers from 10.9M to 681.1M parameters and reached 1.0 validity, 0.943 held-out R-squared, and 0.903 diversity.',
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
          I am open to AI Engineer, Machine Learning Engineer, Software Development Engineer, and research-engineering conversations around reliable AI systems, retrieval, and ML infrastructure.
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
