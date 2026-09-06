"use client";

import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { SettingsProvider } from '@/context/SettingsContext';
import ParticleInteractionToggle from '@/components/ui/ParticleInteractionToggle';
import ParticleColorSelector from '@/components/ui/ParticleColorSelector';

const TsParticleBackground = lazy(() => import('@/components/animations/TsParticleBackground'));
const particleColors = [
  { name: 'Mint Green', value: '#00c896' },
  { name: 'Sky Blue', value: '#3b82f6' },
  { name: 'Rose Pink', value: '#ec4899' },
  { name: 'Amber Gold', value: '#f59e0b' },
  { name: 'Classic White', value: '#ffffff' },
];

function InnerClientLogic({ children }: { children: React.ReactNode }) {
  const [showParticles, setShowParticles] = useState(false);
  const [interactionMode, setInteractionMode] = useState<'repulse' | 'attract'>('attract');
  const [particleColor, setParticleColor] = useState(particleColors[0].value);
  const prefersReducedMotion = useReducedMotion();
  const particlesEnabled = showParticles && !prefersReducedMotion;
  const handleToggleInteraction = useCallback(() => {
    setInteractionMode(mode => mode === 'repulse' ? 'attract' : 'repulse');
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setShowParticles(false);
      return;
    }
    const timer = setTimeout(() => setShowParticles(true), 1000);
    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <>
      {particlesEnabled && (
        <>
          <Suspense fallback={null}>
            <TsParticleBackground interactionMode={interactionMode} particleColor={particleColor} />
          </Suspense>
          <ParticleInteractionToggle currentMode={interactionMode} onToggle={handleToggleInteraction} />
          <ParticleColorSelector availableColors={particleColors} currentColor={particleColor} onColorChange={setParticleColor} />
        </>
      )}
      {children}
    </>
  );
}

export default function AppClientWrapper({ children }: { children: React.ReactNode }) {
  return <SettingsProvider><InnerClientLogic>{children}</InnerClientLogic></SettingsProvider>;
}
