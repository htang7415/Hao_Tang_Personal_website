import { describe, expect, it, vi } from 'vitest';
import { getAllBlogPosts, getBlogPostBySlug } from '../utils/blogLoader';
import type { BlogPostFrontmatter } from '../types';

const modules = import.meta.glob<{ frontmatter: BlogPostFrontmatter; default: unknown }>(
  '../content/blog/*.mdx', { eager: true },
);
const frontmatter = Object.values(modules).map(module => module.frontmatter);

describe('blog loader through the real MDX pipeline', () => {
  it('loads every existing MDX post with usable metadata and a component', () => {
    expect(frontmatter.length).toBeGreaterThan(0);
    for (const module of Object.values(modules)) {
      expect(module.frontmatter.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      expect(module.frontmatter.title.trim().length).toBeGreaterThan(0);
      expect(Number.isNaN(Date.parse(module.frontmatter.date))).toBe(false);
      expect(Array.isArray(module.frontmatter.tags)).toBe(true);
      expect(typeof module.frontmatter.published).toBe('boolean');
      expect(typeof module.default).toBe('function');
    }
  });

  it('keeps unique slugs so lookup cannot select an ambiguous post', () => {
    expect(new Set(frontmatter.map(post => post.slug)).size).toBe(frontmatter.length);
  });

  it('lists posts newest first with valid hash routes', () => {
    const posts = getAllBlogPosts();
    expect(posts.map(post => post.date)).toEqual(
      [...posts].sort((a, b) => Date.parse(b.date) - Date.parse(a.date)).map(post => post.date),
    );
    for (const post of posts) {
      expect(post.url).toBe(`#/blogs/${post.slug}`);
      expect(getBlogPostBySlug(post.slug)?.frontmatter.title).toBe(post.title);
    }
  });

  it('production listing contains exactly the published posts', () => {
    vi.stubEnv('PROD', true);
    const draft = frontmatter[0];
    const wasPublished = draft.published;
    try {
      draft.published = false;
      expect(getAllBlogPosts().map(post => post.slug).sort()).toEqual(
        frontmatter.filter(post => post.published).map(post => post.slug).sort(),
      );
      expect(getAllBlogPosts().some(post => post.slug === draft.slug)).toBe(false);
      vi.stubEnv('PROD', false);
      expect(getAllBlogPosts().some(post => post.slug === draft.slug)).toBe(true);
    } finally {
      draft.published = wasPublished;
    }
  });

  it('resolves each existing slug to its original MDX module', () => {
    for (const module of Object.values(modules)) {
      expect(getBlogPostBySlug(module.frontmatter.slug)).toEqual({
        frontmatter: module.frontmatter, Component: module.default,
      });
    }
  });

  it('returns null for unknown and path-like slugs', () => {
    for (const slug of ['', '__missing_workflow_test__', '../content/blog', 'constructor']) {
      expect(getBlogPostBySlug(slug)).toBeNull();
    }
  });
});
