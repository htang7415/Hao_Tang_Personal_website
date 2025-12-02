import React from 'react';
import { SectionTitle, Badge } from '../components/LayoutComponents';
import { blogPosts } from '../data';

const Blogs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <SectionTitle title="Blogs" subtitle="Thoughts on engineering, product development, and the tech industry." />

      <div className="divide-y divide-slate-200 dark:divide-slate-800">
        {blogPosts.map((post) => (
          <article key={post.id} className="py-10 first:pt-0 group">
            <div className="flex flex-col md:flex-row md:items-baseline gap-3 mb-3">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                <a href={post.url}>{post.title}</a>
              </h3>
              <time className="text-sm font-mono text-slate-500 flex-shrink-0">{post.date}</time>
            </div>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-3xl leading-relaxed">
              {post.summary}
            </p>
            
            <div className="flex gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;