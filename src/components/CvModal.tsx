import React, { useState } from 'react';
import { Printer, Copy, Check, FileText, X } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyCvText = () => {
    const text = `
${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

SUMMARY:
${PERSONAL_INFO.bio}

EXPERIENCE:
${EXPERIENCES.map(e => `${e.role} @ ${e.company} (${e.period})\n- ${e.bullets.join('\n- ')}`).join('\n\n')}

EDUCATION:
${PERSONAL_INFO.degree} — ${PERSONAL_INFO.university} (2023 - Present)
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl relative">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#059669]" />
            <h3 className="text-xl font-extrabold text-slate-900 font-heading">
              Resume Preview — {PERSONAL_INFO.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCvText}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-[#059669] text-xs font-mono font-bold flex items-center gap-1.5"
            >
              {copied ? <Check className="w-4 h-4 text-[#059669]" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-[#059669] text-xs font-mono font-bold flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 text-xs font-mono font-bold"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6 font-sans text-slate-800">
          <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-heading">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-mono text-[#059669] uppercase font-extrabold mt-1">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs text-slate-600 mt-2 max-w-xl">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            <div className="text-xs font-mono text-slate-600 space-y-1 sm:text-right shrink-0">
              <p>📍 {PERSONAL_INFO.location}</p>
              <p>📧 {PERSONAL_INFO.email}</p>
              <p>📱 {PERSONAL_INFO.phone}</p>
              <p>🐙 github.com/Eragon1x2</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-mono font-bold uppercase text-[#059669] tracking-wider">
              Professional Experience
            </h2>

            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="space-y-2 border-l-2 border-slate-300 pl-4 py-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900">
                    {exp.role} — <span className="text-[#059669]">{exp.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-slate-500 font-bold">{exp.period}</span>
                </div>
                <div className="space-y-1">
                  {exp.bullets.map((b, bIdx) => (
                    <p key={bIdx} className="text-xs text-slate-700">• {b}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
            <div className="space-y-2">
              <h2 className="text-sm font-mono font-bold uppercase text-[#059669] tracking-wider">
                Education
              </h2>
              <p className="text-xs font-bold text-slate-900">{PERSONAL_INFO.university}</p>
              <p className="text-xs text-slate-700">Degree: {PERSONAL_INFO.degree}</p>
              <p className="text-xs text-slate-500 font-mono font-bold">2023 – Present</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm font-mono font-bold uppercase text-[#059669] tracking-wider">
                Languages
              </h2>
              {PERSONAL_INFO.languages.map(l => (
                <p key={l.name} className="text-xs text-slate-700 font-mono">
                  {l.name}: <span className="text-[#059669] font-bold">{l.level}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
