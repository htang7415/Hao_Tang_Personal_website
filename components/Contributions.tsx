import React from 'react';
import { ArrowUpRight } from './icons';
import { contributions } from '../data/contributions';

const Contributions: React.FC<{ compact?: boolean; as?: 'h2' | 'h3' }> = ({ compact = false, as: Heading = 'h3' }) => (
  <div className="divide-y divide-slate-200 dark:divide-slate-800">
    {(compact ? contributions.slice(0, 1) : contributions).map(item => (
      <article key={item.id} className="py-6 first:pt-0 last:pb-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3">
          <span className="text-sm font-medium text-blue-700 dark:text-blue-300">{item.status}</span>
          <span className="text-sm text-slate-500 dark:text-slate-400">llm-d / llm-d-router · #{item.id}</span>
        </div>
        <Heading className="text-xl font-semibold text-slate-900 dark:text-slate-100">
          <a href={item.url} className="hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-start gap-2">
            {item.title}<ArrowUpRight size={18} className="shrink-0 mt-1" />
          </a>
        </Heading>
        <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">{item.summary}</p>
        {!compact && <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.detail}</p>}
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{item.technology}</p>
      </article>
    ))}
  </div>
);

export default Contributions;
