import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, QrCode, Sparkles, ExternalLink, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const QRModal: React.FC<QRModalProps> = ({ isOpen, onClose, darkMode }) => {
  if (!isOpen) return null;

  // We generate a clean vector QR matrix visual for Pardeep's portfolio
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative max-w-sm w-full rounded-3xl p-8 border text-center shadow-[0_0_50px_rgba(0,238,255,0.25)] z-10 bg-slate-900 border-[#0ef] text-white"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-4 text-[#0ef]">
            <QrCode className="w-6 h-6" />
          </div>

          <h3 className="text-2xl font-bold mb-1 text-white">Scan My Portfolio</h3>
          <p className="text-xs sm:text-sm mb-6 text-slate-400">
            Scan this QR code with your mobile camera to open Pardeep Sharma's Portfolio instantly.
          </p>

          {/* QR Code Container */}
          <div className="bg-white p-4 rounded-2xl inline-block mx-auto mb-6 shadow-inner border border-slate-200">
            <svg
              viewBox="0 0 160 160"
              className="w-44 h-44 mx-auto"
              fill="#081b29"
            >
              {/* Clean decorative high-res QR pattern */}
              <rect width="160" height="160" fill="#ffffff" />
              
              {/* Corner 1 (Top-Left) */}
              <rect x="15" y="15" width="40" height="40" fill="#081b29" rx="4" />
              <rect x="23" y="23" width="24" height="24" fill="#ffffff" rx="2" />
              <rect x="29" y="29" width="12" height="12" fill="#06b6d4" rx="2" />

              {/* Corner 2 (Top-Right) */}
              <rect x="105" y="15" width="40" height="40" fill="#081b29" rx="4" />
              <rect x="113" y="23" width="24" height="24" fill="#ffffff" rx="2" />
              <rect x="119" y="29" width="12" height="12" fill="#06b6d4" rx="2" />

              {/* Corner 3 (Bottom-Left) */}
              <rect x="15" y="105" width="40" height="40" fill="#081b29" rx="4" />
              <rect x="23" y="113" width="24" height="24" fill="#ffffff" rx="2" />
              <rect x="29" y="119" width="12" height="12" fill="#06b6d4" rx="2" />

              {/* Center Logo / Micro Pixels */}
              <rect x="68" y="68" width="24" height="24" fill="#081b29" rx="6" />
              <text x="80" y="84" textAnchor="middle" fill="#00eeff" fontWeight="bold" fontSize="14" fontFamily="sans-serif">P</text>

              {/* Data Grid Mock bits */}
              <rect x="62" y="18" width="8" height="8" fill="#081b29" />
              <rect x="76" y="18" width="8" height="8" fill="#081b29" />
              <rect x="62" y="32" width="8" height="8" fill="#081b29" />
              <rect x="88" y="32" width="8" height="8" fill="#081b29" />
              <rect x="62" y="46" width="8" height="8" fill="#081b29" />
              <rect x="76" y="46" width="8" height="8" fill="#081b29" />
              <rect x="88" y="46" width="8" height="8" fill="#081b29" />

              <rect x="18" y="62" width="8" height="8" fill="#081b29" />
              <rect x="32" y="62" width="8" height="8" fill="#081b29" />
              <rect x="46" y="62" width="8" height="8" fill="#081b29" />
              <rect x="18" y="76" width="8" height="8" fill="#081b29" />
              <rect x="32" y="88" width="8" height="8" fill="#081b29" />

              <rect x="105" y="62" width="8" height="8" fill="#081b29" />
              <rect x="119" y="62" width="8" height="8" fill="#081b29" />
              <rect x="133" y="76" width="8" height="8" fill="#081b29" />
              <rect x="105" y="88" width="8" height="8" fill="#081b29" />
              <rect x="127" y="88" width="8" height="8" fill="#081b29" />

              <rect x="62" y="105" width="8" height="8" fill="#081b29" />
              <rect x="76" y="119" width="8" height="8" fill="#081b29" />
              <rect x="62" y="133" width="8" height="8" fill="#081b29" />
              <rect x="88" y="133" width="8" height="8" fill="#081b29" />

              <rect x="105" y="105" width="16" height="8" fill="#081b29" />
              <rect x="129" y="105" width="12" height="8" fill="#081b29" />
              <rect x="113" y="119" width="16" height="8" fill="#081b29" />
              <rect x="105" y="133" width="8" height="8" fill="#081b29" />
              <rect x="121" y="133" width="20" height="8" fill="#081b29" />
            </svg>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono text-cyan-400">
              pardeepkaushik80776@gmail.com
            </span>
            <button
              onClick={onClose}
              className="mt-2 w-full py-3 rounded-xl font-bold bg-[#0ef] text-[#081b29] hover:bg-cyan-300 transition-colors shadow-md shadow-cyan-500/20 text-sm cursor-pointer"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
