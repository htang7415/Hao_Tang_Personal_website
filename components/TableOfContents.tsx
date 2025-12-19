import React, { useState, useEffect } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export const TableOfContents: React.FC = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  // Extract headings after MDX renders
  useEffect(() => {
    const article = document.querySelector('article');
    if (!article) return;

    const headingElements = article.querySelectorAll('h2[id], h3[id]');
    const headingData: Heading[] = Array.from(headingElements).map(el => ({
      id: el.id,
      text: el.textContent || '',
      level: parseInt(el.tagName[1])
    }));

    setHeadings(headingData);
  }, []);

  // Track active heading with Intersection Observer
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 1.0
      }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <aside className="hidden xl:block fixed right-8 top-32 w-64">
      <nav className="space-y-1">
        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 text-sm">
          On This Page
        </h4>
        <ul className="space-y-2 text-sm">
          {headings.map(h => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={`
                  block py-1 transition-colors
                  ${h.level === 3 ? 'pl-4' : 'pl-0'}
                  ${activeId === h.id
                    ? 'text-blue-600 dark:text-blue-400 font-medium border-l-2 border-blue-600 -ml-px pl-3'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }
                `}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
