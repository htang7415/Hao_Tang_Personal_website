import React from 'react';
import { ArrowRight, Mail, Linkedin, Github } from 'lucide-react';
import { Button, Card, SectionTitle, Badge } from '../components/LayoutComponents';
import { products, researchItems } from '../data';

const Home: React.FC = () => {
  const featuredProducts = products.filter(p => p.featured).slice(0, 2);
  const featuredResearch = researchItems.filter(r => r.featured).slice(0, 2);

  return (
    <div className="space-y-24 pb-16">
      
      {/* HERO SECTION */}
      <section className="pt-16 md:pt-32 max-w-5xl mx-auto text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-8">
          Software & <span className="text-cyan-600 dark:text-cyan-400">AI Engineer</span>.
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto">
          I build robust web applications and software products. I apply Artificial Intelligence where it solves real problems, focusing on clarity, utility, and user experience.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button asLink to="/products" variant="primary">
            View Products
          </Button>
          <Button asLink to="/research" variant="secondary">
            View Research
          </Button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-4xl mx-auto px-4">
        <SectionTitle title="About Me" />
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800 ring-4 ring-slate-100 dark:ring-slate-800">
              <img src="https://picsum.photos/200" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              I have a background in full-stack engineering with a recent focus on integrating Large Language Models (LLMs) into practical workflows. I believe that technology should be invisible, enabling users to achieve their goals without friction.
            </p>
            <p>
              Currently, I'm interested in roles or collaborations that sit at the intersection of traditional product engineering and applied AI research. I enjoy the challenge of taking a rough prototype and turning it into a production-ready system.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
           <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Featured Products</h2>
           <Button asLink to="/products" variant="outline" className="hidden sm:inline-flex text-sm py-2 px-4">View all</Button>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProducts.map((p) => (
            <Card key={p.id} href={p.url}>
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{p.name}</h3>
                </div>
                <p className="text-cyan-700 dark:text-cyan-400 text-base font-medium mb-3">{p.subtitle}</p>
                <p className="text-slate-600 dark:text-slate-400 text-base mb-6 leading-relaxed">{p.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center sm:hidden">
            <Button asLink to="/products" variant="outline" className="text-sm">View all products</Button>
        </div>
      </section>

      {/* FEATURED RESEARCH */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
           <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Highlighted Research</h2>
           <Button asLink to="/research" variant="outline" className="hidden sm:inline-flex text-sm py-2 px-4">View all</Button>
        </div>
        <div className="space-y-6">
          {featuredResearch.map((item) => (
            <div key={item.id} className="p-8 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">{item.title}</h3>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 bg-white dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-200 dark:border-slate-700 whitespace-nowrap">
                  {item.typeOrVenue}
                </span>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-4xl leading-relaxed">{item.summary}</p>
              <div className="flex gap-5">
                <a href={item.links?.pdf || item.links?.demo || '#'} className="text-cyan-600 dark:text-cyan-400 text-base font-medium hover:underline flex items-center gap-1">
                  View Details <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-4xl mx-auto px-4 text-center py-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">Get in Touch</h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          I'm always open to discussing new opportunities, collaborations, or just chatting about the latest in tech and AI.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10">
          <a href="mailto:htang7415@gmail.com" className="flex items-center justify-center gap-3 text-lg text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            <Mail size={24} />
            <span>htang7415@gmail.com</span>
          </a>
          <a href="#" className="flex items-center justify-center gap-3 text-lg text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
          <a href="#" className="flex items-center justify-center gap-3 text-lg text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            <Github size={24} />
            <span>GitHub</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;