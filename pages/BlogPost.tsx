import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { ArrowLeft } from 'lucide-react';
import { MDXComponents } from '../components/MDXComponents';
import { getBlogPostBySlug } from '../utils/blogLoader';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-red-600 dark:text-red-400">Blog post not found.</p>
      </div>
    );
  }

  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          404 - Blog Post Not Found
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          The blog post you're looking for doesn't exist.
        </p>
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft size={20} />
          Back to Blogs
        </Link>
      </div>
    );
  }

  const { frontmatter, Component } = post;

  return (
    <MDXProvider components={MDXComponents}>
      <article className="max-w-2xl mx-auto px-6 py-24">
        {/* Back button */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 mb-12 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">All Posts</span>
        </Link>

        {/* Article header */}
        <header className="mb-16 pb-12 border-b border-slate-200 dark:border-slate-800">
          <time className="text-sm font-mono text-slate-500 dark:text-slate-500 mb-4 block">
            {new Date(frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6 leading-tight tracking-tight">
            {frontmatter.title}
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-8">
            {frontmatter.summary}
          </p>

          <div className="flex flex-wrap gap-2">
            {frontmatter.tags.map(tag => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* MDX Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:scroll-mt-24">
          <Component />
        </div>

        {/* Footer navigation */}
        <footer className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            <ArrowLeft size={20} />
            Back to All Posts
          </Link>
        </footer>
      </article>
    </MDXProvider>
  );
};

export default BlogPost;
