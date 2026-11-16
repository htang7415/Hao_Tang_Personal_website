import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, X } from './icons';
import { useTheme } from './ThemeContext';
import { profile } from '../data/profile';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/products' },
  { label: 'Research', path: '/research' },
  { label: 'Writing', path: '/blogs' },
];

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();
  useEffect(() => { setIsMenuOpen(false); }, [pathname]);
  useEffect(() => {
    if (!isMenuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setIsMenuOpen(false); menuButton.current?.focus(); }
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [isMenuOpen]);

  const links = navLinks.map(link => (
    <NavLink key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className={({ isActive }) =>
      `px-1 py-2 text-sm font-medium border-b-2 ${isActive ? 'border-blue-600 dark:border-blue-400 text-blue-700 dark:text-blue-400' : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400'}`
    }>{link.label}</NavLink>
  ));

  return (
    <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
        <NavLink to="/" className="text-lg font-semibold tracking-tight">{profile.name}<span className="text-blue-600 dark:text-blue-400">.</span></NavLink>
        <div className="flex items-center gap-6">
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-6">{links}</nav>
          <button onClick={toggleTheme} className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800" aria-label="Toggle Theme" aria-pressed={theme === 'dark'}>
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button ref={menuButton} className="md:hidden p-2 -mr-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMenuOpen} aria-controls="mobile-navigation">
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!isMenuOpen} className="md:hidden border-t border-slate-200 dark:border-slate-800 px-6 py-4">
        <div className="flex flex-col items-start gap-2">{links}</div>
      </nav>
    </header>
  );
};
export default Header;
