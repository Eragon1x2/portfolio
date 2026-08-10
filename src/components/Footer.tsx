import React from 'react';
import { Code2, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <p className="font-extrabold text-sm text-slate-900 font-heading">
              {PERSONAL_INFO.name}
            </p>
            <p className="text-xs text-slate-500 font-mono">
              Full-Stack Engineer • Freelance Consultant
            </p>
          </div>
        </div>

        <div className="text-xs text-slate-500 font-mono text-center space-y-1">
          <p>Built with Vite • React • TypeScript • Tailwind CSS</p>
          <p className="text-slate-500">© 2026 Hoha Yevhen. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#059669] hover:border-emerald-300 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#059669] hover:border-emerald-300 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#059669] hover:border-emerald-300 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
