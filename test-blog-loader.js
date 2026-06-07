import { getBlogPostBySlug } from './utils/blogLoader.ts';

const post = getBlogPostBySlug('resilient-apis');
console.log('Post found:', post !== null);
if (post) {
  console.log('Frontmatter:', post.frontmatter);
  console.log('Component type:', typeof post.Component);
}
