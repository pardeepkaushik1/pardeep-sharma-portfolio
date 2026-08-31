import React from 'react';
import { motion } from 'motion/react';
import {
  Code,
  Layout,
  Compass,
  GraduationCap,
  CheckCircle2,
  FileDown
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { Card3D } from './Card3D';

interface AboutSectionProps {
  darkMode: boolean;
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ darkMode, onOpenResume }) => {
  const highlights = [
    {
      title: 'Clean Code Focus',
      desc: 'Writing structured, semantic HTML, CSS, and modern JavaScript.',
      icon: Code,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20'
    },
    {
      title: 'Responsive & Fluid UI',
      desc: 'Optimized experiences across mobile, tablets, and desktop displays.',
      icon: Layout,
      color: 'text-teal-400',
      bg: 'bg-teal-500/10',
      border: 'border-teal-500/20'
    },
    {
      title: 'Continuous Learner',
      desc: 'Building modern web apps, mastering React, Node.js, and API architectures.',
      icon: GraduationCap,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/20'
    },
    {
      title: 'Modern Experience',
      desc: 'Passionate about turning digital ideas into pleasant interactive apps.',
      icon: Compass,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20'
    }
  ];

  return (
    <section id="about" className="pt-12 sm:pt-16 pb-20 relative overflow-hidden scroll-mt-20" style={{ perspective: 1200 }}>
      {/* Background Decorative Line */}
      <motion.div
        initial={{ opacity: 0, y: 70, rotateX: 10, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-sm sm:text-base text-cyan-500 font-mono font-medium">
            {personalInfo.about.heading}
          </p>
        </div>

        {/* Top Row: Left Profile Card & Right Bio Card with matched height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div
              className="h-full rounded-3xl p-6 sm:p-7 border flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 bg-slate-900 border-slate-800 shadow-2xl shadow-cyan-950/40 hover:border-cyan-500/50"
            >
              {/* Subtle top-right accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />

              <div className="flex flex-col relative z-10">
                {/* Avatar + Basic identity */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-1 border border-cyan-500/40 bg-slate-950 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
                    <svg viewBox="0 0 100 100" className="w-10 h-10 sm:w-12 sm:h-12 filter drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
                      <polygon
                        points="50,3 95,25 95,75 50,97 5,75 5,25"
                        fill="#071226"
                        stroke="#06b6d4"
                        strokeWidth="4"
                      />
                      <text
                        x="50"
                        y="52"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontFamily="Outfit, sans-serif"
                        fontWeight="800"
                        fontSize="46"
                        fill="#ffffff"
                      >
                        P
                      </text>
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-1">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                      <span>Pardeep Sharma</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold truncate text-white">
                      Frontend Developer
                    </h3>
                    <span className="text-xs text-emerald-400 font-mono flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active & Learning
                    </span>
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-slate-800/80">
                  <div className="p-2.5 rounded-xl border text-xs font-mono bg-slate-950/60 border-slate-800">
                    <span className="block text-slate-400">Role</span>
                    <span className="text-cyan-400 font-semibold truncate block">Frontend Developer</span>
                  </div>
                  <div className="p-2.5 rounded-xl border text-xs font-mono bg-slate-950/60 border-slate-800">
                    <span className="block text-slate-400">Specialty</span>
                    <span className="font-semibold truncate block text-slate-200">Responsive UI</span>
                  </div>
                  <div className="p-2.5 rounded-xl border text-xs font-mono bg-slate-950/60 border-slate-800">
                    <span className="block text-slate-400">Location</span>
                    <span className="font-semibold truncate block text-slate-200" title="Cheeka, Haryana, India">
                      Cheeka, Haryana, India
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl border text-xs font-mono bg-slate-950/60 border-slate-800">
                    <span className="block text-slate-400">Status</span>
                    <span className="text-emerald-400 font-semibold truncate block">Open to Work</span>
                  </div>
                </div>
              </div>

              {/* CV Button at the bottom */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 relative z-10">
                <button
                  onClick={onOpenResume}
                  className="w-full py-2.5 px-4 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/25 transition-all text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileDown className="w-4 h-4" />
                  <span>View Detailed CV / Resume</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Paragraphs */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div
              className="h-full p-6 sm:p-8 rounded-3xl border flex flex-col justify-center space-y-3.5 bg-slate-900 border-slate-800 text-slate-300 shadow-xl"
            >
              <p className="text-sm sm:text-base leading-relaxed">
                {personalInfo.about.p1}
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                {personalInfo.about.p2}
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                {personalInfo.about.p3}
              </p>
              <p className="text-sm sm:text-base leading-relaxed font-medium text-cyan-400">
                {personalInfo.about.p4}
              </p>
            </div>
          </div>

        </div>

        {/* Core Focus Pillars in 4-Column Grid below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-3.5 sm:p-4 rounded-xl border transition-all duration-300 hover:-translate-y-1 cursor-default bg-slate-900 border-slate-800 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <div className={`w-8 h-8 rounded-lg ${item.bg} ${item.border} border flex items-center justify-center shrink-0`}>
                    <Icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-white">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs leading-relaxed text-slate-400">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
