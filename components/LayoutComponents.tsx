import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- BUTTONS ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  asLink?: boolean;
  to?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  asLink,
  to,
  external,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400 focus:ring-slate-500 dark:focus:ring-cyan-500",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 focus:ring-slate-300 dark:focus:ring-slate-600",
    outline: "border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:border-slate-600",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (asLink && to) {
    if (external) {
      return (
        <a href={to} className={combinedClasses} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

// --- BADGE ---
export const Badge: React.FC<{ children: React.ReactNode; color?: 'default' | 'accent' }> = ({ children, color = 'default' }) => {
  const styles = color === 'accent'
    ? "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300"
    : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400";

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium tracking-wide ${styles}`}>
      {children}
    </span>
  );
};

// --- CARD ---
export const Card: React.FC<{ children: React.ReactNode; className?: string; href?: string }> = ({ children, className = '', href }) => {
  const content = (
    <div className={`
      bg-white dark:bg-slate-900 
      border border-slate-200 dark:border-slate-800 
      rounded-lg p-6 md:p-8 
      transition-all duration-300 
      ${href ? 'hover:border-cyan-500/50 hover:shadow-md dark:hover:border-cyan-500/50 cursor-pointer group' : ''}
      ${className}
    `}>
      {children}
      {href && (
        <div className="absolute top-6 right-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-cyan-600 dark:text-cyan-400">
          <ExternalLink size={20} />
        </div>
      )}
    </div>
  );

  if (href) {
    // If it's an internal link (starts with /), use React Router
    const isInternal = href.startsWith('/');
    if (isInternal) {
      return <Link to={href} className="block relative h-full">{content}</Link>;
    }
    return <a href={href} target="_blank" rel="noopener noreferrer" className="block relative h-full">{content}</a>;
  }

  return <div className="relative h-full">{content}</div>;
};

// --- SECTION TITLE ---
export const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-10">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">{title}</h2>
    {subtitle && <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">{subtitle}</p>}
  </div>
);