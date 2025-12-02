
import React, { useState, useMemo } from 'react';
import { ExternalLink, Search, Mic, Users, MonitorPlay, Wrench, LayoutGrid } from 'lucide-react';
import { SectionTitle } from '../components/LayoutComponents';
import { resources } from '../data';

const Resources: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'All', label: 'All Resources', icon: LayoutGrid },
    { id: 'Podcast', label: 'Podcasts', icon: Mic },
    { id: 'Community', label: 'Communities', icon: Users },
    { id: 'Channel', label: 'Channels', icon: MonitorPlay },
    { id: 'Tool', label: 'Tools', icon: Wrench },
  ];

  const filteredResources = useMemo(() => {
    return resources.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <SectionTitle 
        title="Resources" 
        subtitle="A curated directory of podcasts, communities, channels, and tools I rely on." 
      />

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        
        {/* LEFT COLUMN: Search & Navigation */}
        <div className="w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-24 z-10">
          
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 shadow-sm transition-shadow"
            />
          </div>

          {/* Category Nav */}
          <nav className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  <Icon size={18} />
                  {cat.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* RIGHT COLUMN: Grid Content */}
        <div className="flex-1 w-full min-h-[500px]">
           
           <div className="mb-6 flex items-center justify-between">
             <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
               {activeCategory === 'All' ? 'All Resources' : `${activeCategory}s`}
             </h2>
             <span className="text-sm font-mono text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
               {filteredResources.length} items
             </span>
           </div>

           {filteredResources.length > 0 ? (
             <div className="grid md:grid-cols-2 gap-6">
              {filteredResources.map((item) => (
                <a 
                  key={item.id} 
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-cyan-400 dark:hover:border-cyan-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                       {/* Show category tag only in 'All' view */}
                       {activeCategory === 'All' && (
                         <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                           {item.category}
                         </span>
                       )}
                    </div>
                    <ExternalLink size={18} className="text-slate-300 group-hover:text-cyan-500 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
           ) : (
             <div className="py-20 text-center rounded-xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
               <p className="text-lg text-slate-500 dark:text-slate-400">
                 No resources found matching "{searchTerm}".
               </p>
               <button 
                 onClick={() => setSearchTerm('')}
                 className="mt-2 text-cyan-600 dark:text-cyan-400 hover:underline"
               >
                 Clear search
               </button>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default Resources;
