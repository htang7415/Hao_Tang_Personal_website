import React from 'react';
import { Info, AlertTriangle, CheckCircle2, XCircle, Lightbulb } from 'lucide-react';

interface CalloutProps {
  type: 'info' | 'warning' | 'success' | 'danger' | 'tip';
  title?: string;
  children: React.ReactNode;
}

export const Callout: React.FC<CalloutProps> = ({ type, title, children }) => {
  const config = {
    info: {
      icon: Info,
      border: 'border-blue-500',
      bg: 'bg-blue-50 dark:bg-blue-950/30',
      text: 'text-blue-900 dark:text-blue-200',
      iconColor: 'text-blue-500',
    },
    warning: {
      icon: AlertTriangle,
      border: 'border-amber-500',
      bg: 'bg-amber-50 dark:bg-amber-950/30',
      text: 'text-amber-900 dark:text-amber-200',
      iconColor: 'text-amber-500',
    },
    success: {
      icon: CheckCircle2,
      border: 'border-green-500',
      bg: 'bg-green-50 dark:bg-green-950/30',
      text: 'text-green-900 dark:text-green-200',
      iconColor: 'text-green-500',
    },
    danger: {
      icon: XCircle,
      border: 'border-red-500',
      bg: 'bg-red-50 dark:bg-red-950/30',
      text: 'text-red-900 dark:text-red-200',
      iconColor: 'text-red-500',
    },
    tip: {
      icon: Lightbulb,
      border: 'border-purple-500',
      bg: 'bg-purple-50 dark:bg-purple-950/30',
      text: 'text-purple-900 dark:text-purple-200',
      iconColor: 'text-purple-500',
    },
  }[type];

  const Icon = config.icon;

  return (
    <div className={`border-l-4 ${config.border} ${config.bg} p-4 md:p-5 rounded-r-lg my-6`}>
      <div className="flex gap-3">
        <Icon className={`${config.iconColor} flex-shrink-0 mt-1`} size={20} />
        <div className={config.text}>
          {title && <div className="font-semibold mb-1">{title}</div>}
          <div className="text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
};
