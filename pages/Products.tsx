import React from 'react';
import { Card, SectionTitle, Badge } from '../components/LayoutComponents';
import { products } from '../data';

const Products: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <SectionTitle 
        title="Products" 
        subtitle="I build a mix of AI-related and non-AI web/software products. Each card below links to its own website."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <Card key={p.id} href={p.url} className="flex flex-col h-full">
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{p.name}</h3>
              </div>
              <p className="text-xs font-mono text-slate-500 mb-4">{p.role} · {p.year}</p>
              <p className="text-cyan-700 dark:text-cyan-400 text-base font-medium mb-4">{p.subtitle}</p>
              <p className="text-slate-600 dark:text-slate-400 text-base mb-8 leading-relaxed">{p.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-slate-800 mt-2">
              {p.tags.map(tag => (
                <Badge key={tag} color={tag === 'AI' ? 'accent' : 'default'}>{tag}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;