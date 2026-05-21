declare module '*.mdx' {
  import { ComponentType } from 'react';

  export const frontmatter: {
    title: string;
    date: string;
    summary: string;
    tags: string[];
    slug: string;
    published: boolean;
  };

  const MDXComponent: ComponentType;
  export default MDXComponent;
}

declare module 'react' {
  interface HTMLAttributes<T> {
    // Allow MDX to use className on any HTML element
    className?: string;
  }
}
