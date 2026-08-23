'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

const visibleTarget = { opacity: 1, x: 0, y: 0 } as const;
const hiddenTargets = {
  default: { opacity: 0, x: 0, y: 0 },
  up: { opacity: 0, x: 0, y: 16 },
  down: { opacity: 0, x: 0, y: -16 },
  left: { opacity: 0, x: 16, y: 0 },
  right: { opacity: 0, x: -16, y: 0 },
} as const;
const noMotionTransition = { delay: 0, duration: 0 } as const;

export default function ScrollReveal({
  children,
  direction,
  delay = 0,
  duration = 0.6,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: 0.1,
    once: true,
  });
  const prefersReducedMotion = useReducedMotion();
  const [isAnimationReady, setIsAnimationReady] = useState(false);

  useEffect(() => {
    setIsAnimationReady(true);
  }, []);

  const isVisible =
    !isAnimationReady || prefersReducedMotion === true || isInView;
  const hiddenTarget = direction ? hiddenTargets[direction] : hiddenTargets.default;

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={isVisible ? visibleTarget : hiddenTarget}
      transition={
        prefersReducedMotion
          ? noMotionTransition
          : { delay, duration, ease: 'easeOut' }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}