import React from 'react';

// Custom components for MDX content styling
export const MDXComponents = {
  // Headings with consistent styling
  h1: (props: any) => (
    <h1
      className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-10 mt-16 tracking-tight"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8 mt-16 tracking-tight border-b-2 border-slate-200 dark:border-slate-700 pb-4"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-100 mb-6 mt-12"
      {...props}
    />
  ),
  h4: (props: any) => (
    <h4
      className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4 mt-8"
      {...props}
    />
  ),

  // Paragraphs
  p: (props: any) => (
    <p
      className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-loose font-normal tracking-wide"
      {...props}
    />
  ),

  // Lists
  ul: (props: any) => (
    <ul
      className="list-disc list-outside ml-6 mb-8 space-y-3 text-lg text-slate-700 dark:text-slate-300"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="list-decimal list-outside ml-6 mb-8 space-y-3 text-lg text-slate-700 dark:text-slate-300"
      {...props}
    />
  ),
  li: (props: any) => (
    <li
      className="leading-loose font-normal pl-2"
      {...props}
    />
  ),

  // Code blocks
  pre: (props: any) => (
    <pre
      className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-6 rounded-lg overflow-x-auto my-8 border border-slate-700 dark:border-slate-800 shadow-lg"
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
      className="border-l-4 border-blue-500 dark:border-blue-600 pl-8 pr-6 py-4 my-8 italic text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 rounded-r-lg"
      {...props}
    />
  ),

  // Horizontal rule
  hr: (props: any) => (
    <hr
      className="border-t-2 border-slate-200 dark:border-slate-800 my-16"
      {...props}
    />
  ),

  // Images
  img: (props: any) => (
    <img
      className="rounded-lg shadow-lg mb-8 max-w-full h-auto"
      loading="lazy"
      {...props}
    />
  ),

  // Strong/Bold text
  strong: (props: any) => (
    <strong
      className="font-semibold text-slate-900 dark:text-slate-100"
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
