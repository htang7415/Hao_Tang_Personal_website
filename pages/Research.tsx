import React from 'react';
import { Badge } from '../components/LayoutComponents';
import { researchItems } from '../data/research';
import { ArrowUpRight } from '../components/icons';

const Research: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-14 md:pt-20 pb-16">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Research</h1>
      <p className="mt-5 mb-12 max-w-2xl text-lg text-slate-600 dark:text-slate-300">Academic work in generative modeling, reinforcement learning alignment and uncertainty quantification, followed by an independent serving research project.</p>

      <div className="space-y-12">
        {[...researchItems.filter(item => item.id !== 'memtrace'), ...researchItems.filter(item => item.id === 'memtrace')].map((item) => {
          const Title = item.id === 'memtrace' ? 'h3' : 'h2';
          const Findings = item.id === 'memtrace' ? 'h4' : 'h3';
          return (
          <article key={item.id} id={item.id} className="group relative scroll-mt-28">
            {item.id === 'memtrace' && <h2 className="section-heading mb-7">Earlier Independent Research</h2>}
            
            <div className="mb-4">
              <Title className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">
                {item.title}
              </Title>
              <span className="text-sm text-slate-500 dark:text-slate-400 mt-2 block">
                {item.typeOrVenue}
              </span>
            </div>

            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-7 leading-relaxed">
              {item.summary}
            </p>

            {item.highlights && (
              <div className="mb-7">
                <Findings className="text-base font-medium text-slate-800 dark:text-slate-200 mb-3">
                  Findings & Methods
                </Findings>
                <ul className="list-disc list-outside pl-6 space-y-2 text-base text-slate-600 dark:text-slate-300">
                  {item.highlights
                    .split('\n')
                    .filter(line => line.trim().startsWith('-'))
                    .map((line, idx) => (
                      <li key={idx} className="pl-1 leading-relaxed">
                        {line.trim().substring(1).trim()}
                      </li>
                    ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-slate-200 dark:border-slate-800 pb-10">
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
          </article>
          );
        })}
      </div>
    </div>
  );
};

export default Research;
