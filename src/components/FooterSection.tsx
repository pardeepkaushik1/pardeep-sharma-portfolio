import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterSectionProps {
  darkMode?: boolean;
}

export const FooterSection: React.FC<FooterSectionProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#051129] text-slate-300 overflow-hidden">
      {/* Top Gradient Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#0ef] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 relative">
        
        {/* Empty left placeholder for desktop balance */}
        <div className="hidden sm:block w-11" />

        {/* Centered Credit & Copyright Block */}
        <div className="text-center space-y-2">
          <p className="text-base font-semibold text-slate-200 flex items-center justify-center gap-2">
            <span>Developed with</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 inline-block animate-pulse" />
            <span>by</span>
            <span className="text-[#0ef] font-bold drop-shadow-[0_0_12px_rgba(0,238,255,0.4)]">
              {personalInfo.name}
            </span>
          </p>

          <p className="text-xs sm:text-sm text-slate-400 font-mono tracking-wide">
            &copy; 2026. All rights reserved &bull; Crafted for the Digital Future
          </p>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          id="back-to-top-btn"
          title="Back to Top"
          aria-label="Scroll to top"
          className="w-11 h-11 rounded-xl bg-[#0ef] text-[#081b29] hover:bg-cyan-300 shadow-[0_0_15px_#0ef] flex items-center justify-center font-bold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shrink-0"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>

      </div>
    </footer>
  );
};
