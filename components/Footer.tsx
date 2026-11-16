import React from 'react';
import { Link } from 'react-router-dom';
import { Github, GraduationCap, Linkedin } from './icons';
import { profile } from '../data/profile';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-slate-500 dark:text-slate-400 text-sm">
          &copy; {currentYear} {profile.name}. All rights reserved.
        </div>
        <nav aria-label="More" className="flex gap-5 text-sm text-slate-600 dark:text-slate-400">
          <Link to="/resources" className="hover:underline">Resources</Link>
          <Link to="/interests" className="hover:underline">Interests</Link>
        </nav>
        <div className="flex space-x-6">
          <a href={profile.social.github} aria-label="GitHub profile" className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
            <span className="sr-only">GitHub</span>
            <Github size={20} />
          </a>
          <a href={profile.social.linkedin} aria-label="LinkedIn profile" className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin size={20} />
          </a>
          <a href={profile.social.googleScholar} aria-label="Google Scholar profile" className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
            <span className="sr-only">Google Scholar</span>
            <GraduationCap size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
