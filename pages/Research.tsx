import React from 'react';
import { SectionTitle, Badge, Button } from '../components/LayoutComponents';
import { researchItems } from '../data';

const Research: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <SectionTitle 
        title="Research & Experiments" 
        subtitle="Exploring the practical applications of AI, specifically in NLP, LLMs, and retrieval systems. My goal is to bridge the gap between academic papers and production code."
      />

      <div className="space-y-10">
        {researchItems.map((item) => (
          <div key={item.id} className="group relative bg-white dark:bg-slate-900/40 p-8 md:p-10 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
            
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wide mt-2 md:mt-0 flex-shrink-0">
                {item.typeOrVenue}
              </span>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              {item.summary}
            </p>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
              </div>
              
              <div className="flex gap-5 text-base">
                {item.links?.pdf && (
                  <a href={item.links.pdf} className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 underline decoration-slate-300 dark:decoration-slate-700 underline-offset-4">PDF / Read</a>
                )}
                {item.links?.code && (
                  <a href={item.links.code} className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 underline decoration-slate-300 dark:decoration-slate-700 underline-offset-4">Code</a>
                )}
                {item.links?.demo && (
                  <a href={item.links.demo} className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 underline decoration-slate-300 dark:decoration-slate-700 underline-offset-4">Live Demo</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;