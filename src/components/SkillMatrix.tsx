import React from 'react';
import { Cpu, Layout, Server, ShieldCheck, Zap, Globe, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES, PERSONAL_INFO } from '../data/portfolioData';

export const SkillMatrix: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-5 h-5 text-[#059669]" />;
      case 'Server': return <Server className="w-5 h-5 text-[#0d9488]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#10b981]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#059669]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#059669]" />;
      default: return <Cpu className="w-5 h-5 text-[#059669]" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-mono font-bold">
          <Cpu className="w-3.5 h-3.5 text-[#059669]" />
          <span>Technical Skills & Core Stack</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
          Skills & <span className="text-gradient-mint">Technologies</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Focused technical skill set across Frontend, Backend, Performance optimization, and Web Security.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.category}
            className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-[#48e5a3] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-emerald-50 border border-emerald-200">
                  {getIcon(cat.iconName)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  {cat.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`text-xs font-mono px-3 py-1.5 rounded-xl border transition-all ${
                      skill.highlight
                        ? 'bg-emerald-50 text-emerald-950 border-emerald-300 font-extrabold shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 font-medium'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Languages Strip */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="w-5 h-5 text-[#059669]" />
          <h3 className="text-lg font-bold text-slate-900 font-heading">Languages & Communication</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PERSONAL_INFO.languages.map((lang) => (
            <div
              key={lang.name}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between font-mono text-xs"
            >
              <div>
                <p className="font-bold text-slate-900">{lang.name}</p>
                <p className="text-[#059669] text-[11px] font-bold mt-0.5">{lang.level}</p>
              </div>
              <CheckCircle2 className="w-4 h-4 text-[#059669]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
