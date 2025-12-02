import React from 'react';
import { SectionTitle } from '../components/LayoutComponents';
import { blogPosts } from '../data/blogs';

const Blogs: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <SectionTitle title="Blogs" subtitle="Thoughts on engineering, product development, and the tech industry." />

      <div className="space-y-16">
        {blogPosts.map((post) => (
          <article key={post.id} className="group cursor-pointer">
            <div className="mb-3">
              <time className="text-sm font-mono text-slate-500 dark:text-slate-500 mb-2 block">{post.date}</time>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors leading-tight">
                <a href={post.url}>{post.title}</a>
              </h3>
            </div>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-light">
              {post.summary}
            </p>
            
            <div className="flex items-center gap-3">
               <span className="text-blue-600 dark:text-blue-500 font-medium text-sm group-hover:underline decoration-2 underline-offset-4">Read Article</span>
               <div className="h-px w-8 bg-slate-200 dark:bg-slate-800"></div>
               <div className="flex gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium text-slate-500 dark:text-slate-500">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;