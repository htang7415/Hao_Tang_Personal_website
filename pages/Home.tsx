import React from 'react';
import { ArrowRight, BrainCircuit, Database, GitBranch, Github, Linkedin, Mail, ShieldCheck } from '../components/icons';
import { Button, Card, SectionTitle, Badge } from '../components/LayoutComponents';
import { products } from '../data/products';
import { researchItems } from '../data/research';
import { profile } from '../data/profile';

const focusAreas = [
  { label: 'Agent evals', icon: ShieldCheck },
  { label: 'Retrieval memory', icon: Database },
  { label: 'Post-training/RL', icon: GitBranch },
  { label: 'Reliable ML', icon: BrainCircuit },
];

const proofPoints = [
  '324-trace agent-memory pilot',
  '72 retrieval runs validated',
  '9 UQ methods benchmarked',
  'Native iOS product shipped',
];

const Home: React.FC = () => {
  const featuredProducts = products.filter(p => p.featured).slice(0, 3);
  const featuredResearch = researchItems.filter(r => r.featured).slice(0, 2);

  return (
    <div className="space-y-24 pb-20">
      <section className="max-w-7xl mx-auto px-6 pt-28 md:pt-36">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-8">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-14 h-14 rounded-full object-cover border border-slate-200 dark:border-slate-800"
              />
              <div>
                <p className="text-sm font-mono uppercase tracking-widest text-slate-500 dark:text-slate-500">
                  Portfolio
                </p>
                <p className="text-base font-medium text-slate-700 dark:text-slate-300">
                  {profile.role}
                </p>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-950 dark:text-slate-50 mb-6">
              {profile.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl font-light mb-8">
              {profile.tagline}
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-10 max-w-3xl">
              {focusAreas.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 px-4 py-3"
                >
                  <Icon size={18} className="text-blue-600 dark:text-blue-400" />
                  <span className="font-medium text-slate-800 dark:text-slate-200">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asLink to="/research" variant="primary" className="gap-2">
                Research Systems <ArrowRight size={18} />
              </Button>
              <Button asLink to="/products" variant="secondary" className="gap-2">
                Products <ArrowRight size={18} />
              </Button>
            </div>
          </div>

          <div className="lg:justify-self-end w-full max-w-md">
            <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
              <img
                src={profile.avatar}
                alt={`${profile.name} portrait`}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {proofPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6">
        <SectionTitle title="About" className="mb-8" />
        <div className="space-y-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
          {profile.about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-10 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
            Featured Products & Systems
          </h2>
          <Button asLink to="/products" variant="outline" className="text-sm py-2.5 px-5">
            View all
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredProducts.map((p) => (
            <Card key={p.id} href={p.url} className="h-full flex flex-col">
              <div className="mb-6 flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">{p.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 text-base font-medium mb-4">{p.subtitle}</p>
                <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">{p.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
            Highlighted Research
          </h2>
          <Button asLink to="/research" variant="outline" className="text-sm py-2.5 px-5">
            View all
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredResearch.map((item) => (
            <article
              key={item.id}
              className="group rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-7 transition-all hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md"
            >
              <div className="flex flex-col gap-3 mb-5">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                  {item.typeOrVenue}
                </span>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-light">{item.summary}</p>
              <a href={`#/research#${item.id}`} className="text-blue-600 dark:text-blue-500 text-base font-medium hover:underline inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                View details <ArrowRight size={18} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">Get in touch</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Open to AI research engineering, ML systems, evaluation infrastructure, and product-focused software work.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3">
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-3 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Mail size={20} />
                <span>{profile.email}</span>
              </a>
              <a href={profile.social.linkedin} className="inline-flex items-center gap-3 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href={profile.social.github} className="inline-flex items-center gap-3 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
