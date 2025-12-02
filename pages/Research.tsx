import React from 'react';
import { SectionTitle, Badge } from '../components/LayoutComponents';
import { researchItems } from '../data/research';
import { ArrowUpRight } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <SectionTitle 
        title="Research & Experiments" 
        subtitle="Exploring the practical applications of AI, specifically in NLP, LLMs, and retrieval systems. My goal is to bridge the gap between academic papers and production code."
      />

      <div className="space-y-16">
        {researchItems.map((item) => (
          <div key={item.id} className="group relative">
            
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors cursor-pointer">
                {item.title}
              </h3>
              <span className="text-sm font-mono text-slate-500 uppercase tracking-wide mt-2 md:mt-0 flex-shrink-0">
                {item.typeOrVenue}
              </span>
            </div>

            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-light">
              {item.summary}
            </p>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-slate-200 dark:border-slate-800 pb-12">
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
              </div>
              
              <div className="flex gap-6 text-base font-medium">
                {item.links?.pdf && (
                  <a href={item.links.pdf} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors">
                    PDF / Read <ArrowUpRight size={16} />
                  </a>
                )}
                {item.links?.code && (
                  <a href={item.links.code} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors">
                    Code <ArrowUpRight size={16} />
                  </a>
                )}
                {item.links?.demo && (
                  <a href={item.links.demo} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors">
                    Live Demo <ArrowUpRight size={16} />
                  </a>
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