import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export default function GradientText({
  children,
  className,
}: GradientTextProps) {
  return (
    <span className={cn('font-semibold text-signal', className)}>
      {children}
    </span>
  );
}