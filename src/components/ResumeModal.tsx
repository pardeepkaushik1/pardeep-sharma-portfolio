import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  FileText,
  Download,
  Printer,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Code2,
  ExternalLink
} from 'lucide-react';
import { personalInfo, technicalSkills, professionalSkills, projectsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  showToast: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  darkMode,
  showToast
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate text/markdown formatted resume blob download
    const resumeContent = `
========================================
${personalInfo.name.toUpperCase()} - ${personalInfo.role.toUpperCase()}
========================================

Contact:
- Email: ${personalInfo.contact.email}
- Phone: ${personalInfo.contact.phone}
- Location: ${personalInfo.contact.location}

Summary:
${personalInfo.about.p1}
${personalInfo.about.p2}
${personalInfo.about.p3}
${personalInfo.about.p4}

Technical Skills:
${technicalSkills.map((s) => `- ${s.name}: ${s.percentage}% proficiency`).join('\n')}

Professional Skills:
${professionalSkills.map((s) => `- ${s.name}: ${s.percentage}% (${s.description})`).join('\n')}

Projects:
${projectsData.map((p) => `
* ${p.title} (${p.category})
  URL: ${p.liveUrl}
  Details: ${p.description}
  Key Highlights:
  ${p.features.map((f) => `  - ${f}`).join('\n')}
`).join('\n')}
`;

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Pardeep-Sharma-Resume.txt`;
    link.click();
    URL.revokeObjectURL(url);
    showToast('Resume downloaded successfully!');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative max-w-3xl w-full my-8 rounded-3xl border shadow-2xl z-10 overflow-hidden bg-slate-900 border-slate-800 text-slate-100"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-[#0ef]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Curriculum Vitae (CV)</h3>
                <span className="text-xs font-mono text-cyan-400">Pardeep Sharma &bull; Frontend Developer</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                title="Print CV"
                className="p-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-300 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
              </button>
              <button
                onClick={handleDownload}
                title="Download CV"
                className="px-4 py-2.5 rounded-xl font-bold bg-[#0ef] text-[#081b29] hover:bg-cyan-300 transition-colors flex items-center gap-2 text-xs sm:text-sm cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
              <button
                onClick={onClose}
                className="p-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer ml-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto space-y-8">
            
            {/* Header info */}
            <div className="border-b border-slate-800/80 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0ef] mb-1">
                  {personalInfo.name}
                </h1>
                <p className="text-lg font-medium text-slate-300">
                  Frontend & Web Developer
                </p>
              </div>
              <div className="text-xs font-mono space-y-1 text-slate-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{personalInfo.contact.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-teal-400" />
                  <span>{personalInfo.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{personalInfo.contact.location}</span>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
                Professional Summary
              </h4>
              <p className="text-sm leading-relaxed text-slate-300">
                {personalInfo.about.p1} {personalInfo.about.p2} {personalInfo.about.p3} {personalInfo.about.p4}
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
                Technical Stack & Proficiencies
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {technicalSkills.map((t) => (
                  <div key={t.name} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex justify-between items-center text-xs font-mono">
                    <span className="font-semibold text-slate-200">{t.name}</span>
                    <span className="text-[#0ef] font-bold">{t.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Portfolio */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
                Featured Projects
              </h4>
              <div className="space-y-4">
                {projectsData.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                    <div className="flex justify-between items-center">
                      <h5 className="font-bold text-base text-white">{proj.title}</h5>
                      <span className="text-xs font-mono text-cyan-400">{proj.category}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{proj.description}</p>
                    <div className="flex items-center gap-1.5 pt-1 text-xs font-mono text-slate-300">
                      <span className="text-cyan-400">Live URL:</span>
                      <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="text-[#0ef] hover:underline flex items-center gap-1">
                        {proj.liveUrl} <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
