'use client';

import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { siteData } from '@/data/siteData';
import Button from '@/components/ui/Button';
import ParticleBackground from '@/components/animations/TsParticleBackground';
import GradientText from '@/components/animations/GradientText';
import { staggerContainer } from '@/utils/motionVariants';

export default function HeroSection() {
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleProjectsClick = () => {
    const element = document.querySelector('#projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const taglineWords = siteData.personal.tagline.split(' ');

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background-light to-surface-light dark:from-background-dark dark:to-surface-dark"
    >


      {/* Hero Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Greeting */}
        <motion.p
          variants={wordVariants}
          className="text-lg sm:text-xl text-text-secondary-light dark:text-text-secondary-dark mb-4"
        >
          Hi, I'm
        </motion.p>

        {/* Name and Title */}
        <motion.h1
          variants={titleVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <motion.span
            variants={wordVariants}
            className="block text-text-primary-light dark:text-text-primary-dark"
          >
            {siteData.personal.name}
          </motion.span>
          <motion.span
            variants={wordVariants}
            className="block mt-2"
          >
            <GradientText>
              {siteData.personal.title}
            </GradientText>
          </motion.span>
        </motion.h1>

        {/* Tagline */}
        <motion.div
          variants={titleVariants}
          className="mb-8"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-text-secondary-light dark:text-text-secondary-dark">
            {taglineWords.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={wordVariants}
          className="text-lg sm:text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {siteData.personal.bio}
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          variants={wordVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            onClick={handleContactClick}
            size="lg"
            className="w-full sm:w-auto min-w-[160px]"
          >
            Contact Me
          </Button>
          <Button
            onClick={handleProjectsClick}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto min-w-[160px]"
          >
            View Projects
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-2">
            Scroll to explore
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-text-secondary-light dark:text-text-secondary-dark"
          >
            <FaArrowDown size={20} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Floating Shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full opacity-15 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full opacity-20 blur-xl"
        />
      </motion.div>
    </section>
  );
} 