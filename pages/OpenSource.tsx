import React from 'react';
import Contributions from '../components/Contributions';

const OpenSource: React.FC = () => (
  <div className="max-w-5xl mx-auto px-6 py-24 md:py-28">
    <div className="max-w-3xl">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Open Source</h1>
      <p className="mt-5 mb-10 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
        My upstream contributions to llm-d-router focus on inference scheduling, endpoint selection and resource constraints.
      </p>
      <Contributions />
      <p className="mt-10 text-sm text-slate-500 dark:text-slate-400">
        Status checked November 16, 2026. Follow each pull request for the current review and implementation.
      </p>
    </div>
  </div>
);

export default OpenSource;
