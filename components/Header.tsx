import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

const NavItem: React.FC<{ to: string; label: string; onClick?: () => void }> = ({ to, label, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `text-lg font-medium transition-colors duration-200 ${
        isActive
          ? 'text-cyan-600 dark:text-cyan-400'
          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
      }`
    }
  >
    {label}
  </NavLink>
);

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Research', path: '/research' },
    { label: 'Blogs', path: '/blogs' },
    { label: 'Resources', path: '/resources' },
    { label: 'Interests', path: '/interests' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <NavLink to="/" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Hao Tang
          </NavLink>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavItem key={link.path} to={link.path} label={link.label} />
          ))}
        </nav>

        {/* Right Actions (Theme + Mobile Menu Trigger) */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
          </button>

          <button
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="px-4 pt-4 pb-8 space-y-6 flex flex-col">
            {navLinks.map((link) => (
              <NavItem 
                key={link.path} 
                to={link.path} 
                label={link.label} 
                onClick={() => setIsMenuOpen(false)} 
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;