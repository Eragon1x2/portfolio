import React, { useState, useEffect } from 'react';
import { Terminal, FolderGit2, Cpu, Briefcase, Mail, Download, Sparkles, Menu, X, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface NavbarProps {
  onOpenCvModal: () => void;
  unlockedAchievementsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal, unlockedAchievementsCount }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Terminal", href: "#terminal", icon: Terminal },
    { name: "Projects", href: "#projects", icon: FolderGit2 },
    { name: "Skills", href: "#skills", icon: Cpu },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-700 group-hover:scale-105 transition-all shadow-sm">
            <Code2 className="w-5 h-5 text-[#059669]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-wider text-slate-900 font-heading">
                HOHA<span className="text-[#059669]">.DEV</span>
              </span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold hidden sm:inline-block">
                Freelance Full-Stack
              </span>
            </div>
            <p className="text-xs text-slate-500 font-mono hidden md:block">
              Brașov, RO • {PERSONAL_INFO.experienceYears} Years Exp
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/80 border border-slate-200 rounded-full px-4 py-1.5 shadow-sm backdrop-blur-md">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/80 rounded-full transition-all"
              >
                <Icon className="w-3.5 h-3.5" />
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Area */}
        <div className="hidden sm:flex items-center gap-3">
          {unlockedAchievementsCount > 0 && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>{unlockedAchievementsCount}/4 Badges</span>
            </div>
          )}

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-500 hover:text-emerald-700 hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-500 hover:text-emerald-700 hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenCvModal}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold bg-[#48e5a3] hover:bg-[#32d993] text-slate-950 shadow-md shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume / CV</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white border border-slate-200 text-slate-700"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-emerald-700 hover:border-emerald-300"
                >
                  <Icon className="w-4 h-4 text-emerald-600" />
                  {link.name}
                </a>
              );
            })}
          </div>
          
          <div className="pt-2 flex items-center justify-between border-t border-slate-200">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold bg-[#48e5a3] text-slate-950"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
