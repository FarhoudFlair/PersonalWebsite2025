"use client";

import type { ReactNode } from 'react';
import { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import { SettingsProvider } from '@/context/SettingsContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import ParticleColorSelector from '@/components/ui/ParticleColorSelector';

const TsParticleBackground = lazy(() => import('@/components/animations/TsParticleBackground'));

const particleColors = [
  { name: 'Mint Green', value: '#00c896' },
  { name: 'Sky Blue', value: '#3b82f6' },
  { name: 'Rose Pink', value: '#ec4899' },
  { name: 'Amber Gold', value: '#f59e0b' },
  { name: 'Classic White', value: '#ffffff' },
];

interface AppClientWrapperProps {
  children: ReactNode;
}

function InnerClientLogic({ children }: { children: ReactNode }) {
  const [showParticles, setShowParticles] = useState(false);
  const [interactionMode, setInteractionMode] = useState<'repulse' | 'attract'>('attract');
  const prefersReducedMotion = useReducedMotion();
  const [particleColor, setParticleColor] = useState<string>(particleColors[0].value);

  const handleToggleInteraction = useCallback(() => {
    setInteractionMode((previousMode) => previousMode === 'repulse' ? 'attract' : 'repulse');
  }, []);

  const handleParticleColorChange = useCallback((colorValue: string) => {
    setParticleColor(colorValue);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setShowParticles(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowParticles(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <>
      {showParticles && (
        <Suspense fallback={<div className="absolute inset-0 pointer-events-none -z-10" />}>
          <TsParticleBackground
            interactionMode={interactionMode}
            particleColor={particleColor}
          />
        </Suspense>
      )}
      <ParticleColorSelector
        availableColors={particleColors}
        currentColor={particleColor}
        onColorChange={handleParticleColorChange}
        currentMode={interactionMode}
        onToggleInteraction={handleToggleInteraction}
        prefersReducedMotion={prefersReducedMotion}
      />
      {children}
    </>
  );
}

function AppClientWrapper({ children }: AppClientWrapperProps) {
  return (
    <SettingsProvider>
      <InnerClientLogic>{children}</InnerClientLogic>
    </SettingsProvider>
  );
}

export default AppClientWrapper;
