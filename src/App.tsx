import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { Projects } from './components/Projects';
import { SkillMatrix } from './components/SkillMatrix';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { Sparkles, X } from 'lucide-react';

export function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [unlockedAchievements, setUnlockedAchievements] = useState<Set<string>>(new Set());
  const [recentToast, setRecentToast] = useState<{ id: string; title: string } | null>(null);

  const handleUnlockAchievement = (id: string, title: string) => {
    if (!unlockedAchievements.has(id)) {
      const nextSet = new Set(unlockedAchievements);
      nextSet.add(id);
      setUnlockedAchievements(nextSet);

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#48e5a3', '#34d399', '#059669']
        });
      } catch (e) {
        // Fallback
      }

      setRecentToast({ id, title });
      setTimeout(() => setRecentToast(null), 4500);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#48e5a3] selection:text-slate-950 light-grid-pattern relative">
      <Navbar
        onOpenCvModal={() => setCvModalOpen(true)}
        unlockedAchievementsCount={unlockedAchievements.size}
      />

      <main className="space-y-6">
        <Hero
          onUnlockAchievement={handleUnlockAchievement}
          onOpenCvModal={() => setCvModalOpen(true)}
        />
        <Highlights />
        <Projects />
        <SkillMatrix />
        <Experience />
        <Contact />
      </main>

      <Footer />

      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      {recentToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-white border-2 border-emerald-300 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce max-w-sm">
          <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800">
            <Sparkles className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <p className="text-[10px] uppercase font-mono text-emerald-800 font-bold">
              🏆 Achievement Unlocked!
            </p>
            <p className="text-xs font-bold text-slate-900">
              {recentToast.title}
            </p>
          </div>
          <button
            onClick={() => setRecentToast(null)}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 ml-auto"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
