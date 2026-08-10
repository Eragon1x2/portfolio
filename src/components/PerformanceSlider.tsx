import React, { useState } from 'react';
import { Gauge, Zap, TrendingDown, Layers } from 'lucide-react';

export const PerformanceSlider: React.FC = () => {
  const [splitPosition, setSplitPosition] = useState<number>(50);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
        
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50/80 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono mb-2 font-semibold">
              <Zap className="w-3.5 h-3.5" />
              <span>Performance & Core Web Vitals Benchmark</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              <span className="text-gradient-indigo">43% Bundle Size Reduction</span> via Vite Code-Splitting
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              From contract experience: Refactored legacy React monolith state logic and implemented dynamic imports, Service Worker caching, and asset optimization.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-2xl border border-slate-200 shrink-0 shadow-xs">
            <div className="px-3 py-2 text-center">
              <p className="text-[10px] text-slate-500 uppercase font-mono font-bold">Lighthouse Score</p>
              <p className="text-xl font-extrabold text-emerald-600 font-mono">100 / 100</p>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div className="px-3 py-2 text-center">
              <p className="text-[10px] text-slate-500 uppercase font-mono font-bold">Bundle Saved</p>
              <p className="text-xl font-extrabold text-indigo-600 font-mono">-780 KB</p>
            </div>
          </div>
        </div>

        {/* Metrics Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>JavaScript Bundle Size</span>
              <Layers className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-sm line-through text-rose-500 font-mono">1.82 MB</span>
              <span className="text-2xl font-extrabold text-emerald-600 font-mono">1.04 MB</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden flex">
              <div className="bg-emerald-500 h-full" style={{ width: '57%' }} />
              <div className="bg-rose-400 h-full" style={{ width: '43%' }} title="-43% Saved" />
            </div>
            <p className="text-[11px] text-emerald-700 font-mono font-semibold">↓ 43% Bundle Reduction (Vite Split)</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>Largest Contentful Paint (LCP)</span>
              <Gauge className="w-4 h-4 text-amber-600" />
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-sm line-through text-amber-600 font-mono">3.85s (Slow)</span>
              <span className="text-2xl font-extrabold text-emerald-600 font-mono">1.12s (Fast)</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full" style={{ width: '29%' }} />
            </div>
            <p className="text-[11px] text-emerald-700 font-mono font-semibold">↓ 70% Faster Initial Render</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>Cumulative Layout Shift (CLS)</span>
              <TrendingDown className="w-4 h-4 text-violet-600" />
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-sm line-through text-rose-500 font-mono">0.28 (Unstable)</span>
              <span className="text-2xl font-extrabold text-emerald-600 font-mono">0.01 (Perfect)</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full" style={{ width: '5%' }} />
            </div>
            <p className="text-[11px] text-emerald-700 font-mono font-semibold">✓ Zero Layout Shift & Flicker</p>
          </div>

        </div>

        {/* Range Slider */}
        <div className="space-y-3 bg-slate-50/80 p-4 sm:p-5 rounded-2xl border border-slate-200">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-rose-600 font-bold">
              👈 Legacy Codebase State ({100 - splitPosition}%)
            </span>
            <span className="text-slate-500">Drag Slider to Compare Performance</span>
            <span className="text-emerald-700 font-bold">
              Optimized Vite Stack ({splitPosition}%) 👉
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={splitPosition}
            onChange={(e) => setSplitPosition(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />

          <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 space-y-1">
              <p className="font-bold">Legacy Monolith (Before):</p>
              <p>• Single 1.8MB JS chunk blocking initial parse</p>
              <p>• Frontend race conditions across 3000+ LOC state</p>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 space-y-1">
              <p className="font-bold">Refactored Stack (After):</p>
              <p>• Code-split routes with dynamic lazy load</p>
              <p>• Service Worker offline cache invalidation & PWA</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
