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
      <article className="max-w-4xl mx-auto px-6 py-20">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 mb-10 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to all posts</span>
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 leading-tight tracking-tight">
            {frontmatter.title}
          </h1>
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
  );
};

export default BlogPost;
