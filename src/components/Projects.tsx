import React, { useState } from 'react';
import { FolderGit2, Lock, Star, CheckCircle2, Cpu } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'featured') return p.featured;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono mb-2 font-bold">
            <FolderGit2 className="w-3.5 h-3.5 text-[#059669]" />
            <span>Featured Repositories & Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Selected <span className="text-gradient-mint">Projects</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-xl">
            Key full-stack applications, interactive SaaS dashboards, and web products built with React, TypeScript, FastAPI, and Vite.
          </p>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'featured', label: '⭐ Featured' },
            { id: 'fullstack', label: 'Full-Stack' },
            { id: 'frontend', label: 'Frontend' },
            { id: 'automation', label: 'AI & Tools' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all shrink-0 ${
                filter === item.id
                  ? 'bg-[#48e5a3] text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-3xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-[#48e5a3] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-300 font-bold">
                  {project.category}
                </span>

                <div className="flex items-center gap-2">
                  {project.isPrivate ? (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 font-bold" title="Commercial NDA Codebase">
                      <Lock className="w-3 h-3 text-amber-600" /> Commercial NDA
                    </span>
                  ) : (
                    project.featured && (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-300 font-bold">
                        <Star className="w-3 h-3 fill-current text-emerald-600" /> Featured
                      </span>
                    )
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#059669] transition-colors font-heading mb-2">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {project.description}
              </p>

              {project.metrics && (
                <div className="space-y-1.5 mb-4">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="text-xs text-emerald-900 font-mono bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg font-bold">
                      {m}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-100">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold text-[#059669] hover:text-[#047857] flex items-center gap-1 font-mono hover:underline"
                >
                  View Architecture & Stack Details →
                </button>

                {!project.isPrivate && project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#059669] hover:border-emerald-300 transition-colors"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl relative">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase text-[#059669] font-bold">
                    {selectedProject.category}
                  </span>
                  {selectedProject.isPrivate && (
                    <span className="text-[11px] font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 font-bold">
                      Commercial Codebase (Private)
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 font-heading mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 text-xs font-mono font-bold"
              >
                ✕ Close
              </button>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              {selectedProject.longDescription}
            </p>

            {selectedProject.architectureOverview && (
              <div className="space-y-3 bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200">
                <h4 className="text-xs font-mono font-bold uppercase text-emerald-900 tracking-wider flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-[#059669]" /> Architecture Overview:
                </h4>
                <div className="space-y-1.5">
                  {selectedProject.architectureOverview.map((item, idx) => (
                    <p key={idx} className="text-xs font-mono text-emerald-950 font-semibold">• {item}</p>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <h4 className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider">
                Key Technical Highlights:
              </h4>
              <div className="space-y-2">
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
              {!selectedProject.isPrivate && selectedProject.githubUrl ? (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold font-mono shadow-sm"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                </a>
              ) : (
                <span className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
                  🔒 Private Commercial Codebase (Source Available Upon Request)
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
