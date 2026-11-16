import React from 'react';
import { ArrowUpRight } from '../components/icons';
import { products } from '../data/products';
import type { Product } from '../types';

const ProjectNotes: React.FC<{ project: Product }> = ({ project }) => (
  <article id={project.id} className="scroll-mt-28 border-t border-slate-200 dark:border-slate-800 py-9 md:grid md:grid-cols-[1fr_2fr] gap-10">
    <div>
      <h2 className="text-2xl font-semibold tracking-tight">{project.name}</h2>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{project.role} · {project.year}</p>
      <a className="editorial-link text-sm mt-4" href={project.url}>{project.id === 'meshforth' ? 'View on the App Store' : 'Visit project'} <ArrowUpRight size={15} /></a>
      <p className="mt-5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{project.tags.join(' · ')}</p>
    </div>
    <div className="mt-6 md:mt-0">
      <h3 className="text-lg font-medium">{project.subtitle}</h3>
      <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">{project.description}</p>
      <ul className="mt-5 list-disc pl-5 space-y-3 text-slate-600 dark:text-slate-300 leading-relaxed">
        {project.highlights?.map(highlight => <li key={highlight}>{highlight}</li>)}
      </ul>
    </div>
  </article>
);

const Products: React.FC = () => (
  <div className="max-w-5xl mx-auto px-6 pt-14 md:pt-20 pb-16">
    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Projects</h1>
    <p className="mt-5 mb-10 max-w-2xl text-lg text-slate-600 dark:text-slate-300">Engineering notes on evidence publication, native discovery and account lifecycle design.</p>
    {products.filter(project => project.featured).map(project => <ProjectNotes key={project.id} project={project} />)}
    <section aria-labelledby="earlier-projects" className="mt-8">
      <h2 id="earlier-projects" className="section-heading mb-3">Earlier Work</h2>
      <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">Historical project records, preserved separately from current work.</p>
      {products.filter(project => !project.featured).map(project => <ProjectNotes key={project.id} project={project} />)}
    </section>
  </div>
);
export default Products;
