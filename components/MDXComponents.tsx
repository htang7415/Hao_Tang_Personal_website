import React from 'react';
import { CodeBlock } from './CodeBlock';
import { Callout } from './Callout';
import { Figure } from './Figure';

// Custom components for MDX content styling
export const MDXComponents = {
  // Headings with consistent styling
  h1: (props: any) => (
    <h1
      className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-10 mt-16 tracking-tight leading-tight"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-100 mb-6 mt-16 leading-snug"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-5 mt-10 leading-snug"
      {...props}
    />
  ),
  h4: (props: any) => (
    <h4
      className="text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 mt-8 leading-snug"
      {...props}
    />
  ),

  // Paragraphs
  p: (props: any) => (
    <p
      className="text-[17px] md:text-[18px] text-slate-800 dark:text-slate-200 mb-6 leading-[1.75] font-normal"
      {...props}
    />
  ),

  // Lists
  ul: (props: any) => (
    <ul
      className="list-disc list-outside pl-6 mb-10 space-y-4 text-[17px] md:text-[18px] text-slate-800 dark:text-slate-200"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="list-decimal list-outside pl-6 mb-10 space-y-4 text-[17px] md:text-[18px] text-slate-800 dark:text-slate-200"
      {...props}
    />
  ),
  li: (props: any) => (
    <li
      className="pl-1 leading-[1.7]"
      {...props}
    />
  ),

  // Code blocks
  pre: (props: any) => <CodeBlock {...props} />,
  code: (props: any) => {
    // Inline code vs code block
    const isInline = !props.className;
    if (isInline) {
      return (
        <code
          className="bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 px-2 py-1 rounded text-base font-mono font-medium"
          {...props}
        />
      );
    }
    return <code className="text-sm font-mono" {...props} />;
  },

  // Links
  a: (props: any) => (
    <a
      className="text-blue-600 dark:text-blue-400 hover:underline decoration-2 underline-offset-4 font-medium transition-colors hover:text-blue-700 dark:hover:text-blue-300"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    />
  ),

  // Blockquotes
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-blue-500 dark:border-blue-600 pl-8 pr-6 py-6 my-12 italic text-xl text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 rounded-r-lg"
      style={{ lineHeight: '1.8' }}
      {...props}
    />
  ),

  // Horizontal rule
  hr: (props: any) => (
    <hr
      className="border-t border-slate-200 dark:border-slate-800 my-20"
      {...props}
    />
  ),

  // Images
  img: (props: any) => (
    <img
      className="rounded-lg shadow-lg my-12 max-w-full h-auto"
      loading="lazy"
      {...props}
    />
  ),

  // Strong/Bold text
  strong: (props: any) => (
    <strong
      className="font-bold text-slate-900 dark:text-slate-100"
      {...props}
    />
  ),

  // Emphasis/Italic text
  em: (props: any) => (
    <em
      className="italic text-slate-700 dark:text-slate-300"
      {...props}
    />
  ),

  // Tables (GFM support)
  table: (props: any) => (
    <div className="overflow-x-auto mb-8">
      <table
        className="min-w-full border border-slate-200 dark:border-slate-800 rounded-lg"
        {...props}
      />
    </div>
  ),
  thead: (props: any) => (
    <thead
      className="bg-slate-50 dark:bg-slate-900"
      {...props}
    />
  ),
  th: (props: any) => (
    <th
      className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800"
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="px-6 py-4 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800"
      {...props}
    />
  ),
  tbody: (props: any) => (
    <tbody {...props} />
  ),

  // Custom MDX components
  Callout,
  Figure,
};
