'use client';

import { motion } from 'framer-motion';
import { FaArrowUp, FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { siteData } from '@/data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    FaGithub,
    FaLinkedin,
    FaTwitter,
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white border-t border-gray-800 dark:border-gray-900">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">
                {siteData.personal.name}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {siteData.personal.title} passionate about creating amazing digital experiences and solving complex problems through code.
              </p>
              <div className="flex space-x-4">
                {siteData.social.map((social) => {
                  const IconComponent = socialIcons[social.icon as keyof typeof socialIcons];
                  return (
                    <motion.a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gray-800 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <IconComponent size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="space-y-2">
                {siteData.navigation.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(item.href);
                      if (element) {
                        const offset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      }
                    }}
                    whileHover={{ x: 5 }}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Get in Touch</h4>
              <div className="space-y-2 text-gray-400">
                <p>{siteData.personal.location}</p>
                <a 
                  href={`mailto:${siteData.personal.email}`}
                  className="block hover:text-white transition-colors"
                >
                  {siteData.personal.email}
                </a>
                {siteData.personal.phone && (
                  <a 
                    href={`tel:${siteData.personal.phone}`}
                    className="block hover:text-white transition-colors"
                  >
                    {siteData.personal.phone}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-900 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <span>
                © {currentYear} {siteData.personal.name}. All rights reserved.
              </span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FaHeart className="text-red-500" size={14} />
                </motion.div>
                <span>and lots of ☕</span>
              </span>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors"
              aria-label="Back to top"
            >
              <FaArrowUp size={14} />
              <span>Back to Top</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-4 right-4 w-8 h-8 bg-primary-500/20 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-8 right-12 w-6 h-6 bg-purple-500/20 rounded-full blur-sm"
        />
      </div>
    </footer>
  );
} 