import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    
    setIsSubmitting(true);

    const apiKey = import.meta.env.VITE_WEB3FORMS_KEY || '1e917c28-26d1-4989-8e02-2f1d6b83d78e';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: apiKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Contact Message from ${formData.name}`
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`Portfolio Message from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoUrl;
      }
    } catch (err) {
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`Portfolio Message from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoUrl;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-mono font-bold">
          <Mail className="w-3.5 h-3.5 text-[#059669]" />
          <span>Let's Build Something Great Together</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
          Get In <span className="text-gradient-mint">Touch</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Available for Full-Stack Freelance projects, contracting, or consulting (Remote / Romania).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 font-heading">
              Direct Contact Details
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Feel free to reach out via email, phone, or LinkedIn. I typically respond within 2-4 hours.
            </p>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between group hover:border-[#48e5a3] transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-900 border border-emerald-200">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-500 font-bold">Email Address</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-bold text-slate-900 hover:text-[#059669]">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
                title="Copy email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-[#059669]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between group hover:border-[#48e5a3] transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-900 border border-emerald-200">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-500 font-bold">Phone / Telegram</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 font-mono">
                    {PERSONAL_INFO.phone}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
                title="Copy phone"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-[#059669]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-900 border border-emerald-200">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-slate-500 font-bold">Current Location</p>
                <p className="text-xs sm:text-sm font-bold text-slate-900">
                  {PERSONAL_INFO.location}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors font-mono shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors font-mono shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-xl font-bold text-slate-900 font-heading flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#059669]" />
            Send a Direct Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-600 font-bold">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Alex Rivera"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#48e5a3] focus:bg-white transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-600 font-bold">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#48e5a3] focus:bg-white transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-slate-600 font-bold">Message / Opportunity Details</label>
              <textarea
                required
                rows={4}
                placeholder="Hi Yevhen, we are looking for a Full-Stack Engineer specializing in React and FastAPI..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#48e5a3] focus:bg-white transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || submitted}
              className="w-full py-3.5 px-6 rounded-xl bg-[#48e5a3] hover:bg-[#32d993] text-slate-950 font-extrabold text-xs shadow-md shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  <span>Sending Message to Gmail...</span>
                </>
              ) : submitted ? (
                <>
                  <Check className="w-4 h-4 text-slate-950" />
                  <span>Message Sent Successfully to Gmail!</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
