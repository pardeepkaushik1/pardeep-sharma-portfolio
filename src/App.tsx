/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';
import { QRModal } from './components/QRModal';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-[#031634] text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Top Fixed Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenQR={() => setQrModalOpen(true)}
      />

      {/* Main Content Layout */}
      <main className="relative">
        {/* 1. Hero Section with 3D WebGL Canvas & Typing Text */}
        <HeroSection
          darkMode={darkMode}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        {/* 2. About Me Section */}
        <AboutSection
          darkMode={darkMode}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        {/* 3. Services Section */}
        <ServicesSection
          darkMode={darkMode}
          onContactClick={handleContactClick}
        />

        {/* 4. Skills Section (Technical bars + Radial circles) */}
        <SkillsSection darkMode={darkMode} />

        {/* 5. Projects Section (4 live websites with 3D cards & modals) */}
        <ProjectsSection darkMode={darkMode} />

        {/* 6. Contact Section (Direct channels & interactive form) */}
        <ContactSection darkMode={darkMode} showToast={showToast} />
      </main>

      {/* Footer */}
      <FooterSection darkMode={darkMode} />

      {/* Interactive Modals */}
      <QRModal
        isOpen={qrModalOpen}
        onClose={() => setQrModalOpen(false)}
        darkMode={darkMode}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        darkMode={darkMode}
        showToast={showToast}
      />

      {/* Global Toast Alerts */}
      <Toast message={toastMessage} />
    </div>
  );
}
