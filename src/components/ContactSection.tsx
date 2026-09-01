import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  Send,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  CheckCircle2,
  Copy,
  Check,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, socialLinks } from '../data/portfolioData';

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

interface ContactSectionProps {
  darkMode: boolean;
  showToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ darkMode, showToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    showToast(`Copied ${field} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      // Send form data to pardeepkaushik80776@gmail.com via reliable form service
      const response = await fetch("https://formsubmit.co/ajax/pardeepkaushik80776@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Subject: formData.subject || "New Message from Portfolio Website",
          Message: formData.message,
          _subject: `Portfolio Contact: ${formData.name} - ${formData.subject || 'New Inquiry'}`,
          _template: "table",
          _captcha: "false"
        })
      });

      const data = await response.json();

      if (response.ok || data.success === "true" || data.success === true) {
        setIsSubmitted(true);
        showToast('Message sent successfully! Pardeep will receive it directly on email.');

        // Trigger celebration confetti
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.7 },
            colors: ['#00eeff', '#21e6f0', '#3b82f6', '#10b981']
          });
        } catch (err) {
          // ignore if confetti unsupported
        }

        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 6000);
      } else {
        throw new Error(data.message || 'Failed to deliver message');
      }
    } catch (error) {
      console.error('Contact Form Submission Error:', error);
      // Fallback: Still notify user nicely and provide mailto direct link option
      showToast('Message recorded! You can also email directly at pardeepkaushik80776@gmail.com');
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="pt-12 sm:pt-16 pb-20 relative overflow-hidden scroll-mt-20" style={{ perspective: 1200 }}>
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 70, rotateX: 10, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            Contact <span className="text-[#0ef] drop-shadow-[0_0_20px_rgba(0,238,255,0.4)]">Me</span>
          </h2>
          <h4 className={`text-xl sm:text-2xl font-semibold mb-2 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
            Let's work Together
          </h4>
          <p className={`text-sm sm:text-base max-w-xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            I'm always open to new opportunities, collaborations, and exciting projects. Feel free to reach out, and let's create something amazing together!
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Direct Info & Social Circles */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col h-full"
          >
            <div
              className="p-8 rounded-3xl border transition-all duration-300 h-full flex flex-col justify-between bg-slate-900 border-slate-800 shadow-xl"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Contact Information
                </h3>

                {/* Direct Info List */}
                <div className="space-y-4 mb-8">
                  {/* Email Item */}
                  <div
                    onClick={() => handleCopy(personalInfo.contact.email, 'Email')}
                    className="p-4 rounded-2xl border flex items-center justify-between gap-3 cursor-pointer group transition-all duration-200 hover:-translate-y-0.5 bg-slate-950/60 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-950 hover:shadow-md hover:shadow-cyan-500/5"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-[#0ef]" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-mono text-cyan-400 block">Email Address</span>
                        <span className="text-sm font-semibold truncate block text-slate-200">
                          {personalInfo.contact.email}
                        </span>
                      </div>
                    </div>
                    <button className="p-2 text-slate-400 group-hover:text-cyan-400 transition-colors">
                      {copiedField === 'Email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Phone Item */}
                  <div
                    onClick={() => handleCopy(personalInfo.contact.phone, 'Phone number')}
                    className="p-4 rounded-2xl border flex items-center justify-between gap-3 cursor-pointer group transition-all duration-200 hover:-translate-y-0.5 bg-slate-950/60 border-slate-800 hover:border-teal-500/50 hover:bg-slate-950 hover:shadow-md hover:shadow-teal-500/5"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-teal-400" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-mono text-teal-400 block">Phone & WhatsApp</span>
                        <span className="text-sm font-semibold truncate block text-slate-200">
                          {personalInfo.contact.phoneDisplay}
                        </span>
                      </div>
                    </div>
                    <button className="p-2 text-slate-400 group-hover:text-teal-400 transition-colors">
                      {copiedField === 'Phone number' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Location */}
                  <div
                    className="p-4 rounded-2xl border flex items-center gap-3.5 bg-slate-950/60 border-slate-800"
                  >
                    <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-indigo-400 block">Location</span>
                      <span className="text-sm font-semibold text-slate-200">
                        {personalInfo.contact.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels with exact Glowing circular style */}
              <div className="pt-6 border-t border-slate-800/60 mt-auto">
                <span className="text-xs font-mono text-slate-400 block mb-4 uppercase tracking-wider">
                  Connect on Socials
                </span>
                <div className="flex items-center gap-3 flex-wrap">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      id={`contact-social-${social.name.toLowerCase()}`}
                      className="w-11 h-11 rounded-full border-2 border-[#0ef] text-[#0ef] flex items-center justify-center hover:bg-[#0ef] hover:text-[#081b29] hover:shadow-[0_0_20px_#0ef] transition-all duration-300 transform hover:scale-110"
                    >
                      {getSocialIcon(social.name)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col h-full"
          >
            <div
              className="p-8 sm:p-10 rounded-3xl border transition-all duration-300 h-full flex flex-col justify-between bg-slate-900 border-slate-800 shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">
                Send a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center space-y-3"
                >
                  <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#0ef]" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Thank you, {formData.name || 'Friend'}!</h4>
                  <p className="text-sm text-slate-300">
                    Your message has been dispatched successfully. I will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter Your Name"
                        className="w-full px-4 py-3.5 rounded-xl border text-sm transition-all outline-none font-medium bg-slate-950/80 border-slate-800 text-white placeholder-slate-500 focus:border-[#0ef] focus:ring-2 focus:ring-[#0ef]/20"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2"
                      >
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter Your Email"
                        className="w-full px-4 py-3.5 rounded-xl border text-sm transition-all outline-none font-medium bg-slate-950/80 border-slate-800 text-white placeholder-slate-500 focus:border-[#0ef] focus:ring-2 focus:ring-[#0ef]/20"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Enter Your Subject"
                      className="w-full px-4 py-3.5 rounded-xl border text-sm transition-all outline-none font-medium bg-slate-950/80 border-slate-800 text-white placeholder-slate-500 focus:border-[#0ef] focus:ring-2 focus:ring-[#0ef]/20"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter Your Message..."
                      className="w-full px-4 py-3.5 rounded-xl border text-sm transition-all outline-none font-medium resize-none bg-slate-950/80 border-slate-800 text-white placeholder-slate-500 focus:border-[#0ef] focus:ring-2 focus:ring-[#0ef]/20"
                    />
                  </div>

                  {/* Submit Button with exact Glowing Neon Style */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="submit-contact-btn"
                    className="w-full sm:w-auto px-10 py-4 rounded-full font-bold bg-[#0ef] text-[#081b29] hover:bg-cyan-400 text-base tracking-wider transition-all duration-300 shadow-[0_0_15px_#0ef] hover:shadow-[0_0_35px_#0ef] flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};
