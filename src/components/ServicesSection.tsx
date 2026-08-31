import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code,
  Palette,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  X
} from 'lucide-react';
import { servicesData } from '../data/portfolioData';
import { Service } from '../types';
import { Card3D } from './Card3D';

interface ServicesSectionProps {
  darkMode: boolean;
  onContactClick: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  darkMode,
  onContactClick
}) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-8 h-8 text-cyan-400" />;
      case 'Palette':
        return <Palette className="w-8 h-8 text-teal-400" />;
      case 'Smartphone':
        return <Smartphone className="w-8 h-8 text-sky-400" />;
      default:
        return <Code className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="pt-12 sm:pt-16 pb-20 relative overflow-hidden scroll-mt-20" style={{ perspective: 1200 }}>
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

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
            My <span className="text-cyan-400">Expertise</span>
          </h2>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Crafting tailored, high-performance web solutions with attention to detail and clean architecture.
          </p>
        </div>

        {/* 3D Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="h-full flex flex-col"
            >
              <Card3D intensity={12} className="h-full w-full">
                <div
                  className="h-full rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 bg-slate-900 border-slate-800 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-950/30"
                >
                  <div className="flex-1 flex flex-col">
                    {/* Icon container with glowing ring */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-5 shrink-0">
                      {getServiceIcon(service.icon)}
                    </div>

                    <h3 className="text-xl font-bold mb-2.5 text-white">
                      {service.title}
                    </h3>

                    {/* Exact text with uniform min-height for clean alignment */}
                    <p className="text-xs sm:text-sm leading-relaxed mb-5 min-h-[58px] sm:min-h-[64px] text-slate-300">
                      {service.description}
                    </p>

                    {/* Feature bullet previews */}
                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="text-slate-300">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learn More Action */}
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full py-2.5 px-4 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 hover:border-transparent transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group mt-auto shrink-0"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`relative max-w-lg w-full rounded-3xl p-6 sm:p-8 border shadow-2xl z-10 ${
                darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  {getServiceIcon(selectedService.icon)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{selectedService.title}</h3>
                  <span className="text-xs font-mono text-cyan-400">Service Overview & Scope</span>
                </div>
              </div>

              <p className={`text-sm sm:text-base leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {selectedService.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3 font-mono">
                  Key Capabilities Included:
                </h4>
                <div className="space-y-2.5">
                  {selectedService.features.map((f, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onContactClick();
                  }}
                  className="flex-1 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 text-center shadow-lg shadow-cyan-500/25 hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Inquire for this Service
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 text-sm font-medium transition-colors cursor-pointer"
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
