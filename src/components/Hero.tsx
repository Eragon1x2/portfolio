import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Terminal } from './Terminal';

interface HeroProps {
  onUnlockAchievement: (id: string, title: string) => void;
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onUnlockAchievement }) => {
  return (
    <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Background Soft Mint Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-gradient-to-tr from-emerald-200/40 via-teal-100/30 to-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="text-center max-w-4xl mx-auto space-y-6">
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 font-heading leading-tight">
          Full-Stack Engineer
        </h1>

        {/* Stack Subtitle Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base font-mono text-[#059669] font-extrabold">
          <span>React</span>
          <span>·</span>
          <span>Next.js</span>
          <span>·</span>
          <span>TypeScript</span>
          <span>·</span>
          <span>FastAPI</span>
        </div>

        {/* Bio Line */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans font-medium">
          {PERSONAL_INFO.bio}
        </p>

        {/* Action Buttons: View Projects · GitHub · LinkedIn · Contact Me */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#48e5a3] hover:bg-[#32d993] text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 text-slate-700 hover:text-emerald-700 text-xs sm:text-sm font-bold shadow-sm transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 text-slate-700 hover:text-emerald-700 text-xs sm:text-sm font-bold shadow-sm transition-all"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 text-slate-700 hover:text-emerald-700 text-xs sm:text-sm font-bold shadow-sm transition-all"
          >
            <Mail className="w-4 h-4 text-[#059669]" />
            <span>Contact Me</span>
          </a>
        </div>

      </div>

      {/* Terminal Console in Hero */}
      <div id="terminal" className="pt-4">
        <Terminal onUnlockAchievement={onUnlockAchievement} />
      </div>

    </section>
  );
};
