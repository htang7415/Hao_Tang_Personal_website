import React, { useState, useMemo, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight, Disc, Mic2, BookOpen } from 'lucide-react';
import { SectionTitle } from '../components/LayoutComponents';
import { interests } from '../data/interests';

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
        (book.type && book.type.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (book.year && book.year.includes(searchTerm));

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
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
      <SectionTitle 
        title="Interests" 
        subtitle="What keeps me busy away from the keyboard." 
      />

      {/* 1. SPORTS */}
      <section>
        <div className="flex items-center gap-3 mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-tight">
            Sports
          </h2>
        </div>
        {/* Updated Grid to 1x4 for Large Screens */}
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sports.map((sport) => (
            <li key={sport.id} className="flex flex-col p-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <span className="font-bold text-2xl text-slate-900 dark:text-slate-100 mb-3">{sport.title}</span>
              <span className="text-slate-600 dark:text-slate-400 text-lg">{sport.subtitle}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 2. MUSIC (Split Layout) */}
      <section>
        <div className="flex items-center gap-3 mb-12 border-b border-slate-200 dark:border-slate-800 pb-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-tight">
            Music
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-20">
          
          {/* LEFT: ARTISTS */}
          <div>
            <div className="flex items-center gap-2 mb-8 text-slate-500 dark:text-slate-500 font-bold text-xs uppercase tracking-widest">
              <Mic2 size={16} />
              <span>Artists</span>
            </div>
            <div className="space-y-6">
              {artistsList.map((artist, idx) => (
                <div key={idx} className="group flex items-baseline justify-between py-2 border-b border-slate-100 dark:border-slate-800/50 last:border-0 hover:pl-2 transition-all">
                  <span className="font-bold text-xl text-slate-900 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {artist}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: ALBUMS */}
          <div>
            <div className="flex items-center gap-2 mb-8 text-slate-500 dark:text-slate-500 font-bold text-xs uppercase tracking-widest">
              <Disc size={16} />
              <span>Albums</span>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {albumsList.map((album) => (
                <div key={album.id} className="flex flex-col p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                     <span className="font-bold text-slate-900 dark:text-slate-100 text-xl">{album.title}</span>
                     <span className="text-sm text-slate-500 dark:text-slate-400 font-mono mt-1">{album.year}</span>
                  </div>
                  <div className="flex justify-between items-end">
                     <span className="text-lg text-slate-600 dark:text-slate-400 font-light">{album.subtitle}</span>
                     {album.type && <span className="text-[10px] text-slate-500 dark:text-slate-500 uppercase tracking-widest font-bold bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded border border-slate-100 dark:border-slate-700">{album.type}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. READING (THE LIBRARY) */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 border-b border-slate-200 dark:border-slate-800 pb-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-tight">
            The Library
          </h2>
          <div className="text-base text-slate-500 dark:text-slate-500 font-mono">
            {allBooks.length} Books Collection
          </div>
        </div>

        {/* Spotlight: Currently Reading */}
        {currentlyReading.length > 0 && filterStatus === 'All' && !searchTerm && currentPage === 1 && (
          <div className="mb-16">
            <h3 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <BookOpen size={16} /> Currently Reading
            </h3>
            <div className="grid sm:grid-cols-2 gap-8">
              {currentlyReading.map((book) => (
                <div key={book.id} className="p-8 rounded-2xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                  <div className="font-bold text-2xl text-slate-900 dark:text-slate-100 mb-2">{book.title}</div>
                  <div className="text-lg text-slate-600 dark:text-slate-400 mb-4">{book.subtitle}</div>
                  {book.note && <div className="text-base text-blue-800 dark:text-blue-300 italic font-light leading-relaxed">"{book.note}"</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-8 justify-between mb-10">
          {/* Status Tabs */}
          <div className="flex p-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl self-start">
            {(['All', 'Reading', 'Read', 'Want to Read'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all ${
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
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search title, author, type, or year..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 w-full md:w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-slate-200 placeholder:text-slate-500 text-slate-900 transition-all"
            />
          </div>
        </div>

        {/* Book List Grid */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
           {/* Header Row (Desktop) */}
           <div className="hidden md:grid grid-cols-12 gap-6 px-8 py-5 bg-slate-50 dark:bg-slate-800/50 text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wider border-b border-slate-200 dark:border-slate-800">
             <div className="col-span-4">Title</div>
             <div className="col-span-3">Author</div>
             <div className="col-span-1 text-center">Year</div>
             <div className="col-span-2">Type</div>
             <div className="col-span-2 text-right">Status</div>
           </div>

           {/* List Items */}
           <div className="divide-y divide-slate-100 dark:divide-slate-800/50">
            {currentBooks.length > 0 ? (
              currentBooks.map((book) => (
                <div key={book.id} className="grid md:grid-cols-12 gap-4 md:gap-6 px-8 py-6 items-center hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                  {/* Title Mobile/Desktop */}
                  <div className="col-span-12 md:col-span-4 font-bold text-xl text-slate-900 dark:text-slate-200">
                    {book.title}
                  </div>

                  {/* Author */}
                  <div className="col-span-6 md:col-span-3 text-lg text-slate-600 dark:text-slate-400 font-light">
                    <span className="md:hidden text-xs text-slate-500 mr-2 font-bold uppercase">By:</span>
                    {book.subtitle}
                  </div>

                  {/* Year */}
                  <div className="col-span-6 md:col-span-1 text-sm font-mono text-slate-600 dark:text-slate-400 md:text-center">
                    <span className="md:hidden text-xs text-slate-500 mr-2 font-bold uppercase">Year:</span>
                    {book.year}
                  </div>

                  {/* Type */}
                  <div className="col-span-6 md:col-span-2">
                     {book.type && (
                       <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                         {book.type}
                       </span>
                     )}
                  </div>

                  {/* Status */}
                  <div className="col-span-12 md:col-span-2 flex md:justify-end mt-3 md:mt-0">
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${
                      book.status === 'Reading' ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300' :
                      book.status === 'Want to Read' ? 'bg-slate-50 border-slate-200 text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400' :
                      'text-green-700 dark:text-green-400 bg-green-50 border-green-200 dark:bg-green-900/10 dark:border-green-800'
                    }`}>
                      {book.status}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-8 py-20 text-center text-slate-500 dark:text-slate-400 text-lg">
                No books found matching your criteria.
              </div>
            )}
           </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-10">
            <div className="text-base text-slate-600 dark:text-slate-400">
              Showing <span className="font-bold text-slate-900 dark:text-slate-200">{(currentPage - 1) * ITEMS_PER_PAGE + 1}</span> to <span className="font-bold text-slate-900 dark:text-slate-200">{Math.min(currentPage * ITEMS_PER_PAGE, filteredBooks.length)}</span> of <span className="font-bold text-slate-900 dark:text-slate-200">{filteredBooks.length}</span> results
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent text-slate-700 dark:text-slate-300 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent text-slate-700 dark:text-slate-300 transition-colors"
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