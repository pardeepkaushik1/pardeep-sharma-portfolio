import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, QrCode, Copy, Check, ExternalLink } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const QRModal: React.FC<QRModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [portfolioUrl, setPortfolioUrl] = useState(
 'https://pardeepkaushik1.github.io/pardeep-sharma-portfolio');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.href) {
      // Use the actual current live URL if available
      const current = window.location.href.split('#')[0];
      if (current && !current.includes('about:blank')) {
        setPortfolioUrl(current);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(portfolioUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

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
          className="relative max-w-sm w-full rounded-3xl p-7 sm:p-8 border text-center shadow-[0_0_50px_rgba(0,238,255,0.25)] z-10 bg-slate-900 border-[#0ef] text-white"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close QR Modal"
            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-4 text-[#0ef]">
            <QrCode className="w-6 h-6" />
          </div>

          <h3 className="text-2xl font-bold mb-1 text-white">Scan My Portfolio</h3>
          <p className="text-xs sm:text-sm mb-5 text-slate-300">
            Scan this QR code with any mobile camera or QR scanner to open Pardeep Sharma's Portfolio live!
          </p>

          {/* Genuine Scannable QR Code Container */}
          <div className="bg-white p-3.5 rounded-2xl inline-block mx-auto mb-4 shadow-xl border-2 border-cyan-400/40">
            <QRCodeSVG
              value={portfolioUrl}
              size={180}
              level="M"
              includeMargin={false}
              fgColor="#081b29"
              bgColor="#ffffff"
              className="w-40 h-40 sm:w-44 sm:h-44 mx-auto"
            />
          </div>

          {/* Live Link & Copy Action */}
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between gap-2 p-2 px-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
              <span className="truncate text-slate-300 font-mono text-[11px] text-left select-all">
                {portfolioUrl}
              </span>
              <button
                onClick={handleCopyLink}
                className="p-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-[#0ef] transition-colors shrink-0 flex items-center gap-1 font-semibold text-[11px] cursor-pointer"
                title="Copy URL"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-1">
              <a
                href={portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-xs flex items-center justify-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                <span>Open Link</span>
              </a>
              <button
                onClick={onClose}
                className="py-2.5 px-3 rounded-xl font-bold bg-[#0ef] text-[#081b29] hover:bg-cyan-300 transition-colors shadow-md shadow-cyan-500/20 text-xs cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
