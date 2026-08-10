import React from 'react';
import { Cpu, Layout, Server, ShieldCheck, Globe, Code } from 'lucide-react';
import { SKILL_CATEGORIES, PERSONAL_INFO } from '../data/portfolioData';

export const SkillMatrix: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-5 h-5 text-[#059669]" />;
      case 'Server': return <Server className="w-5 h-5 text-[#0d9488]" />;
      case 'ShieldAlert': return <ShieldCheck className="w-5 h-5 text-[#10b981]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#059669]" />;
      default: return <Code className="w-5 h-5 text-[#059669]" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-mono font-bold">
          <Cpu className="w-3.5 h-3.5 text-[#059669]" />
          <span>Technical Skill Matrix</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
          Technical <span className="text-gradient-mint">Skills & Stack</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Full-Stack web engineering paired with performance optimization & security hardening.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.category}
            className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="p-2.5 rounded-2xl bg-emerald-50 border border-emerald-200">
                {getIcon(cat.iconName)}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  {cat.category}
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  {cat.skills.filter(s => s.highlight).map(s => s.name).join(' • ')}
                </p>
              </div>
            </div>

            <div className="space-y-3.5">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className={`font-bold ${skill.highlight ? 'text-[#059669]' : 'text-slate-700'}`}>
                      {skill.name} {skill.highlight && <span className="text-[#059669] text-[10px]">★ Core</span>}
                    </span>
                    <span className="text-slate-500 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${
                        skill.highlight
                          ? 'bg-gradient-to-r from-[#48e5a3] to-[#10b981] shadow-xs'
                          : 'bg-slate-400'
                      }`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="w-5 h-5 text-[#059669]" />
          <h3 className="text-lg font-bold text-slate-900 font-heading">Languages & Global Communication</h3>
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
              <ShieldCheck className="w-4 h-4 text-[#059669]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
