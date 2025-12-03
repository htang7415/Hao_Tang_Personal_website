import React from 'react';

// Custom components for MDX content styling
export const MDXComponents = {
  // Headings with consistent styling
  h1: (props: any) => (
    <h1
      className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-12 mt-20 tracking-tight"
      style={{ lineHeight: '1.2' }}
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-10 mt-20 tracking-tight"
      style={{ lineHeight: '1.3' }}
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-100 mb-8 mt-16"
      style={{ lineHeight: '1.4' }}
      {...props}
    />
  ),
  h4: (props: any) => (
    <h4
      className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-6 mt-12"
      style={{ lineHeight: '1.4' }}
      {...props}
    />
  ),

  // Paragraphs
  p: (props: any) => (
    <p
      className="text-xl text-slate-600 dark:text-slate-400 mb-16 leading-relaxed font-light"
      style={{ lineHeight: '1.8' }}
      {...props}
    />
  ),

  // Lists
  ul: (props: any) => (
    <ul
      className="list-disc list-outside ml-6 mb-10 space-y-4 text-xl text-slate-600 dark:text-slate-400"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="list-decimal list-outside ml-6 mb-10 space-y-4 text-xl text-slate-600 dark:text-slate-400"
      {...props}
    />
  ),
  li: (props: any) => (
    <li
      className="font-light pl-2"
      style={{ lineHeight: '1.8' }}
      {...props}
    />
  ),

  // Code blocks
  pre: (props: any) => (
    <pre
      className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-8 rounded-lg overflow-x-auto my-12 border border-slate-700 dark:border-slate-800 shadow-lg"
      {...props}
    />
  ),
  code: (props: any) => {
    // Inline code vs code block
    const isInline = !props.className;
    if (isInline) {
      return (
        <code
          className="bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 px-2 py-1 rounded text-base font-mono"
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
};
