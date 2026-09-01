import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Download,
  Printer,
  Mail,
  Phone,
  MapPin,
  Github,
  Code,
  Smartphone,
  Sparkles,
  GraduationCap,
  Briefcase,
  Layers,
  Wrench,
  Cloud,
  CheckCircle2,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  showToast: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  showToast
}) => {
  const resumeRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    window.print();
    showToast('Choose "Save as PDF" to download the resume');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto print:p-0 print:m-0 print:overflow-visible">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md print:hidden"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative max-w-4xl w-full my-4 sm:my-8 rounded-3xl border shadow-2xl z-10 overflow-hidden bg-slate-900 border-slate-700 text-slate-100 print:max-w-none print:w-full print:my-0 print:border-none print:shadow-none print:rounded-none print:bg-white print:text-black"
        >
          {/* Header Action Bar (Hidden during print) */}
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-950/60 print:hidden">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-[#0ef]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">Pardeep Sharma - Resume (CV)</h3>
                <span className="text-xs font-mono text-cyan-400">Web Developer &bull; Ready to Download / Print</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                title="Print CV"
                className="p-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-300 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-medium"
              >
                <Printer className="w-4 h-4 text-cyan-400" />
                <span className="hidden sm:inline">Print</span>
              </button>
              <button
                onClick={handleDownload}
                title="Save / Download as PDF"
                className="px-4 py-2.5 rounded-xl font-bold bg-[#0ef] text-[#081b29] hover:bg-cyan-300 transition-colors flex items-center gap-2 text-xs sm:text-sm cursor-pointer shadow-md shadow-cyan-500/20"
              >
                <Download className="w-4 h-4" />
                <span>Save as PDF</span>
              </button>
              <button
                onClick={onClose}
                aria-label="Close CV Modal"
                className="p-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer ml-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Document Wrapper */}
          <div className="p-3 sm:p-6 md:p-8 max-h-[80vh] overflow-y-auto bg-slate-950/40 print:p-0 print:max-h-none print:overflow-visible">
            
            {/* The Actual PDF Document Card (Exact Replica of User's Resume) */}
            <div
              ref={resumeRef}
              id="pardeep-resume-pdf-doc"
              className="bg-white text-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-200 grid grid-cols-1 md:grid-cols-12 min-h-[950px] font-sans print:shadow-none print:border-none print:rounded-none"
            >
              
              {/* LEFT SIDEBAR (Dark Navy Background) */}
              <div className="md:col-span-4 bg-[#081b29] text-white p-6 sm:p-7 flex flex-col justify-between space-y-6">
                <div className="space-y-6">
                  {/* Name & Title */}
                  <div className="border-b border-slate-700 pb-5">
                    <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase leading-none">
                      PARDEEP<br />
                      <span className="text-[#00eeff]">SHARMA</span>
                    </h1>
                    <div className="mt-2.5 inline-block px-3 py-1 rounded-md bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest">
                      WEB DEVELOPER
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 text-xs text-slate-200">
                    <a
                      href="tel:+918930880776"
                      className="flex items-center gap-3 p-2 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-[#0ef] shrink-0">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-mono text-[11px] group-hover:text-cyan-300 truncate">+91-8930880776</span>
                    </a>

                    <a
                      href="mailto:pardeepkaushik80776@gmail.com"
                      className="flex items-center gap-3 p-2 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-[#0ef] shrink-0">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-mono text-[11px] group-hover:text-cyan-300 truncate">pardeepkaushik80776@gmail.com</span>
                    </a>

                    <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200">
                      <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-[#0ef] shrink-0">
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[11px]">Cheeka, Haryana, India</span>
                    </div>

                    <a
                      href="https://github.com/pardeepkaushik1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-2 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-[#0ef] shrink-0">
                        <Github className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-mono text-[11px] group-hover:text-cyan-300 truncate">github.com/pardeepkaushik1</span>
                    </a>
                  </div>

                  {/* Core Strengths */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                      <Sparkles className="w-4 h-4" />
                      <span>CORE STRENGTHS</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {[
                        'Problem Solving',
                        'Self Learning',
                        'REST API Integration',
                        'Database Management',
                        'Responsive UI Development',
                        'Web Development',
                        'Team Collaboration',
                        'Continuous Learning'
                      ].map((strength) => (
                        <li key={strength} className="flex items-center gap-2">
                          <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Education */}
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                      <GraduationCap className="w-4 h-4" />
                      <span>EDUCATION</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xs sm:text-sm">Bachelor of Commerce (B.Com)</h4>
                      <p className="text-slate-300 text-xs mt-0.5">KUK (Kurukshetra University)</p>
                      <div className="inline-block mt-1.5 px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[10px] font-bold">
                        2022 – 2025
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Visual Tag */}
                <div className="pt-4 border-t border-slate-800/80 text-center">
                  <div className="text-xl font-serif italic text-cyan-400 tracking-wide">
                    Build Better Web
                  </div>
                  <div className="text-cyan-500/50 font-mono text-xs mt-0.5">&lt;/&gt;</div>
                </div>
              </div>

              {/* RIGHT MAIN CONTENT AREA (Clean White/Modern Card) */}
              <div className="md:col-span-8 p-6 sm:p-8 space-y-6 bg-[#fcfdfe] text-slate-800 flex flex-col justify-between">
                <div className="space-y-5">
                  
                  {/* PROFESSIONAL SUMMARY */}
                  <div>
                    <div className="flex items-center gap-2.5 text-blue-900 font-bold text-sm uppercase tracking-wide mb-2">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                        👤
                      </div>
                      <span className="text-base font-extrabold text-slate-900">PROFESSIONAL SUMMARY</span>
                    </div>
                    <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 pl-8 text-justify">
                      Motivated and detail-oriented <span className="font-semibold text-slate-900">Web Developer</span> with a strong passion for building responsive and user-friendly web applications. Skilled in front-end and back-end technologies, with hands-on experience in modern frameworks and tools. Eager to learn, grow and contribute to real-world projects while continuously improving my technical and problem-solving skills.
                    </p>
                  </div>

                  {/* PROFESSIONAL HIGHLIGHTS */}
                  <div>
                    <div className="flex items-center gap-2.5 text-blue-900 font-bold text-sm uppercase tracking-wide mb-2.5">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                        ⭐
                      </div>
                      <span className="text-base font-extrabold text-slate-900">PROFESSIONAL HIGHLIGHTS</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 pl-8">
                      <div className="p-3 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-sm shrink-0 shadow-sm">
                          &lt;/&gt;
                        </div>
                        <div>
                          <div className="text-lg font-extrabold text-blue-900 leading-none">10+</div>
                          <div className="text-[10px] font-bold text-slate-600 uppercase tracking-tight mt-0.5">
                            PROJECTS & PRACTICE WEBSITES
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded-2xl bg-purple-50/70 border border-purple-200/80 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-mono font-bold text-sm shrink-0 shadow-sm">
                          <Smartphone className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-lg font-extrabold text-purple-900 leading-none">100%</div>
                          <div className="text-[10px] font-bold text-slate-600 uppercase tracking-tight mt-0.5">
                            RESPONSIVE UI DESIGN
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* PROFESSIONAL EXPERIENCE */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5 text-blue-900 font-bold text-sm uppercase tracking-wide">
                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                          💼
                        </div>
                        <span className="text-base font-extrabold text-slate-900">PROFESSIONAL EXPERIENCE</span>
                      </div>
                      <span className="text-[11px] font-semibold text-blue-600 italic">(Looking for Opportunities)</span>
                    </div>
                    
                    <div className="pl-8 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block"></span>
                        <h4 className="text-sm font-bold text-slate-900">Fresher</h4>
                      </div>
                      <p className="text-xs font-semibold text-slate-600 pl-4.5">
                        Web Developer | Self Learner
                      </p>

                      <ul className="space-y-1.5 text-xs text-slate-700 pl-5 list-disc leading-relaxed">
                        <li>Built multiple responsive web applications using HTML, CSS, JavaScript and modern frameworks.</li>
                        <li>Developed and practiced REST API integration using JavaScript.</li>
                        <li>Worked on real-time projects including a movie search app, to-do app, weather app and more to strengthen my development skills.</li>
                        <li>Gained hands-on experience with Git &amp; GitHub for version control and collaborative development.</li>
                        <li>Continuously learning and exploring new technologies to improve my development skills and build real-world projects.</li>
                      </ul>
                    </div>
                  </div>

                  {/* TECHNICAL SKILLS */}
                  <div>
                    <div className="flex items-center gap-2.5 text-blue-900 font-bold text-sm uppercase tracking-wide mb-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                        ⚙️
                      </div>
                      <span className="text-base font-extrabold text-slate-900">TECHNICAL SKILLS</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-8">
                      {/* Frontend */}
                      <div className="p-3 rounded-xl bg-sky-50/60 border border-sky-200">
                        <div className="flex items-center gap-2 text-sky-800 font-bold text-xs mb-1.5">
                          <Code className="w-4 h-4 text-sky-600" />
                          <span className="uppercase tracking-wider">FRONTEND</span>
                        </div>
                        <p className="text-[11px] text-slate-700 leading-snug">
                          HTML5 &bull; CSS3 &bull; JavaScript<br />
                          React.js &bull; Tailwind CSS<br />
                          Bootstrap &bull; Responsive Design
                        </p>
                      </div>

                      {/* Tools & Others */}
                      <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200">
                        <div className="flex items-center gap-2 text-rose-800 font-bold text-xs mb-1.5">
                          <Wrench className="w-4 h-4 text-rose-600" />
                          <span className="uppercase tracking-wider">TOOLS &amp; OTHERS</span>
                        </div>
                        <p className="text-[11px] text-slate-700 leading-snug">
                          Git &bull; GitHub &bull; VS Code<br />
                          Postman &bull; Composer<br />
                          XAMPP &bull; Vercel &bull; Netlify
                        </p>
                      </div>

                      {/* Deployment & Cloud */}
                      <div className="p-3 rounded-xl bg-teal-50/60 border border-teal-200">
                        <div className="flex items-center gap-2 text-teal-800 font-bold text-xs mb-1.5">
                          <Cloud className="w-4 h-4 text-teal-600" />
                          <span className="uppercase tracking-wider">DEPLOYMENT &amp; CLOUD</span>
                        </div>
                        <p className="text-[11px] text-slate-700 leading-snug">
                          Vercel &bull; Netlify<br />
                          AWS (Basics) &bull; Hostinger<br />
                          Cloudinary
                        </p>
                      </div>

                      {/* Other Skills */}
                      <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200">
                        <div className="flex items-center gap-2 text-amber-800 font-bold text-xs mb-1.5">
                          <Sparkles className="w-4 h-4 text-amber-600" />
                          <span className="uppercase tracking-wider">OTHER SKILLS</span>
                        </div>
                        <p className="text-[11px] text-slate-700 leading-snug">
                          Problem Solving<br />
                          Communication<br />
                          Time Management &bull; Team Collaboration
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Footer note on document */}
                <div className="pt-3 border-t border-slate-200 text-center text-[10px] text-slate-500 font-mono">
                  Portfolio: pardeepkaushik.netlify.app &bull; Pardeep Sharma
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

