import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, RefreshCw, Zap } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface TerminalProps {
  onUnlockAchievement: (id: string, title: string) => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
  type: 'cmd' | 'output' | 'error' | 'success';
}

export const Terminal: React.FC<TerminalProps> = ({ onUnlockAchievement }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'system-init',
      type: 'output',
      output: (
        <div className="space-y-1 text-slate-200">
          <p className="text-[#48e5a3] font-bold">⚡ HOHA_OS v2.6.0 (x86_64-apple-darwin)</p>
          <p className="text-xs text-slate-400">Type <span className="text-[#48e5a3] font-mono font-bold">help</span> or click command shortcuts below to explore profile.</p>
        </div>
      )
    }
  ]);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleRunCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    const newLogs: CommandLog[] = [
      ...history,
      {
        id: Math.random().toString(),
        command: cmdStr,
        type: 'cmd',
        output: null
      }
    ];

    let responseNode: React.ReactNode = null;
    let type: CommandLog['type'] = 'output';

    switch (trimmed) {
      case 'help':
        responseNode = (
          <div className="space-y-1 text-xs">
            <p className="text-[#48e5a3] font-bold">Available Commands:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-1">
              <div><span className="text-[#48e5a3] font-mono font-bold">about</span> — Bio & Status</div>
              <div><span className="text-[#48e5a3] font-mono font-bold">skills</span> — Tech Stack</div>
              <div><span className="text-[#48e5a3] font-mono font-bold">projects</span> — Repositories</div>
              <div><span className="text-[#48e5a3] font-mono font-bold">contact</span> — Email, Phone</div>
              <div><span className="text-[#48e5a3] font-mono font-bold">clear</span> — Clear terminal</div>
              <div><span className="text-[#48e5a3] font-mono font-bold">cursor</span> — AI workflow</div>
              <div><span className="text-[#48e5a3] font-mono font-bold">sudo</span> — Superuser mode</div>
            </div>
          </div>
        );
        break;

      case 'about':
        responseNode = (
          <div className="space-y-1.5 text-xs text-slate-200">
            <p className="text-[#48e5a3] font-bold">{PERSONAL_INFO.name} ({PERSONAL_INFO.nameRu})</p>
            <p>{PERSONAL_INFO.bio}</p>
            <p className="text-slate-400">🎓 Degree: {PERSONAL_INFO.degree} @ {PERSONAL_INFO.university}</p>
            <p className="text-slate-400">📍 Location: {PERSONAL_INFO.location}</p>
          </div>
        );
        break;

      case 'skills':
        responseNode = (
          <div className="space-y-1 text-xs">
            <p className="text-[#48e5a3] font-bold">CORE TECH STACK:</p>
            <p><span className="text-[#48e5a3] font-semibold">Frontend:</span> React, TypeScript, Next.js, TanStack, Zustand/Redux, Tailwind CSS</p>
            <p><span className="text-cyan-400 font-semibold">Backend:</span> FastAPI (Python), Node.js, PostgreSQL, Supabase, MongoDB</p>
            <p><span className="text-amber-400 font-semibold">DevOps & AI:</span> Vite code-splitting, Docker, GitHub Actions, Linux, Cursor AI</p>
          </div>
        );
        break;

      case 'projects':
        responseNode = (
          <div className="space-y-1 text-xs">
            <p className="text-[#48e5a3] font-bold">FEATURED REPOSITORIES:</p>
            {PROJECTS.map(p => (
              <div key={p.id} className="border-l-2 border-[#48e5a3]/60 pl-2 my-1">
                <p className="text-[#48e5a3] font-semibold">{p.title} <span className="text-slate-500">[{p.category}]</span></p>
                <p className="text-slate-400">{p.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        responseNode = (
          <div className="space-y-1 text-xs text-slate-200">
            <p className="text-[#48e5a3] font-bold">GET IN TOUCH:</p>
            <p>📧 Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#48e5a3] underline">{PERSONAL_INFO.email}</a></p>
            <p>📱 Phone: <span className="text-[#48e5a3] font-mono">{PERSONAL_INFO.phone}</span></p>
            <p>🐙 GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-[#48e5a3] underline">{PERSONAL_INFO.github}</a></p>
            <p>💼 LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-[#48e5a3] underline">{PERSONAL_INFO.linkedin}</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'cursor':
        onUnlockAchievement('cursor-master', 'AI-Augmented Dev Badge');
        responseNode = (
          <div className="p-2 rounded bg-emerald-950/60 border border-[#48e5a3]/40 text-xs space-y-1">
            <p className="text-[#48e5a3] font-bold flex items-center gap-1">
              <Zap className="w-4 h-4 text-[#48e5a3]" /> CURSOR AI WORKFLOW ACCELERATOR
            </p>
            <p className="text-slate-200">Leveraging AI-assisted development workflows to accelerate feature delivery, automate code refactoring, and build clean architecture in record time.</p>
            <p className="text-[#48e5a3] font-mono">🏆 Achievement Unlocked: AI-Augmented Dev!</p>
          </div>
        );
        break;

      case 'sudo':
        onUnlockAchievement('hacker-root', 'Root Access Granted Badge');
        responseNode = (
          <div className="p-2 rounded bg-emerald-950/60 border border-[#48e5a3]/40 text-xs space-y-1">
            <p className="text-[#48e5a3] font-bold">root@hoha-dev:~# Access Granted!</p>
            <p className="text-slate-200">Welcome, Admin. You have unlocked superuser privileges!</p>
            <p className="text-[#48e5a3] font-mono">🏆 Achievement Unlocked: Root Master!</p>
          </div>
        );
        break;

      default:
        type = 'error';
        responseNode = (
          <p className="text-rose-400 text-xs">
            Command not recognized: '<span className="font-mono">{cmdStr}</span>'. Type <span className="text-[#48e5a3] font-mono">help</span> for command list.
          </p>
        );
    }

    newLogs.push({
      id: Math.random().toString(),
      command: cmdStr,
      type,
      output: responseNode
    });

    setHistory(newLogs);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleRunCommand(input);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl bg-slate-900 border border-slate-700 shadow-xl overflow-hidden font-mono text-sm">
      <div className="bg-slate-800 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500 cursor-pointer hover:opacity-80" onClick={() => setHistory([])} title="Clear terminal" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-[#48e5a3]" />
          <span className="ml-2 text-xs text-slate-300 flex items-center gap-1.5 font-sans font-medium">
            <TerminalIcon className="w-3.5 h-3.5 text-[#48e5a3]" />
            yevhen@hoha-dev: ~ (zsh)
          </span>
        </div>

        <button
          onClick={() => setHistory([])}
          className="p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-700 transition-colors"
          title="Reset Terminal"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>

      <div ref={containerRef} className="p-4 sm:p-5 h-64 sm:h-72 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-slate-700 text-slate-100">
        {history.map((log) => (
          <div key={log.id} className="space-y-1">
            {log.type === 'cmd' && (
              <div className="flex items-center gap-2 text-[#48e5a3]">
                <span className="text-slate-400">yevhen@hoha-dev:~$</span>
                <span className="text-white font-semibold">{log.command}</span>
              </div>
            )}
            {log.output && (
              <div className="pl-4 border-l border-slate-700/80 py-0.5">
                {log.output}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="px-4 py-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
        <span className="text-[#48e5a3] font-bold shrink-0">yevhen@hoha-dev:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type command ('help', 'skills', 'projects', 'about')..."
          className="flex-1 bg-transparent text-white placeholder-slate-500 focus:outline-none text-xs sm:text-sm"
        />
        <button
          onClick={() => handleRunCommand(input)}
          className="px-3.5 py-1 rounded-lg bg-[#48e5a3] hover:bg-[#32d993] text-slate-950 text-xs flex items-center gap-1 transition-colors font-sans font-extrabold shadow-sm"
        >
          <Play className="w-3 h-3 fill-current" />
          <span>Run</span>
        </button>
      </div>

      <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-900 flex items-center gap-2 overflow-x-auto text-xs">
        <span className="text-slate-500 shrink-0 text-[11px]">Quick Run:</span>
        {['help', 'about', 'skills', 'projects', 'contact', 'cursor', 'sudo'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleRunCommand(cmd)}
            className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-[#48e5a3] transition-colors shrink-0 text-[11px]"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
};
