import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  Globe,
  Calendar,
  Film,
  CloudSun,
  ShoppingCart,
  NotebookPen,
  X,
  CheckCircle2,
  ArrowUpRight,
  Code2
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { Card3D } from './Card3D';

interface ProjectsSectionProps {
  darkMode: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'Calendar':
        return <Calendar className="w-6 h-6 text-amber-400" />;
      case 'Film':
        return <Film className="w-6 h-6 text-rose-400" />;
      case 'CloudSun':
        return <CloudSun className="w-6 h-6 text-sky-400" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-6 h-6 text-amber-400" />;
      case 'NotebookPen':
        return <NotebookPen className="w-6 h-6 text-emerald-400" />;
      default:
        return <Code2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="project" className="pt-12 sm:pt-16 pb-20 relative overflow-hidden scroll-mt-20" style={{ perspective: 1200 }}>
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 70, rotateX: 10, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Latest <span className="text-cyan-400">Projects</span>
          </h2>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Real-world applications built with clean code, responsive layouts, and interactive user experiences.
          </p>
        </div>

        {/* 2x2 Responsive 3D Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card3D intensity={12} className="h-full">
                <div
                  className="h-full rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 bg-slate-900 border-slate-800 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-950/40"
                >
                  {/* Top Preview Banner with Interactive Tech Mockup */}
                  <div className={`relative p-7 bg-gradient-to-br ${project.gradient} border-b border-slate-800/80`}>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-slate-950/80 border border-cyan-500/30 flex items-center justify-center shadow-lg">
                          {getProjectIcon(project.iconName)}
                        </div>
                        <div>
                          <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                            {project.category}
                          </span>
                          <h3 className="text-2xl font-bold mt-1 text-white">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {/* Live Launch Button */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} live website`}
                        className="w-10 h-10 rounded-xl bg-cyan-500 text-slate-950 flex items-center justify-center shadow-md shadow-cyan-500/30 hover:scale-110 active:scale-95 transition-transform"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-950/70 border border-slate-800 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Body Content with exact user text */}
                  <div className="p-7 flex flex-col justify-between flex-1">
                    <p className="text-sm sm:text-base leading-relaxed mb-6 text-slate-300">
                      {project.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 mb-6">
                      {project.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span className="text-slate-300">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-4 rounded-xl font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 text-center text-sm transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/20"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="py-2.5 px-4 rounded-xl border border-slate-700 hover:bg-slate-800 text-sm font-medium transition-colors cursor-pointer text-slate-300"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`relative max-w-2xl w-full rounded-3xl p-6 sm:p-8 border shadow-2xl z-10 max-h-[90vh] overflow-y-auto ${
                darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  {getProjectIcon(selectedProject.iconName)}
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/15">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold mt-1">{selectedProject.title}</h3>
                </div>
              </div>

              <p className={`text-base leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3 font-mono">
                  Key Architectural Highlights:
                </h4>
                <div className="space-y-3">
                  {selectedProject.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3 font-mono">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Live Link Bar */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
                <div className="text-xs font-mono text-slate-400 truncate w-full sm:w-auto">
                  <span className="text-cyan-400">URL:</span> {selectedProject.liveUrl}
                </div>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 text-xs sm:text-sm font-mono flex items-center justify-center gap-1.5 shrink-0"
                >
                  <span>Launch Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-sm font-medium transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
