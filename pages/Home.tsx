import React from 'react';
import { ArrowRight, Mail, Linkedin, Github } from 'lucide-react';
import { Button, Card, SectionTitle, Badge } from '../components/LayoutComponents';
import { products } from '../data/products';
import { researchItems } from '../data/research';
import { profile } from '../data/profile';

const Home: React.FC = () => {
  const featuredProducts = products.filter(p => p.featured).slice(0, 2);
  const featuredResearch = researchItems.filter(r => r.featured).slice(0, 2);

  return (
    <div className="space-y-32 pb-24">
      
      {/* HERO SECTION */}
      <section className="pt-20 md:pt-40 max-w-5xl mx-auto text-center px-4">
        <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
          {profile.tagline}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
          <Button asLink to="/products" variant="primary" className="px-8 py-4 text-lg">
            View Products
          </Button>
          <Button asLink to="/research" variant="secondary" className="px-8 py-4 text-lg">
            View Research
          </Button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-4xl mx-auto px-6">
        <SectionTitle title="About Me" />
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-inner">
              <img 
                src={profile.avatar} 
                alt={profile.name} 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" 
              />
            </div>
          </div>
          <div className="space-y-8 text-xl text-slate-600 dark:text-slate-400 leading-loose font-light">
            {profile.about.paragraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12 max-w-6xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">Featured Products & Systems</h2>
           <Button asLink to="/products" variant="outline" className="hidden sm:inline-flex text-sm py-2.5 px-5 rounded-full">View all</Button>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {featuredProducts.map((p) => (
            <Card key={p.id} href={p.url} className="h-full flex flex-col">
              <div className="mb-6 flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{p.name}</h3>
                </div>
                <p className="text-blue-600 dark:text-blue-400 text-lg font-medium mb-4">{p.subtitle}</p>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">{p.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
            <Button asLink to="/products" variant="outline" className="text-sm rounded-full w-full">View all products and systems</Button>
        </div>
      </section>

      {/* FEATURED RESEARCH */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">Highlighted Research</h2>
           <Button asLink to="/research" variant="outline" className="hidden sm:inline-flex text-sm py-2.5 px-5 rounded-full">View all</Button>
        </div>
        <div className="space-y-8">
          {featuredResearch.map((item) => (
            <div key={item.id} className="group relative p-8 md:p-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 transition-all shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-4 mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">{item.title}</h3>
                <span className="text-sm font-medium text-slate-500 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full whitespace-nowrap">
                  {item.typeOrVenue}
                </span>
              </div>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-4xl leading-relaxed font-light">{item.summary}</p>
              <div className="flex gap-6">
                <a href="#/research" className="text-blue-600 dark:text-blue-500 text-lg font-medium hover:underline flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  View Details <ArrowRight size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-white dark:bg-slate-900/60 rounded-3xl p-12 md:p-20 text-center border border-slate-200 dark:border-slate-800 shadow-sm">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">Get in Touch</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just chatting about the latest in tech and AI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12">
            <a href={`mailto:${profile.email}`} className="flex items-center justify-center gap-3 text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
              <Mail size={24} />
              <span>{profile.email}</span>
            </a>
            <a href={profile.social.linkedin} className="flex items-center justify-center gap-3 text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a href={profile.social.github} className="flex items-center justify-center gap-3 text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
              <Github size={24} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
