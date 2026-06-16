import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FlaskConical, Heart, Home, Library, Menu, Moon, Package, PenTool, Sun, X } from './icons';
import { useTheme } from './ThemeContext';
import { profile } from '../data/profile';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Product', path: '/products', icon: Package },
    { label: 'Research', path: '/research', icon: FlaskConical },
    { label: 'Blogs', path: '/blogs', icon: PenTool },
    { label: 'Resources', path: '/resources', icon: Library },
    { label: 'Interests', path: '/interests', icon: Heart },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3 shadow-sm' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0 z-50">
          <NavLink to="/" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            {profile.name}
          </NavLink>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full transition-all">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm lg:text-base font-medium transition-all duration-300 ease-out ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md dark:bg-blue-600 dark:text-white dark:shadow-blue-900/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              isScrolled 
                ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400' 
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 shadow-sm border border-slate-200 dark:border-slate-700'
            } hover:scale-110 active:scale-95`}
            aria-label="Toggle Theme"
            aria-pressed={theme === 'dark'}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            className="md:hidden p-2 text-slate-900 dark:text-slate-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300 origin-top ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden'}`}>
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-4 py-4 rounded-xl transition-all ${
                      isActive
                        ? 'bg-slate-100 dark:bg-slate-800/80 text-blue-600 dark:text-blue-400 font-bold'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                      <span className="text-xl">{link.label}</span>
                    </>
                  )}
                </NavLink>
              );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
