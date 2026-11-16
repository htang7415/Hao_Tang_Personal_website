import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, GraduationCap, Linkedin, Mail } from '../components/icons';
import Contributions from '../components/Contributions';
import { profile } from '../data/profile';
import { products } from '../data/products';

const Home: React.FC = () => (
  <div className="pb-16">
    <section className="max-w-5xl mx-auto px-6 pt-28 md:pt-36 pb-12">
      <div className="flex flex-col-reverse md:flex-row md:items-center gap-8 md:gap-12">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-3">{profile.name}</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">{profile.tagline}</h1>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">Distributed Inference · Scheduling · Agent Runtime Infrastructure</p>
          <div className="mt-5 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {profile.about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"><Mail size={16} />Contact me</a>
            <a href={profile.social.github} className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400"><Github size={16} />GitHub</a>
            <a href={profile.social.linkedin} className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400"><Linkedin size={16} />LinkedIn</a>
            <a href={profile.social.googleScholar} className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400"><GraduationCap size={16} />Scholar</a>
          </div>
        </div>
        <img src={profile.avatar} alt="Hao Tang" width="160" height="160" className="w-28 h-28 md:w-40 md:h-40 object-cover rounded-xl border border-slate-200 dark:border-slate-800 shrink-0" />
      </div>
    </section>

    <section className="max-w-5xl mx-auto px-6 py-10 border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">Upstream engineering</h2>
        <Link to="/open-source" className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">Open Source <ArrowRight size={16} /></Link>
      </div>
      <Contributions compact />
    </section>

    <section className="max-w-5xl mx-auto px-6 py-10 border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">Independent projects</h2>
        <Link to="/products" className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">Projects <ArrowRight size={16} /></Link>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {products.map(product => (
          <Link key={product.id} to="/products" className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{product.subtitle}</p>
            <p className="mt-4 text-sm font-medium text-blue-700 dark:text-blue-300">{product.year} <ArrowRight size={14} className="inline ml-1" /></p>
          </Link>
        ))}
      </div>
    </section>

    <section className="max-w-5xl mx-auto px-6 py-10 border-t border-slate-200 dark:border-slate-800">
      <h2 className="text-2xl font-semibold tracking-tight">Research foundations</h2>
      <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">Diffusion Transformers, reinforcement learning alignment and uncertainty quantification, grounded in distributed training and careful evaluation.</p>
      <Link to="/research" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">Research & publications <ArrowRight size={16} /></Link>
    </section>

    <section className="max-w-5xl mx-auto px-6 pt-10 border-t border-slate-200 dark:border-slate-800">
      <h2 className="text-2xl font-semibold tracking-tight">Let’s build reliable AI systems.</h2>
      <p className="mt-3 text-slate-600 dark:text-slate-400">Open to engineering roles in inference infrastructure, scheduling, agent runtimes and AI applications.</p>
      <a href={`mailto:${profile.email}`} className="mt-4 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline break-all"><Mail size={18} className="shrink-0" />{profile.email}</a>
    </section>
  </div>
);

export default Home;
