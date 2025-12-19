import React from 'react';

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  width?: 'full' | 'lg' | 'md' | 'sm';
}

export const Figure: React.FC<FigureProps> = ({
  src,
  alt,
  caption,
  width = 'full'
}) => {
  const widthClasses = {
    full: 'w-full',
    lg: 'max-w-4xl mx-auto',
    md: 'max-w-2xl mx-auto',
    sm: 'max-w-xl mx-auto',
  }[width];

  return (
    <figure className={`my-8 ${widthClasses}`}>
      <img
        src={src}
        alt={alt}
        className="rounded-lg shadow-lg w-full h-auto border border-slate-200 dark:border-slate-800"
        loading="lazy"
      />
      {caption && (
        <figcaption className="text-sm text-slate-600 dark:text-slate-400 italic mt-3 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
