import { BlogPost, BlogPostFrontmatter } from '../types';

// Vite glob import for all MDX files
const blogModules = import.meta.glob<{
  frontmatter: BlogPostFrontmatter;
  default: React.ComponentType;
}>('../content/blog/*.mdx', { eager: true });

export function getAllBlogPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const [path, module] of Object.entries(blogModules)) {
    const frontmatter = (module as { frontmatter?: BlogPostFrontmatter }).frontmatter;

    // Skip malformed MDX files without frontmatter to avoid hard crashes
    if (!frontmatter) {
      continue;
    }

    // Skip unpublished posts in production
    if (import.meta.env.PROD && !frontmatter.published) {
      continue;
    }

    posts.push({
      id: frontmatter.slug,
      title: frontmatter.title,
      date: frontmatter.date,
      summary: frontmatter.summary,
      tags: frontmatter.tags,
      slug: frontmatter.slug,
      url: `#/blogs/${frontmatter.slug}`,
    });
  }

  // Sort by date descending
  return posts.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPostBySlug(slug: string) {
  for (const [path, module] of Object.entries(blogModules)) {
    const frontmatter = (module as { frontmatter?: BlogPostFrontmatter }).frontmatter;

    if (frontmatter?.slug === slug) {
      return {
        frontmatter,
        Component: module.default,
      };
    }
  }
  return null;
}
