import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from '../components/icons';
import { products } from '../data/products';
import { researchItems } from '../data/research';
import { profile } from '../data/profile';

const focusAreas = [
  'Agent evaluation and safety benchmarks',
  'Retrieval and vector-memory systems',
  'Post-training and RL workflows',
  'Reliable ML for scientific applications',
];

const Home: React.FC = () => {
  const featuredProducts = products.filter(p => p.featured).slice(0, 3);
  const featuredResearch = researchItems.filter(r => r.featured).slice(0, 3);

  const productHref = (url: string) => url.startsWith('/') ? `#${url}` : url;

  return (
    <div className="pb-20">
      <section className="max-w-5xl mx-auto px-6 pt-28 md:pt-32">
        <div className="flex flex-col sm:flex-row gap-6 sm:items-start border-b border-slate-200 dark:border-slate-800 pb-10">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-md object-cover border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900"
          />

          <div className="max-w-3xl">
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{profile.role}</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold text-slate-950 dark:text-slate-50">
              {profile.name}
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {profile.tagline}
            </p>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium">
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Mail size={16} />
                {profile.email}
              </a>
              <a href={profile.social.github} className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Github size={16} />
                GitHub
              </a>
              <a href={profile.social.linkedin} className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10 border-b border-slate-200 dark:border-slate-800">
        <div className="grid md:grid-cols-[1.4fr_0.8fr] gap-10">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">About</h2>
            <div className="space-y-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {profile.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Focus</h2>
            <ul className="space-y-3 text-base text-slate-600 dark:text-slate-400">
              {focusAreas.map((area) => (
                <li key={area} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600 dark:bg-blue-400" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10 border-b border-slate-200 dark:border-slate-800">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center justify-between gap-4 mb-4">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Selected Systems</h2>
              <a href="#/products" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                All products <ArrowRight size={15} />
              </a>
            </div>
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              {featuredProducts.map((p) => (
                <article key={p.id} className="py-5 first:pt-0">
                  <a href={productHref(p.url)} className="group inline-flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400">
                    {p.name}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </a>
                  <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">{p.subtitle}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{p.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between gap-4 mb-4">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Research</h2>
              <a href="#/research" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                All research <ArrowRight size={15} />
              </a>
            </div>
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              {featuredResearch.map((item) => (
                <article key={item.id} className="py-5 first:pt-0">
                  <a href={`#/research#${item.id}`} className="group inline-flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400">
                    {item.title}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </a>
                  <p className="mt-1 text-xs font-medium uppercase text-slate-500 dark:text-slate-500">{item.typeOrVenue}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Contact</h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Interested in AI evaluation, retrieval systems, or ML infrastructure work.
            </p>
          </div>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-base font-medium text-blue-600 dark:text-blue-400 hover:underline">
            <Mail size={18} />
            {profile.email}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
