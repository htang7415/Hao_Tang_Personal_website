import React from 'react';
import { Card, SectionTitle, Badge } from '../components/LayoutComponents';
import { products } from '../data/products';

const Products: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24 md:py-28">
      <SectionTitle as="h1"
        title="Projects"
        subtitle="Independent software engineering: an industry-intelligence platform in development and a released native iOS app."
      />

      <div className="grid md:grid-cols-2 gap-8">
        {products.map((p) => (
          <article key={p.id} id={p.id} className="scroll-mt-28">
            <Card className="flex flex-col h-full">
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 leading-tight">{p.name}</h3>
                </div>
                <p className="text-sm font-mono text-slate-500 mb-5">{p.role} · {p.year}</p>
                <p className="text-blue-600 dark:text-blue-400 text-base font-medium mb-4">{p.subtitle}</p>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">{p.description}</p>

                {p.highlights && (
                  <ul className="mt-5 list-disc list-outside pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {p.highlights.map((highlight) => (
                      <li key={highlight} className="pl-1">{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>

              <a href={p.url} className="mt-5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">{p.id === 'meshforth' ? 'View on the App Store ↗' : 'Project website ↗'}</a>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-slate-800/50 mt-6">
                {p.tags.map(tag => (
                  <Badge key={tag} color={tag === 'AI Reliability' ? 'accent' : 'default'}>{tag}</Badge>
                ))}
              </div>
            </Card>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Products;
