// View counter utility using localStorage
// Note: This is client-side only and tracks views per browser

const VIEW_COUNTER_KEY = 'blog_post_views';
const VIEW_HISTORY_KEY = 'blog_post_view_history';

interface ViewData {
  [slug: string]: number;
}

interface ViewHistory {
  [slug: string]: number; // timestamp of last view
}

// Get all view counts
export const getViewCounts = (): ViewData => {
  if (typeof window === 'undefined') return {};

  try {
    const data = localStorage.getItem(VIEW_COUNTER_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
};

// Get view count for a specific post
export const getViewCount = (slug: string): number => {
  const views = getViewCounts();
  return views[slug] || 0;
};

// Increment view count for a post (with debouncing to prevent spam)
export const incrementViewCount = (slug: string): number => {
  if (typeof window === 'undefined') return 0;

  try {
    // Check if user has viewed this post recently (within last hour)
    const history: ViewHistory = JSON.parse(localStorage.getItem(VIEW_HISTORY_KEY) || '{}');
    const lastView = history[slug] || 0;
    const now = Date.now();
    const ONE_HOUR = 60 * 60 * 1000;

    // If viewed within the last hour, don't increment
    if (now - lastView < ONE_HOUR) {
      return getViewCount(slug);
    }

    // Increment view count
    const views = getViewCounts();
    views[slug] = (views[slug] || 0) + 1;
    localStorage.setItem(VIEW_COUNTER_KEY, JSON.stringify(views));

    // Update view history
    history[slug] = now;
    localStorage.setItem(VIEW_HISTORY_KEY, JSON.stringify(history));

    return views[slug];
  } catch {
    return 0;
  }
};

// Format view count for display
export const formatViewCount = (count: number): string => {
  if (count === 0) return '0 views';
  if (count === 1) return '1 view';
  if (count < 1000) return `${count} views`;
  if (count < 10000) return `${(count / 1000).toFixed(1)}k views`;
  return `${Math.floor(count / 1000)}k views`;
};
