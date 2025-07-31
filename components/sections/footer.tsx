'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const footerSections = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'AI Technology', href: '#' },
      { label: 'Integrations', href: '#' },
      { label: 'API Documentation', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Webinars', href: '#' },
      { label: 'Templates', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press Kit', href: '#' },
      { label: 'Partners', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'GDPR', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: '#', label: 'Email' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-slate-950 border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-2xl font-bold gradient-text">ADmyBRAND AI</span>
                </div>
                
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  Transform your marketing with cutting-edge AI technology. Generate campaigns, optimize content, and scale growth with intelligent automation.
                </p>

                {/* Newsletter Signup */}
                <div className="glass-card p-6 mb-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    <h3 className="font-semibold text-white">Stay Updated</h3>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">
                    Get the latest AI marketing insights and product updates.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    />
                    <motion.button
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/25 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Subscribe
                      <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-slate-400">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span>San Francisco, CA 94105</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-400">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-400">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span>hello@admybrand.ai</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {footerSections.map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  >
                    <h3 className="font-semibold text-white mb-6 text-lg">
                      {section.title}
                    </h3>
                    <ul className="space-y-4">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <button
                            onClick={() => scrollToSection(link.href)}
                            className="text-slate-400 hover:text-white transition-colors duration-200 block"
                          >
                            {link.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-slate-400 text-sm"
            >
              © 2025 ADmyBRAND AI Suite. All rights reserved.
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}