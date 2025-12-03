import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import Fuse from 'fuse.js';
import { SectionTitle } from '../components/LayoutComponents';
import { getAllBlogPosts } from '../utils/blogLoader';

const Blogs: React.FC = () => {
  const blogPosts = getAllBlogPosts();
  const [searchQuery, setSearchQuery] = useState('');

  // Configure Fuse.js for fuzzy search
  const fuse = useMemo(() => {
    return new Fuse(blogPosts, {
      keys: ['title', 'summary', 'tags'],
      threshold: 0.3, // Lower = stricter matching
      includeScore: true,
    });
  }, [blogPosts]);

  // Filter posts based on search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return blogPosts;
    }
    const results = fuse.search(searchQuery);
    return results.map(result => result.item);
  }, [searchQuery, fuse, blogPosts]);

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <SectionTitle
        title="Blogs"
        subtitle="Thoughts on engineering, product development, and the tech industry."
      />

      {/* Search Bar */}
      <div className="mb-12 relative">
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
            size={20}
          />
          <input
            type="text"
            placeholder="Search posts by title, content, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
              aria-label="Clear search"
            >
              <X size={20} />
            </button>
          )}
        </div>
        {searchQuery && (
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            Found {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
          </p>
        )}
      </div>

      {/* Blog Posts */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">
            No posts found matching "{searchQuery}"
          </p>
          <button
            onClick={() => setSearchQuery('')}
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            Clear search
          </button>
        </div>
      ) : (
        <div className="space-y-16">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blogs/${post.slug}`}
              className="block"
            >
              <article className="group cursor-pointer">
                <div className="mb-3">
                  <time className="text-sm font-mono text-slate-500 dark:text-slate-500 mb-2 block">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </time>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors leading-tight">
                    {post.title}
                  </h3>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-light">
                  {post.summary}
                </p>

                <div className="flex items-center gap-3">
                  <span className="text-blue-600 dark:text-blue-500 font-medium text-sm group-hover:underline decoration-2 underline-offset-4">
                    Read Article
                  </span>
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
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;