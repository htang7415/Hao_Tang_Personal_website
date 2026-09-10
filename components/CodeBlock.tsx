import React, { useState, useRef } from 'react';
import { Check, Copy } from './icons';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string; // e.g., "language-javascript" from rehype-highlight
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  const [isCopied, setIsCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const extractLanguage = (className?: string): string => {
    if (!className) return 'plaintext';
    const match = className.match(/language-(\w+)/);
    return match ? match[1] : 'plaintext';
  };

  const language = extractLanguage(className);

  // Language display name mapping
  const displayName: Record<string, string> = {
    js: 'JavaScript',
    ts: 'TypeScript',
    tsx: 'TSX',
    jsx: 'JSX',
    py: 'Python',
    bash: 'Bash',
    sh: 'Shell',
    html: 'HTML',
    css: 'CSS',
    json: 'JSON',
    yaml: 'YAML',
    md: 'Markdown',
    sql: 'SQL',
    go: 'Go',
    rust: 'Rust',
    java: 'Java',
    cpp: 'C++',
    c: 'C',
  };

  const handleCopy = async () => {
    const codeElement = preRef.current?.querySelector('code');
    const codeText = codeElement?.textContent || '';

    try {
      await navigator.clipboard.writeText(codeText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative group my-8">
      {/* Language badge and copy button */}
      <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
        <span className="px-3 py-1 rounded-md bg-slate-800/90 text-slate-300 text-xs font-medium">
          {displayName[language] || language.toUpperCase()}
        </span>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="p-2 rounded-md bg-slate-800/90 text-slate-300 hover:text-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-label="Copy code"
        >
          {isCopied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>

      <pre
        ref={preRef}
        className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-6 rounded-lg overflow-x-auto border border-slate-800 shadow-lg"
      >
        {children}
      </pre>
    </div>
  );
};
