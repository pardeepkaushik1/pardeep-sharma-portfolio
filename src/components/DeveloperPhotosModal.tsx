import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Instagram,
  CheckCircle2,
} from "lucide-react";

interface DeveloperPhotosModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

interface PhotoItem {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  caption: string;
  tag: string;
}

// 4 High-resolution developer portrait images in standard <img> tags
// You can easily change any 'src' URL below to your own photo link anytime
const DEFAULT_PHOTOS: PhotoItem[] = [
  {
    id: "photo-1",
    title: "Developer Portrait (Rooftop)",
    subtitle: "Frontend Developer • Pardeep Sharma",
    src: "/public/images/img1.webp",
    caption: "Official Developer Portrait • Frontend Developer & Web Designer",
    tag: "Rooftop",
  },
  {
    id: "photo-2",
    title: "City Plaza Walk & Lifestyle",
    subtitle: "Streetwear & Lifestyle • Pardeep Sharma",
    src: "/public/images/img2.webp",
    caption:
      "Casual Outdoor Portrait • Pardeep Sharma • Lifestyle & Streetwear",
    tag: "City Plaza",
  },
  {
    id: "photo-3",
    title: "Modern Workspace & Code",
    subtitle: "Tech Studio • Pardeep Sharma",
    src: "/public/images/img3.webp",
    caption: "Clean UI & Interactive Web Experiences • Tech Studio Session",
    tag: "Tech Studio",
  },
  {
    id: "photo-4",
    title: "Outdoor Garden & Park Walk",
    subtitle: "Outdoor Lifestyle • @pardeepkaushik_1",
    src: "/public/images/img4.webp",
    caption: "Outdoor Lifestyle Portrait • Pardeep Sharma • Cheeka, Haryana",
    tag: "Park Walk",
  },
];

export const DeveloperPhotosModal: React.FC<DeveloperPhotosModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  // Keyboard navigation & lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentIndex]);

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % DEFAULT_PHOTOS.length);
  };

  const prevPhoto = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + DEFAULT_PHOTOS.length) % DEFAULT_PHOTOS.length,
    );
  };

  const currentPhoto = DEFAULT_PHOTOS[currentIndex];
  const activeImageSrc = currentPhoto.src;
  const isImageFailed = failedImages[currentPhoto.id];

  // Touch swipe support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 45;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextPhoto();
    if (distance < -minSwipeDistance) prevPhoto();
  };

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-100 flex items-center justify-center p-2.5 sm:p-4 md:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window in exact screen center with responsive dimensions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="relative z-10 w-full max-w-[95vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl rounded-2xl sm:rounded-3xl overflow-hidden border border-cyan-500/30 bg-slate-900 text-slate-100 shadow-2xl shadow-cyan-950/60 flex flex-col max-h-[92dvh] sm:max-h-[90dvh]"
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between px-3 py-2.5 sm:px-5 sm:py-3.5 border-b border-slate-800 bg-slate-950/85 backdrop-blur-md shrink-0">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 shadow-[0_0_12px_rgba(6,182,212,0.25)]">
                <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-base font-bold text-white flex items-center gap-1.5 sm:gap-2 truncate">
                  <span className="truncate">Developer Photos</span>
                  <span className="text-[10px] sm:text-xs px-1.5 py-0.5 sm:px-2 rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-semibold shrink-0">
                    {currentIndex + 1} / {DEFAULT_PHOTOS.length}
                  </span>
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-400 font-mono truncate">
                  {currentPhoto.subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Main Visual Display Area - Shows Photo Directly in <img> tag */}
          <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="relative flex-1 bg-slate-950 flex items-center justify-center min-h-62.5 sm:min-h-95 md:min-h-107.5 max-h-[50vh] sm:max-h-[58vh] overflow-hidden p-2 sm:p-5 select-none"
          >
            {/* Background subtle radial glow */}
            <div className="absolute inset-0 bg-linear-to-b from-cyan-950/20 via-slate-950 to-slate-950 pointer-events-none" />

            {/* Developer Image in Center */}
            <motion.div
              key={currentPhoto.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative max-h-full max-w-full flex flex-col items-center justify-center z-10"
            >
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 border-cyan-500/40 bg-slate-900 shadow-cyan-950/60 group">
                {!isImageFailed ? (
                  <img
                    src={activeImageSrc}
                    alt={currentPhoto.title}
                    referrerPolicy="no-referrer"
                    loading="eager"
                    className="max-h-[38vh] sm:max-h-[48vh] md:max-h-[52vh] max-w-[82vw] sm:max-w-md md:max-w-lg w-auto h-auto aspect-4/5 object-cover sm:object-contain block transition-transform duration-300 group-hover:scale-[1.01]"
                    onError={() => {
                      setFailedImages((prev) => ({
                        ...prev,
                        [currentPhoto.id]: true,
                      }));
                    }}
                  />
                ) : (
                  <div className="w-[72vw] sm:w-[320px] md:w-90 aspect-4/5 flex flex-col items-center justify-center p-5 bg-linear-to-b from-slate-900 via-slate-950 to-slate-900 text-center select-none">
                    <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3 shadow-[0_0_24px_rgba(6,182,212,0.25)]">
                      <Camera className="w-7 h-7 sm:w-9 sm:h-9 text-cyan-400" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-mono text-cyan-400 font-semibold mb-1">
                      {currentPhoto.tag}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1.5">
                      {currentPhoto.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 max-w-xs leading-relaxed">
                      {currentPhoto.caption}
                    </p>
                  </div>
                )}

                {/* Subtle sheen highlight */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Badge Overlay on Image */}
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 flex items-center justify-between pointer-events-none">
                  <div className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-[9px] sm:text-xs font-mono font-medium flex items-center gap-1.5 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Pardeep Sharma</span>
                  </div>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-700 text-slate-300 text-[9px] sm:text-[11px] font-mono shadow-lg">
                    {currentIndex + 1} of {DEFAULT_PHOTOS.length}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={prevPhoto}
              aria-label="Previous photo"
              className="absolute left-1 sm:left-3.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-slate-900/85 hover:bg-cyan-500 text-white hover:text-slate-950 border border-slate-700 hover:border-cyan-400 flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xl backdrop-blur-sm cursor-pointer z-20"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <button
              type="button"
              onClick={nextPhoto}
              aria-label="Next photo"
              className="absolute right-1 sm:right-3.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-slate-900/85 hover:bg-cyan-500 text-white hover:text-slate-950 border border-slate-700 hover:border-cyan-400 flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xl backdrop-blur-sm cursor-pointer z-20"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Bottom Thumbnails & Caption */}
          <div className="px-3 py-2.5 sm:px-5 sm:py-3.5 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 shrink-0">
            <div className="text-center sm:text-left min-w-0 max-w-full">
              <h4 className="text-xs sm:text-sm font-semibold text-white truncate flex items-center justify-center sm:justify-start gap-1.5">
                <span>{currentPhoto.title}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 inline shrink-0" />
              </h4>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 line-clamp-1 sm:line-clamp-none">
                {currentPhoto.caption}
              </p>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              {/* Instagram link button */}
              <a
                href="https://instagram.com/pardeepkaushik_1"
                target="_blank"
                rel="noopener noreferrer"
                title="View on Instagram @pardeepkaushik_1"
                className="ml-1 p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-linear-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white transition-all hover:scale-105 shadow-md flex items-center justify-center cursor-pointer"
              >
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body,
  );
};
