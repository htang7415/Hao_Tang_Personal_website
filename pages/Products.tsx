import React from 'react';
import { Card, SectionTitle, Badge } from '../components/LayoutComponents';
import { products } from '../data/products';

const Products: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <SectionTitle 
        title="Products" 
        subtitle="I build a mix of AI-related and non-AI web/software products. Each card below links to its own website."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((p) => (
          <Card key={p.id} href={p.url} className="flex flex-col h-full">
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-3">
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 leading-tight">{p.name}</h3>
              </div>
              <p className="text-sm font-mono text-slate-500 mb-5">{p.role} · {p.year}</p>
              <p className="text-blue-600 dark:text-blue-400 text-lg font-medium mb-4">{p.subtitle}</p>
              <p className="text-slate-600 dark:text-slate-400 text-base mb-8 leading-relaxed font-light">{p.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-slate-800/50 mt-4">
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