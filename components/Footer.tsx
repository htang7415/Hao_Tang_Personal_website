import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-slate-500 dark:text-slate-400 text-sm">
          &copy; {currentYear} Hao Tang. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
            <span className="sr-only">GitHub</span>
            <Github size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;