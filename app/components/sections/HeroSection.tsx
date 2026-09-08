'use client';

import { motion, useReducedMotion } from 'motion/react';
import { FaArrowDown } from 'react-icons/fa';
import GradientText from '@/components/animations/GradientText';
import { siteData } from '@/data/siteData';

const revealTransition = {
  duration: 0.7,
  ease: 'easeOut',
} as const;

type FloatingShape = {
  className: string;
  animate: {
    y: number[];
    rotate: number[];
  };
  transition: {
    duration: number;
    repeat: number;
    ease: 'easeInOut';
    delay?: number;
  };
};

const floatingShapes: FloatingShape[] = [
  {
    className: 'left-[15%] top-[22%] h-16 w-16 bg-signal/10 blur-2xl sm:h-24 sm:w-24',
    animate: { y: [0, -20, 0], rotate: [0, 5, 0] },
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    className: 'right-[15%] top-[30%] h-20 w-20 bg-trace/50 blur-2xl sm:h-32 sm:w-32',
    animate: { y: [0, 30, 0], rotate: [0, -5, 0] },
    transition: { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 },
  },
  {
    className: 'bottom-[25%] left-[28%] h-16 w-16 bg-signal/10 blur-2xl sm:h-28 sm:w-28',
    animate: { y: [0, -15, 0], rotate: [0, 3, 0] },
    transition: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 },
  },
];

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      data-studio-section="home"
      data-studio-component="identity-hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center justify-center overflow-x-clip bg-canvas pt-16 text-ink sm:pt-20 lg:pt-24"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={
          shouldReduceMotion ? { duration: 0 } : { delay: 0.4, duration: 1 }
        }
      >
        {floatingShapes.map((shape) => (
          <motion.div
            key={shape.className}
            className={`absolute rounded-full ${shape.className}`}
            animate={shouldReduceMotion ? undefined : shape.animate}
            transition={shouldReduceMotion ? { duration: 0 } : shape.transition}
          />
        ))}
      </motion.div>

      <motion.div
        className="field-container relative z-10 flex w-full justify-center py-12 sm:py-16 lg:justify-start lg:py-20"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={shouldReduceMotion ? { duration: 0 } : revealTransition}
      >
        <div className="max-w-4xl text-center lg:text-left">
          <p className="mb-4 text-lg text-slate sm:text-xl">Hi, I&apos;m</p>

          <h1
            id="hero-heading"
            className="text-balance font-display text-5xl font-bold leading-none tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="block">{siteData.personal.name}</span>
            <span className="mt-3 block text-3xl sm:text-4xl">
              <GradientText>{siteData.personal.title}</GradientText>
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-balance text-xl leading-8 text-ink sm:mt-10 sm:text-2xl sm:leading-9 lg:mx-0">
            {siteData.personal.tagline}
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate sm:text-lg sm:leading-8 lg:mx-0">
            {siteData.personal.bio}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row lg:justify-start">
            <a
              href="#projects"
              data-qa="primary-action"
              className="inline-flex min-h-11 w-full items-center justify-center bg-signal px-6 py-3 text-sm font-semibold text-canvas outline-safety transition-colors hover:bg-signal/90 dark:text-ink sm:w-auto sm:min-w-40"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 w-full items-center justify-center border border-trace px-6 py-3 text-sm font-semibold text-ink outline-safety transition-colors hover:border-signal hover:text-signal sm:w-auto sm:min-w-40"
            >
              Contact
            </a>
            <a
              href={siteData.personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              data-studio-component="resume-link"
              aria-label={`Open ${siteData.personal.name}'s résumé in a new tab`}
              className="inline-flex min-h-11 w-full items-center justify-center border border-trace px-6 py-3 text-sm font-semibold text-ink outline-safety transition-colors hover:border-signal hover:text-signal sm:w-auto sm:min-w-40"
            >
              Résumé
            </a>
          </div>

          <motion.div
            className="mt-14 flex flex-col items-center sm:mt-16 lg:items-start"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { delay: 1.1, duration: 0.6, ease: 'easeOut' }
            }
          >
            <p className="mb-2 text-sm text-slate">Scroll to explore</p>
            <motion.div
              aria-hidden="true"
              className="text-slate"
              animate={shouldReduceMotion ? undefined : { y: [0, 10, 0] }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 2, repeat: Infinity, ease: 'easeInOut' }
              }
            >
              <FaArrowDown size={20} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}