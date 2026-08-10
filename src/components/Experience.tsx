import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap } from 'lucide-react';
import { EXPERIENCES, PERSONAL_INFO } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-mono font-bold">
          <Briefcase className="w-3.5 h-3.5 text-[#059669]" />
          <span>Track Record & Milestones</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
          Professional <span className="text-gradient-mint">Experience</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Proven history of delivering high-performance features, securing web infrastructure, and solving complex technical debt.
        </p>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-slate-200">
        
        {/* Education Item at Top */}
        <div className="relative flex flex-col sm:flex-row items-start group">
          <div className="sm:w-1/2 sm:pr-8 sm:text-right mb-4 sm:mb-0">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold inline-flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#059669]" /> 2023 – Present
            </span>
            <h3 className="text-xl font-bold text-slate-900 font-heading mt-2">
              {PERSONAL_INFO.university}
            </h3>
            <p className="text-xs text-[#059669] font-mono font-bold">
              Bachelor's Degree in Cybersecurity
            </p>
          </div>

          <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#059669] border-4 border-white flex items-center justify-center text-white shadow-md">
            <GraduationCap className="w-4 h-4" />
          </div>

          <div className="sm:w-1/2 sm:pl-8 pl-12">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs text-slate-700 space-y-2">
              <p className="font-bold text-slate-900">Focused Study & Practical Research:</p>
              <p>• Web Application Penetration Testing & OWASP Vulnerabilities</p>
              <p>• Applied Cryptography & JWT authentication hardening</p>
              <p>• Network Protocol Security & Threat Modeling</p>
            </div>
          </div>
        </div>

        {/* Experience Roles */}
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative flex flex-col sm:flex-row items-start group">
            
            <div className={`sm:w-1/2 mb-4 sm:mb-0 ${idx % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:order-2 sm:pl-8'}`}>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 font-extrabold inline-flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#059669]" /> {exp.period}
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 font-heading mt-2">
                {exp.role}
              </h3>
              <p className="text-xs text-[#059669] font-mono font-bold flex items-center gap-1 sm:justify-end">
                <span>{exp.company}</span>
                <span>•</span>
                <span className="flex items-center gap-0.5 text-slate-500 font-medium">
                  <MapPin className="w-3 h-3" /> {exp.location}
                </span>
              </p>
            </div>

            <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#48e5a3] border-4 border-white flex items-center justify-center text-slate-950 shadow-md group-hover:scale-110 transition-transform">
              <Briefcase className="w-4 h-4" />
            </div>

            <div className={`sm:w-1/2 pl-12 ${idx % 2 === 0 ? 'sm:pl-8' : 'sm:order-1 sm:pr-8 sm:pl-0 sm:text-right'}`}>
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 text-left">
                <div className="space-y-2">
                  {exp.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};
