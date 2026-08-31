import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  ExternalLink,
  Send,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Code2,
  Atom,
  Server,
  Layers,
  FileDown
} from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import { ThreeHeroCanvas } from './ThreeHeroCanvas';
import { Card3D } from './Card3D';

// Authentic WhatsApp SVG Icon
const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface HeroSectionProps {
  darkMode: boolean;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ darkMode, onOpenResume }) => {
  // Typewriter effect
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const titles = personalInfo.titles;
    const fullText = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex]);

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'WhatsApp':
        return <WhatsAppIcon className="w-5 h-5" />;
      case 'Telegram':
        return <Send className="w-5 h-5" />;
      case 'Instagram':
        return <Instagram className="w-5 h-5" />;
      case 'Facebook':
        return <Facebook className="w-5 h-5" />;
      case 'LinkedIn':
        return <Linkedin className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center pt-28 pb-16 overflow-hidden scroll-mt-20"
    >
      {/* 3D WebGL Three.js interactive background */}
      <ThreeHeroCanvas darkMode={darkMode} />

      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-teal-500/10 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-mono font-medium mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Available for Web Development & Projects</span>
            </div>

            {/* Intro Greetings */}
            <h3
              className={`text-xl sm:text-2xl font-semibold tracking-wide mb-1 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Hi, I am
            </h3>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight mb-4">
              <span className={darkMode ? 'text-white' : 'text-slate-900'}>
                {personalInfo.name}
              </span>
            </h1>

            {/* Animated Typing Role */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <h2
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold flex items-center gap-2 ${
                  darkMode ? 'text-slate-200' : 'text-slate-800'
                }`}
              >
                <span>And I'm a</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400 font-extrabold">
                  {currentText}
                </span>
                <span className="w-1 h-7 sm:h-9 bg-cyan-400 animate-pulse ml-0.5" />
              </h2>
            </div>

            {/* Subtitle / Paragraph from original details */}
            <p
              className={`text-base sm:text-lg leading-relaxed max-w-2xl mb-8 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {personalInfo.tagline}
            </p>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-3.5 mb-8 flex-wrap justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  id={`hero-social-${social.name.toLowerCase()}`}
                  className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group bg-slate-900/90 border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#about"
                id="hero-about-btn"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>About Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-download-cv-btn"
                onClick={onOpenResume}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold border transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98] bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 shadow-md"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Round Profile Image & Cyber Glow Rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative flex items-center justify-center">
              {/* Outer Rotating Glowing Ambient Ring */}
              <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-tr from-cyan-500/30 via-teal-500/20 to-sky-500/30 blur-2xl animate-pulse pointer-events-none" />

              {/* Decorative Tech Orbit Circles */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-full border border-cyan-500/20 border-dashed animate-[spin_20s_linear_infinite] pointer-events-none" />
              <div className="absolute -inset-7 sm:-inset-9 rounded-full border border-teal-500/10 pointer-events-none hidden sm:block" />

              {/* Main Round Image Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-b from-cyan-400 via-teal-500 to-slate-900 shadow-[0_0_50px_rgba(6,182,212,0.35)] transition-transform duration-500 hover:scale-[1.03]">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 p-1.5 flex items-center justify-center relative">
                  {/* High Quality Round Portrait / Illustrated Developer Image */}
                  <img
                    src="https://www.shutterstock.com/shutterstock/videos/3451607687/thumb/1.jpg?ip=x480"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center rounded-full filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />

                  {/* Cyber Glass Reflection Overlay */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-slate-950/60 via-transparent to-cyan-500/10 pointer-events-none" />

                  {/* Inner Glowing Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400/40 pointer-events-none shadow-[inset_0_0_20px_rgba(6,182,212,0.3)]" />
                </div>

                {/* Floating Orbit Floating Badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-2 -right-2 sm:top-2 sm:-right-4 px-3.5 py-1.5 rounded-full bg-slate-950/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold backdrop-blur-md shadow-lg shadow-cyan-950/50 flex items-center gap-1.5"
                >
                  <Atom className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
                  <span>React Dev</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-2 -left-2 sm:bottom-4 sm:-left-4 px-3.5 py-1.5 rounded-full bg-slate-950/90 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-semibold backdrop-blur-md shadow-lg shadow-emerald-950/50 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Web Developer</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
