import React, { useState, useMemo } from 'react';
import { ExternalLink, LayoutGrid, Mic, MonitorPlay, Search, Users, Wrench } from '../components/icons';
import { SectionTitle } from '../components/LayoutComponents';
import { resources } from '../data/resources';

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
    <div className="max-w-7xl mx-auto px-6 py-24">
      <SectionTitle 
        title="Resources" 
        subtitle="A curated directory of podcasts, communities, channels, and tools I rely on." 
      />

      <div className="flex flex-col lg:flex-row gap-16 items-start">
        
        {/* LEFT COLUMN: Search & Navigation */}
        <div className="w-full lg:w-72 flex-shrink-0 lg:sticky lg:top-32 z-10">
          
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 transition-all"
            />
          </div>

          {/* Category Nav */}
          <nav className="flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-4 px-5 py-4 rounded-xl text-base font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-slate-900 text-white dark:bg-blue-600 dark:text-white shadow-lg shadow-slate-200/50 dark:shadow-none'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  <Icon size={20} className={isActive ? 'text-white' : 'text-slate-400 dark:text-slate-500'} />
                  {cat.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* RIGHT COLUMN: Grid Content */}
        <div className="flex-1 w-full min-h-[500px]">
           
           <div className="mb-8 flex items-end justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
             <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
               {activeCategory === 'All' ? 'All Resources' : `${activeCategory}s`}
             </h2>
             <span className="text-sm font-mono text-slate-500 dark:text-slate-500">
               {filteredResources.length} items
             </span>
           </div>

           {filteredResources.length > 0 ? (
             <div className="grid md:grid-cols-2 gap-8">
              {filteredResources.map((item) => (
                <a 
                  key={item.id} 
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-8 h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                       {/* Show category tag only in 'All' view */}
                       {activeCategory === 'All' && (
                         <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded border border-slate-100 dark:border-slate-700">
                           {item.category}
                         </span>
                       )}
                    </div>
                    <ExternalLink size={18} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
           ) : (
             <div className="py-24 text-center rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
               <p className="text-xl text-slate-500 dark:text-slate-400 mb-4">
                 No resources found matching "{searchTerm}".
               </p>
               <button 
                 onClick={() => setSearchTerm('')}
                 className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
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
