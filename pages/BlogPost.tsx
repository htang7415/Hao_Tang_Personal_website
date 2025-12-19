import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { ArrowLeft, Eye } from 'lucide-react';
import { MDXComponents } from '../components/MDXComponents';
import { getBlogPostBySlug } from '../utils/blogLoader';
import { ReadingProgress } from '../components/ReadingProgress';
import { TableOfContents } from '../components/TableOfContents';
import { incrementViewCount, formatViewCount } from '../utils/viewCounter';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [viewCount, setViewCount] = useState<number>(0);

  // Increment view count on mount
  useEffect(() => {
    if (slug) {
      const count = incrementViewCount(slug);
      setViewCount(count);
    }
  }, [slug]);

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
    <>
      <ReadingProgress />
      <div className="relative">
        <MDXProvider components={MDXComponents}>
          <article className="max-w-3xl mx-auto px-6 py-20">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 mb-10 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to all posts</span>
        </Link>

        <header className="mb-12 pb-8 border-b border-slate-200 dark:border-slate-800">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 leading-tight tracking-tight mb-4">
            {frontmatter.title}
          </h1>

          {/* Metadata row */}
          <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 font-mono">
            <time dateTime={frontmatter.date}>
              {new Date(frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            {frontmatter.readingTime && (
              <>
                <span>·</span>
                <span>{frontmatter.readingTime} min read</span>
              </>
            )}
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <Eye size={14} />
              {formatViewCount(viewCount)}
            </span>
          </div>

          {/* Tags */}
          {frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {frontmatter.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="text-slate-800 dark:text-slate-100">
          <Component />
        </div>

        <footer className="mt-16">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            <ArrowLeft size={20} />
            Back to all posts
          </Link>
        </footer>
          </article>
        </MDXProvider>

        {/* Table of Contents - Desktop only */}
        <TableOfContents />
      </div>
    </>
  );
};

export default BlogPost;
