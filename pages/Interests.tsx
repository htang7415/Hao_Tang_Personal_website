import React, { useState, useMemo, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight, Disc, Mic2, BookOpen } from 'lucide-react';
import { SectionTitle } from '../components/LayoutComponents';
import { interests } from '../data';

const ITEMS_PER_PAGE = 25;

const Interests: React.FC = () => {
  const sports = interests.filter(i => i.category === 'Sports');
  const allBooks = interests.filter(i => i.category === 'Reading');

  // --- MUSIC DATA PREP ---
  // 1. Artists List (From the special item)
  const artistsList = interests.find(i => i.id === 'm-artists-list')?.items || [];

  // 2. Albums List (All music items that have a year), sorted by Year (Descending)
  const albumsList = interests
    .filter(i => i.category === 'Music' && i.year)
    .sort((a, b) => parseInt(b.year || '0') - parseInt(a.year || '0'));

  // --- READING STATE ---
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'All' | 'Reading' | 'Read' | 'Want to Read'>('All');
  const [currentPage, setCurrentPage] = useState(1);

  // --- READING LOGIC ---
  const filteredBooks = useMemo(() => {
    return allBooks.filter(book => {
      const matchesSearch = 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        (book.subtitle && book.subtitle.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (book.type && book.type.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesStatus = filterStatus === 'All' ? true : book.status === filterStatus;

      return matchesSearch && matchesStatus;
    });
  }, [allBooks, searchTerm, filterStatus]);

  const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);
  
  // Reset page when filter/search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterStatus]);

  const currentBooks = filteredBooks.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const currentlyReading = allBooks.filter(b => b.status === 'Reading');

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-28">
      <SectionTitle title="Interests" subtitle="What keeps me busy away from the keyboard." />

      {/* 1. SPORTS */}
      <section>
        <div className="flex items-center gap-3 mb-8 border-b border-slate-300 dark:border-slate-800 pb-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wide">
            Sports
          </h2>
        </div>
        {/* Updated Grid to 1x4 for Large Screens */}
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sports.map((sport) => (
            <li key={sport.id} className="flex flex-col p-6 rounded-lg bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/50 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <span className="font-bold text-lg text-slate-900 dark:text-slate-200">{sport.title}</span>
              <span className="text-slate-600 dark:text-slate-400 text-base mt-2">{sport.subtitle}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 2. MUSIC (Split Layout) */}
      <section>
        <div className="flex items-center gap-3 mb-10 border-b border-slate-300 dark:border-slate-800 pb-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wide">
            Music
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* LEFT: ARTISTS */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-slate-500 dark:text-slate-500 font-medium text-sm uppercase tracking-wider">
              <Mic2 size={16} />
              <span>Artists</span>
            </div>
            <div className="space-y-4">
              {artistsList.map((artist, idx) => (
                <div key={idx} className="group flex items-baseline justify-between py-3 border-b border-slate-200 dark:border-slate-800/50 last:border-0">
                  <span className="font-bold text-lg text-slate-900 dark:text-slate-200 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                    {artist}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: ALBUMS */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-slate-500 dark:text-slate-500 font-medium text-sm uppercase tracking-wider">
              <Disc size={16} />
              <span>Albums</span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {albumsList.map((album) => (
                <div key={album.id} className="flex flex-col p-5 rounded-lg bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                     <span className="font-bold text-slate-900 dark:text-slate-200 text-lg">{album.title}</span>
                     <span className="text-sm text-slate-500 dark:text-slate-400 font-mono mt-1">{album.year}</span>
                  </div>
                  <div className="flex justify-between items-end mt-2">
                     <span className="text-base text-slate-700 dark:text-slate-400">{album.subtitle}</span>
                     {album.type && <span className="text-[11px] text-slate-500 dark:text-slate-500 uppercase tracking-wide bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">{album.type}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. READING (THE LIBRARY) */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 border-b border-slate-300 dark:border-slate-800 pb-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wide">
            The Library
          </h2>
          <div className="text-sm text-slate-600 dark:text-slate-500 font-mono">
            {allBooks.length} Books Collection
          </div>
        </div>

        {/* Spotlight: Currently Reading */}
        {currentlyReading.length > 0 && filterStatus === 'All' && !searchTerm && currentPage === 1 && (
          <div className="mb-12">
            <h3 className="text-sm font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-6 flex items-center gap-2">
              <BookOpen size={18} /> Currently Reading
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {currentlyReading.map((book) => (
                <div key={book.id} className="p-6 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-900/30 shadow-sm">
                  <div className="font-bold text-xl text-slate-900 dark:text-slate-100 mb-1">{book.title}</div>
                  <div className="text-base text-slate-700 dark:text-slate-400 mb-3">{book.subtitle}</div>
                  {book.note && <div className="text-sm text-cyan-800 dark:text-cyan-300 italic">"{book.note}"</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-6 justify-between mb-8">
          {/* Status Tabs */}
          <div className="flex p-1 bg-slate-200 dark:bg-slate-800 rounded-lg self-start">
            {(['All', 'Reading', 'Read', 'Want to Read'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-5 py-2 text-sm font-medium rounded-md transition-all ${
                  filterStatus === status
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-300'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search title, author, or type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2.5 w-full md:w-72 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:text-slate-200 placeholder:text-slate-500 text-slate-900"
            />
          </div>
        </div>

        {/* Book List Grid */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
           {/* Header Row (Desktop) */}
           <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-slate-100 dark:bg-slate-800/50 text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider border-b border-slate-200 dark:border-slate-800">
             <div className="col-span-5">Title</div>
             <div className="col-span-3">Author</div>
             <div className="col-span-2">Type</div>
             <div className="col-span-2 text-right">Status</div>
           </div>

           {/* List Items */}
           <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {currentBooks.length > 0 ? (
              currentBooks.map((book) => (
                <div key={book.id} className="grid md:grid-cols-12 gap-3 md:gap-4 px-6 py-5 items-center hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  {/* Title Mobile/Desktop */}
                  <div className="col-span-12 md:col-span-5 font-medium text-lg text-slate-900 dark:text-slate-200">
                    {book.title}
                  </div>
                  
                  {/* Author */}
                  <div className="col-span-6 md:col-span-3 text-base text-slate-700 dark:text-slate-400">
                    <span className="md:hidden text-xs text-slate-500 mr-2">By:</span>
                    {book.subtitle}
                  </div>

                  {/* Type */}
                  <div className="col-span-6 md:col-span-2">
                     {book.type && (
                       <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                         {book.type}
                       </span>
                     )}
                  </div>

                  {/* Status */}
                  <div className="col-span-12 md:col-span-2 flex md:justify-end mt-2 md:mt-0">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                      book.status === 'Reading' ? 'bg-cyan-50 border-cyan-200 text-cyan-800 dark:bg-cyan-900/30 dark:border-cyan-800 dark:text-cyan-300' :
                      book.status === 'Want to Read' ? 'bg-slate-50 border-slate-200 text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400' :
                      'text-green-700 dark:text-green-400 bg-green-50 border-green-200 dark:bg-green-900/10 dark:border-green-800'
                    }`}>
                      {book.status}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-6 py-16 text-center text-slate-500 dark:text-slate-400 text-lg">
                No books found matching your criteria.
              </div>
            )}
           </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-8">
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Showing <span className="font-medium text-slate-900 dark:text-slate-200">{(currentPage - 1) * ITEMS_PER_PAGE + 1}</span> to <span className="font-medium text-slate-900 dark:text-slate-200">{Math.min(currentPage * ITEMS_PER_PAGE, filteredBooks.length)}</span> of <span className="font-medium text-slate-900 dark:text-slate-200">{filteredBooks.length}</span> results
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent text-slate-700 dark:text-slate-400"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent text-slate-700 dark:text-slate-400"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}
      </section>

    </div>
  );
};

export default Interests;