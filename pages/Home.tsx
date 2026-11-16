import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from '../components/icons';
import { profile } from '../data/profile';

const Home: React.FC = () => (
  <div className="max-w-5xl mx-auto px-6 pb-16 md:pb-24">
    <section aria-labelledby="intro-title" className="pt-16 md:pt-24 pb-12 md:pb-16">
      <div className="flex items-center justify-between gap-5">
        <div>
          <p className="text-blue-700 dark:text-blue-400 text-sm font-medium mb-3">AI Systems &amp; Software Engineering</p>
          <h1 id="intro-title" className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-none">{profile.name}</h1>
        </div>
        <img src={profile.avatar} alt="Portrait of Hao Tang" width="104" height="104" className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover flex-none" />
      </div>
      <div className="max-w-2xl mt-7 space-y-3 text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        {profile.about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
        <a className="editorial-link" href={`mailto:${profile.email}`}>Email <ArrowUpRight size={14} /></a>
        <a className="editorial-link" href={profile.social.github}>GitHub <ArrowUpRight size={14} /></a>
        <a className="editorial-link" href={profile.social.linkedin}>LinkedIn <ArrowUpRight size={14} /></a>
        <a className="editorial-link" href={profile.social.googleScholar}>Google Scholar <ArrowUpRight size={14} /></a>
      </div>
    </section>

    <section id="open-source" aria-labelledby="open-source-title" className="editorial-section">
      <h2 id="open-source-title" className="section-heading">Open Source</h2>
      <article className="md:grid md:grid-cols-[1fr_2fr] gap-10 mt-7">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">llm-d</h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Upstream inference routing</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Go · Scheduling plugins</p>
        </div>
        <div className="mt-5 md:mt-0">
          <h4 className="text-lg font-medium">Budget-controlled endpoint exploration</h4>
          <p className="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed">
            Added an opt-in exploration budget to the weighted endpoint picker. When positive and zero scores coexist, previously excluded zero-score candidates can now lead a returned list with a configured probability, independent of group or list size. Default routing is unchanged.
          </p>
          <a className="editorial-link mt-4" href="https://github.com/llm-d/llm-d-router/pull/3972">Merged contribution #3972 <ArrowUpRight size={15} /></a>
          <p className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Also submitted: multi-role Prefill/Decode overflow guards to check capacity across both roles during revision selection.{' '}
            <a className="text-blue-700 dark:text-blue-400 underline underline-offset-4" href="https://github.com/llm-d/llm-d-router/pull/3965">PR #3965 remains open</a> as of November 16, 2026.
          </p>
        </div>
      </article>
    </section>

    <section aria-labelledby="projects-title" className="editorial-section">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <h2 id="projects-title" className="section-heading">Selected Projects</h2>
        <Link className="editorial-link text-sm" to="/products">Project notes <ArrowRight size={15} /></Link>
      </div>
      <div className="mt-7 divide-y divide-slate-200 dark:divide-slate-800">
        <article className="md:grid md:grid-cols-[1fr_2fr] gap-10 pb-8">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight"><Link className="hover:text-blue-700 dark:hover:text-blue-400" to="/products#meshstake">MeshStake</Link></h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">AI Infrastructure Industry Intelligence</p>
            <a className="editorial-link text-sm mt-4" href="https://meshstake.com/">meshstake.com <ArrowUpRight size={14} /></a>
          </div>
          <div className="mt-5 md:mt-0 text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>An evidence publication system for industry research, built with Python, React and AWS.</p>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>Rights gating and filing lineage control what can be published and when citations expire.</li>
              <li>Independent filing lineages compose into one view; expiry or failure removes only the affected lineage, verified offline.</li>
            </ul>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Implemented architecture; Production Intelligence remains default-off.</p>
          </div>
        </article>
        <article className="md:grid md:grid-cols-[1fr_2fr] gap-10 pt-8">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight"><Link className="hover:text-blue-700 dark:hover:text-blue-400" to="/products#meshforth">MeshForth</Link></h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Native iOS activity &amp; place discovery</p>
            <a className="editorial-link text-sm mt-4" href="https://apps.apple.com/us/app/meshforth/id6823819592">App Store · Version 1.1 <ArrowUpRight size={14} /></a>
          </div>
          <div className="mt-5 md:mt-0 text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>A SwiftUI and MapKit app for browsing activities, finding places and keeping private Saved discoveries.</p>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>Unified saved activities and places with per-user access controls.</li>
              <li>Implemented retryable account deletion across database, storage and authentication.</li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <section aria-labelledby="research-title" className="editorial-section">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <h2 id="research-title" className="section-heading">Research</h2>
        <Link className="editorial-link text-sm" to="/research">Research notes <ArrowRight size={15} /></Link>
      </div>
      <p className="mt-5 max-w-2xl text-slate-600 dark:text-slate-300">My machine learning research spans generative modeling, reinforcement learning alignment and uncertainty in polymer property prediction.</p>
      <div className="mt-7 space-y-6">
        {[
          { id: 'polydit', title: 'PolyDiT', meta: 'Diffusion Transformers', text: 'Compared five sequence and graph representations for masked diffusion; no single representation led both generation validity and property prediction.' },
          { id: 'rl-inverse-design', title: 'RL alignment for inverse design', meta: 'PPO · GRPO · DPO', text: 'Aligned conditional diffusion to multi-constraint rewards, evaluating discovery hit rate alongside quota completion.' },
          { id: 'uq-benchmark', title: 'Uncertainty quantification', meta: 'JCIM · 2025', text: 'Developed a benchmark methodology and evaluation framework for nine uncertainty methods across prediction and calibration tasks.' },
        ].map(item => (
          <article key={item.id} className="md:grid md:grid-cols-[1fr_2fr] gap-10">
            <div>
              <h3 className="font-medium"><Link className="editorial-link" to={`/research#${item.id}`}>{item.title} <ArrowRight size={14} /></Link></h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.meta}</p>
            </div>
            <p className="mt-2 md:mt-0 text-slate-600 dark:text-slate-300 leading-relaxed">{item.text}</p>
          </article>
        ))}
      </div>
    </section>

    <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col sm:flex-row sm:justify-between gap-5 text-sm">
      <p className="text-slate-600 dark:text-slate-400">For engineering opportunities or research conversations.</p>
      <a className="editorial-link" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={14} /></a>
    </div>
  </div>
);

export default Home;
