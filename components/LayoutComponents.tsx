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
    primary: "bg-slate-900 text-white hover:bg-slate-800 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500 focus:ring-slate-500 dark:focus:ring-blue-500",
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
    ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800"
    : "bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700";

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium tracking-wide ${styles}`}>
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
      rounded-xl p-8
      shadow-sm
      transition-all duration-300 
      ${href ? 'hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg hover:-translate-y-1 cursor-pointer group' : ''}
      ${className}
    `}>
      {children}
      {href && (
        <div className="absolute top-8 right-8 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-600 dark:text-blue-400">
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
export const SectionTitle: React.FC<{ title: string; subtitle?: string; className?: string }> = ({ title, subtitle, className = 'mb-16' }) => (
  <div className={className}>
    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6 tracking-tight">{title}</h2>
    {subtitle && <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed font-light">{subtitle}</p>}
  </div>
);
