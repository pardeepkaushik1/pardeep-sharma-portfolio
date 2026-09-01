import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  Sparkles,
  Layers,
  Flame,
  Atom,
  Server,
  Palette,
  FileCode,
  Globe,
  Smartphone,
  GitBranch,
  Braces,
  Database,
  HardDrive,
  Boxes,
  Wrench
} from 'lucide-react';
import { technicalSkills, professionalSkills } from '../data/portfolioData';
import { Card3D } from './Card3D';

interface SkillsSectionProps {
  darkMode: boolean;
}

type TechCategory = 'all' | 'frontend' | 'backend' | 'tools';

export const SkillsSection: React.FC<SkillsSectionProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'technical' | 'professional'>('all');
  const [techFilter, setTechFilter] = useState<TechCategory>('all');

  const getTechIcon = (name: string, iconName?: string) => {
    switch (name.toLowerCase()) {
      case 'html5':
      case 'html':
        return <FileCode className="w-4 h-4 text-orange-500 flex-shrink-0" />;
      case 'css3':
      case 'css':
        return <Palette className="w-4 h-4 text-blue-500 flex-shrink-0" />;
      case 'javascript':
        return <Code2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />;
      case 'react.js':
      case 'react':
        return <Atom className="w-4 h-4 text-cyan-400 flex-shrink-0" />;
      case 'node.js & express':
      case 'node':
        return <Server className="w-4 h-4 text-emerald-500 flex-shrink-0" />;
      case 'tailwind css':
        return <Layers className="w-4 h-4 text-sky-400 flex-shrink-0" />;
      case 'vite build tool':
      case 'vite':
        return <Flame className="w-4 h-4 text-purple-400 flex-shrink-0" />;
      case 'git & github':
        return <GitBranch className="w-4 h-4 text-rose-400 flex-shrink-0" />;
      case 'rest apis':
        return <Globe className="w-4 h-4 text-emerald-400 flex-shrink-0" />;
      case 'responsive web':
        return <Smartphone className="w-4 h-4 text-teal-400 flex-shrink-0" />;
      case 'json architecture':
      case 'json':
        return <Braces className="w-4 h-4 text-amber-400 flex-shrink-0" />;
      case 'dom manipulation':
        return <Sparkles className="w-4 h-4 text-indigo-400 flex-shrink-0" />;
      case 'mongodb':
        return <Database className="w-4 h-4 text-emerald-400 flex-shrink-0" />;
      case 'sql & relational':
        return <HardDrive className="w-4 h-4 text-blue-400 flex-shrink-0" />;
      case 'async storage / cache':
        return <Boxes className="w-4 h-4 text-pink-400 flex-shrink-0" />;
      case 'postman / devtools':
        return <Wrench className="w-4 h-4 text-orange-400 flex-shrink-0" />;
      default:
        return <Code2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />;
    }
  };

  // Category counts
  const allCount = technicalSkills.length;
  const frontendCount = technicalSkills.filter((s) => s.category === 'frontend').length;
  const backendCount = technicalSkills.filter((s) => s.category === 'backend').length;
  const toolsCount = technicalSkills.filter((s) => s.category === 'tools').length;

  const filterButtons: { label: string; key: TechCategory; count: number }[] = [
    { label: 'All Tech', key: 'all', count: allCount },
    { label: 'Frontend', key: 'frontend', count: frontendCount },
    ...(backendCount > 0 ? [{ label: 'Backend', key: 'backend' as TechCategory, count: backendCount }] : []),
    { label: 'Tools', key: 'tools', count: toolsCount }
  ];

  const filteredSkills =
    techFilter === 'all'
      ? technicalSkills
      : technicalSkills.filter((s) => s.category === techFilter);

  // SVG Radial Circle Radius and Circumference
  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  return (
    <section id="skill" className="pt-12 sm:pt-16 pb-20 relative overflow-hidden scroll-mt-20" style={{ perspective: 1200 }}>
      {/* Background Accent */}
      <motion.div
        initial={{ opacity: 0, y: 70, rotateX: 10, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Skills & <span className="text-cyan-400">Capabilities</span>
          </h2>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A quantified overview of my technical stack and professional competencies.
          </p>

          {/* Filter Switcher */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-900 border border-slate-800 mt-8 gap-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'technical'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Technical Stack
            </button>
            <button
              onClick={() => setActiveTab('professional')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'professional'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Professional Skills
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* 1. Technical Skills Column */}
          {(activeTab === 'all' || activeTab === 'technical') && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={activeTab === 'technical' ? 'lg:col-span-2 max-w-4xl mx-auto w-full' : ''}
            >
              <Card3D intensity={10} className="h-full">
                <div
                  className="h-full rounded-3xl p-5 sm:p-7 border transition-all duration-300 flex flex-col justify-between bg-slate-900 border-slate-800 shadow-xl"
                >
                  {/* Header with Title & Stats Badge */}
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.2)]">
                          <Code2 className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white">
                            Technical Stack
                          </h3>
                          <p className="text-xs font-mono text-cyan-500">
                            {allCount} Production Tools & Frameworks
                          </p>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 font-semibold">
                        {filteredSkills.length} Displayed
                      </span>
                    </div>

                    {/* Filter Pills (All Tech, Frontend, Tools) */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {filterButtons.map((btn) => {
                        const isActive = techFilter === btn.key;
                        return (
                          <button
                            key={btn.key}
                            onClick={() => setTechFilter(btn.key)}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                              isActive
                                ? 'bg-cyan-400 text-slate-950 font-bold shadow-[0_0_14px_rgba(6,182,212,0.45)]'
                                : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            <span>{btn.label}</span>
                            <span
                              className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                                isActive
                                  ? 'bg-slate-950/20 text-slate-950'
                                  : 'bg-slate-800 text-cyan-400'
                              }`}
                            >
                              {btn.count}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Filtered 2-Column Progress Grid - Fully fills vertical height */}
                    <div className="flex-1 flex flex-col justify-between">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={techFilter}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.25 }}
                          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 flex-1 content-between"
                        >
                          {filteredSkills.map((skill, index) => (
                            <div
                              key={skill.name}
                              className="p-3 sm:p-3.5 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between bg-slate-950/60 border-slate-800/80 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-950/40"
                            >
                              {/* Top Row: Icon Badge, Title + Level, Percentage Pill */}
                              <div className="flex items-center justify-between gap-2 mb-2.5">
                                <div className="flex items-center gap-2.5 min-w-0">
                                  {/* Left Icon Badge */}
                                  <div
                                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center flex-shrink-0 border"
                                    style={{
                                      backgroundColor: `${skill.color}15`,
                                      borderColor: `${skill.color}40`,
                                      boxShadow: `0 0 8px ${skill.color}25`
                                    }}
                                  >
                                    {getTechIcon(skill.name, skill.icon)}
                                  </div>

                                  <div className="min-w-0">
                                    <h4 className="text-xs sm:text-sm font-bold truncate leading-tight text-slate-100">
                                      {skill.name}
                                    </h4>
                                    <span className="text-[10px] font-mono text-slate-400 block leading-tight">
                                      {skill.level || 'Advanced'}
                                    </span>
                                  </div>
                                </div>

                                {/* Right Percentage Badge */}
                                <span className="px-2 py-0.5 rounded-lg text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/25 flex-shrink-0">
                                  {skill.percentage}%
                                </span>
                              </div>

                              {/* Glowing Gradient Progress Bar */}
                              <div className="h-2 w-full bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-slate-700/60">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.percentage}%` }}
                                  transition={{
                                    duration: 0.8,
                                    delay: index * 0.04,
                                    ease: 'easeOut'
                                  }}
                                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-teal-400 to-sky-400 shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                                />
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          )}

          {/* 2. Professional Skills Column (Radial Bars from original files) */}
          {(activeTab === 'all' || activeTab === 'professional') && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={activeTab === 'professional' ? 'lg:col-span-2 max-w-4xl mx-auto w-full' : ''}
            >
              <Card3D intensity={10} className="h-full">
                <div
                  className="h-full rounded-3xl p-6 sm:p-8 border transition-all duration-300 bg-slate-900 border-slate-800 shadow-xl"
                >
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800/80">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-teal-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          Professional Skills
                        </h3>
                        <p className="text-xs font-mono text-cyan-500">Soft Skills & Methodologies</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-teal-500/10 text-teal-400 border border-teal-500/20">
                      Radial Metrics
                    </span>
                  </div>

                  {/* Radial Bars 2x2 Grid */}
                  <div className="grid grid-cols-2 gap-3.5 sm:gap-8">
                    {professionalSkills.map((skill, index) => {
                      const offset = circumference - (skill.percentage / 100) * circumference;

                      return (
                        <div
                          key={skill.name}
                          className="flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-slate-950/40 border border-slate-800/60 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 cursor-default"
                        >
                          <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center mb-2 sm:mb-3">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                              {/* Background track circle */}
                              <circle
                                cx="80"
                                cy="80"
                                r={radius}
                                stroke="currentColor"
                                strokeWidth="8"
                                className="text-slate-800/80"
                                fill="transparent"
                              />
                              {/* Animated Progress Circle */}
                              <motion.circle
                                cx="80"
                                cy="80"
                                r={radius}
                                stroke={skill.color}
                                strokeWidth="8"
                                strokeDasharray={circumference}
                                initial={{ strokeDashoffset: circumference }}
                                whileInView={{ strokeDashoffset: offset }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: index * 0.15, ease: 'easeOut' }}
                                strokeLinecap="round"
                                fill="transparent"
                                className="filter drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                              />
                            </svg>

                            {/* Percentage Center Text */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                              <span className="text-lg sm:text-2xl font-bold font-mono text-cyan-400">
                                {skill.percentage}%
                              </span>
                            </div>
                          </div>

                          <h4 className={`text-xs sm:text-base font-bold capitalize mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                            {skill.name}
                          </h4>
                          <p className={`text-[10px] sm:text-xs leading-tight ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                            {skill.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Card3D>
            </motion.div>
          )}

        </div>
      </motion.div>
    </section>
  );
};

