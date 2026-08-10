import React from 'react';
import { Zap, Layers, ShieldCheck, Award } from 'lucide-react';
import { HIGHLIGHT_STATS, HIGHLIGHT_ITEMS } from '../data/portfolioData';

export const Highlights: React.FC = () => {
  const getIcon = (cat: string) => {
    switch (cat) {
      case 'Performance': return <Zap className="w-5 h-5 text-[#059669]" />;
      case 'Architecture': return <Layers className="w-5 h-5 text-[#0d9488]" />;
      case 'Security': return <ShieldCheck className="w-5 h-5 text-[#10b981]" />;
      default: return <Award className="w-5 h-5 text-[#059669]" />;
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Stat Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {HIGHLIGHT_STATS.map((stat, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-white border border-slate-200 text-center space-y-1 shadow-sm hover:border-[#48e5a3] transition-all"
          >
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              <span className="text-gradient-mint">{stat.value}</span>
            </p>
            <p className="text-xs text-slate-600 font-mono font-bold">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Highlight Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {HIGHLIGHT_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200">
                  {getIcon(item.category)}
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  {item.category}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
