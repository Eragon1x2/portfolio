import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Terminal } from './Terminal';

interface HeroProps {
  onUnlockAchievement: (id: string, title: string) => void;
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onUnlockAchievement, onOpenCvModal }) => {
  return (
    <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Background Soft Mint Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-emerald-200/40 via-teal-100/30 to-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="text-center max-w-4xl mx-auto space-y-6">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-[#48e5a3] animate-pulse" />
          <span>Freelance Full-Stack Engineer • Available for New Projects</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 font-heading leading-tight">
          Full-Stack Engineer <br className="hidden sm:inline" />
          <span className="text-gradient-mint">& Web Application Architect</span>
        </h1>

        {/* Bio Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-sans">
          Building high-performance, secure web applications using <span className="text-[#059669] font-bold">React</span>, <span className="text-[#059669] font-bold">TypeScript</span>, and <span className="text-[#0d9488] font-bold">FastAPI</span>. Specialized in refactoring complex codebases, API performance, and rapid AI workflows (Cursor).
        </p>

        {/* Quick Tech Badge Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-mono text-slate-600">
          <span className="px-3 py-1 rounded-xl bg-white border border-slate-200 shadow-xs font-semibold">React & Next.js</span>
          <span className="px-3 py-1 rounded-xl bg-white border border-slate-200 shadow-xs font-semibold">TypeScript</span>
          <span className="px-3 py-1 rounded-xl bg-white border border-slate-200 shadow-xs font-semibold">FastAPI & Python</span>
          <span className="px-3 py-1 rounded-xl bg-white border border-slate-200 shadow-xs font-semibold">Cybersecurity Degree</span>
          <span className="px-3 py-1 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 font-bold">Vite (-43% Bundle)</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#48e5a3] hover:bg-[#32d993] text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
          >
            <span>View Featured Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenCvModal}
            className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 text-slate-700 hover:text-emerald-700 text-xs sm:text-sm font-bold shadow-sm transition-all"
          >
            <Download className="w-4 h-4 text-[#059669]" />
            <span>Resume PDF</span>
          </button>
        </div>

      </div>

      {/* Terminal Console in Hero */}
      <div id="terminal" className="pt-6">
        <Terminal onUnlockAchievement={onUnlockAchievement} />
      </div>

    </section>
  );
};
