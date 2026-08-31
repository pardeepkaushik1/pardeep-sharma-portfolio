import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Home,
  User,
  Sparkles,
  Code2,
  FolderGit2,
  Mail,
  QrCode,
  Menu,
  X
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  darkMode?: boolean;
  setDarkMode?: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenQR: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode = true,
  onOpenQR
}) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home, id: 'home' },
    { name: 'About', href: '#about', icon: User, id: 'about' },
    { name: 'Expertise', href: '#services', icon: Sparkles, id: 'services' },
    { name: 'Skills', href: '#skill', icon: Code2, id: 'skill' },
    { name: 'Projects', href: '#project', icon: FolderGit2, id: 'project' },
    { name: 'Contact', href: '#contact', icon: Mail, id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['home', 'about', 'services', 'skill', 'project', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTarget = (targetId: string) => {
    if (targetId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const target =
      document.getElementById(targetId) ||
      (targetId === 'skills' ? document.getElementById('skill') : null) ||
      (targetId === 'skill' ? document.getElementById('skills') : null) ||
      (targetId === 'projects' ? document.getElementById('project') : null) ||
      (targetId === 'project' ? document.getElementById('projects') : null) ||
      (targetId === 'expertise' ? document.getElementById('services') : null) ||
      (targetId === 'services' ? document.getElementById('expertise') : null);

    if (target) {
      const headerOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (href: string) => {
    const targetId = href.replace('#', '');
    setMobileMenuOpen(false);

    // Scroll immediately and queue smooth scroll after menu toggle to prevent mobile layout interrupt
    scrollToTarget(targetId);
    setTimeout(() => {
      scrollToTarget(targetId);
    }, 50);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-md shadow-slate-200/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Hexagon Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="group flex items-center gap-3 cursor-pointer"
          id="brand-logo-link"
        >
          <div className="relative w-11 h-11 flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full filter drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] group-hover:scale-105 transition-transform duration-300"
            >
              <polygon
                points="50,3 95,25 95,75 50,97 5,75 5,25"
                fill={darkMode ? '#0a1128' : '#e0f2fe'}
                stroke="#06b6d4"
                strokeWidth="5"
                className="transition-colors duration-300"
              />
              <text
                x="50"
                y="52"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="Outfit, sans-serif"
                fontWeight="800"
                fontSize="44"
                fill={darkMode ? '#ffffff' : '#0891b2'}
              >
                {personalInfo.logoLetter}
              </text>
            </svg>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-950 animate-pulse"></span>
          </div>

          <div className="flex flex-col">
            <span
              className={`font-bold tracking-tight text-lg leading-tight transition-colors ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              {personalInfo.name}
            </span>
            <span className="text-xs font-mono font-medium text-cyan-500 tracking-wide">
              {personalInfo.role}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/40 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-800/60 backdrop-blur-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.name}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.href)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'text-cyan-400 font-semibold'
                    : darkMode
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-cyan-500/15 border border-cyan-500/30 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="w-4 h-4" />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* QR Code trigger */}
          <button
            id="open-qr-btn"
            onClick={onOpenQR}
            title="Scan Portfolio QR"
            aria-label="Scan Portfolio QR Code"
            className={`p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
              darkMode
                ? 'bg-slate-900/80 border-slate-800 text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800'
                : 'bg-slate-100 border-slate-200 text-cyan-700 hover:bg-cyan-50 hover:border-cyan-300'
            }`}
          >
            <QrCode className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Mobile Menu"
            className={`lg:hidden p-2.5 rounded-xl border transition-colors cursor-pointer ${
              darkMode
                ? 'bg-slate-900/80 border-slate-800 text-slate-200 hover:bg-slate-800'
                : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`lg:hidden border-b overflow-hidden shadow-2xl ${
              darkMode
                ? 'bg-slate-950/95 border-cyan-500/20 backdrop-blur-2xl'
                : 'bg-white/95 border-slate-200 backdrop-blur-2xl'
            }`}
          >
            <div className="px-4 py-4 space-y-1.5 max-w-lg mx-auto">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.name}
                    type="button"
                    id={`mobile-nav-${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium transition-all duration-200 group cursor-pointer ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15)] font-semibold'
                        : darkMode
                        ? 'text-slate-300 hover:text-cyan-300 hover:bg-slate-900/90 border border-transparent hover:border-slate-800'
                        : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-100 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                          isActive
                            ? 'bg-cyan-500/20 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                            : darkMode
                            ? 'bg-slate-900 text-slate-400 group-hover:text-cyan-400 group-hover:bg-slate-800'
                            : 'bg-slate-100 text-slate-600 group-hover:text-cyan-600'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm tracking-wide">{item.name}</span>
                    </div>

                    <span
                      className={`text-xs font-mono transition-opacity ${
                        isActive
                          ? 'text-cyan-400 opacity-100'
                          : 'text-slate-600 opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      &rarr;
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
