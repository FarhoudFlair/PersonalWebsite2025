'use client';

import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export default function GradientText({ 
  children, 
  className, 
  animate = true 
}: GradientTextProps) {
  return (
    <motion.span
      className={cn(
        'gradient-text',
        animate && 'animate-gradient-text',
        className
      )}
      initial={{ backgroundPosition: '0% 50%' }}
      animate={animate ? {
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      } : {}}
      transition={{
        duration: 4,
        ease: 'easeInOut',
        repeat: Infinity,
      }}
    >
      {children}
    </motion.span>
  );
} 