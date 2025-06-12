"use client";

import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
// import { SettingsProvider } from '@/context/SettingsContext'; // Assuming SettingsProvider is still needed from original file structure

// Dynamically import the TsParticleBackground component
const TsParticleBackground = lazy(() => import('@/components/animations/TsParticleBackground'));
import ParticleInteractionToggle from '@/components/ui/ParticleInteractionToggle';
// Import ParticleColorSelector (will be created later)
import ParticleColorSelector from '@/components/ui/ParticleColorSelector'; // Uncommented and imported

// Define available particle colors
const particleColors = [
  { name: 'Mint Green', value: '#00c896' },
  { name: 'Sky Blue', value: '#3b82f6' },
  { name: 'Rose Pink', value: '#ec4899' },
  { name: 'Amber Gold', value: '#f59e0b' },
  { name: 'Classic White', value: '#ffffff' },
];

interface AppClientWrapperProps {
  children: React.ReactNode;
}

function InnerClientLogic({ children }: { children: React.ReactNode }) {
  const [showParticles, setShowParticles] = useState(false);
  const [interactionMode, setInteractionMode] = useState<'repulse' | 'attract'>('attract'); // Changed default to 'attract'
  const [particleColor, setParticleColor] = useState<string>(particleColors[0].value); // Restored state
  const handleToggleInteraction = useCallback(() => {
    setInteractionMode(prevMode => prevMode === 'repulse' ? 'attract' : 'repulse');
  }, []);
  
  const handleParticleColorChange = useCallback((colorValue: string) => {
    setParticleColor(colorValue); // Implemented
  }, []);

  useEffect(() => {
    // Delay loading particles until after initial page render
    // This improves First Contentful Paint metrics
    const timer = setTimeout(() => {
      setShowParticles(true);
    }, 1000); // 1 second delay
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {showParticles && (
        <Suspense fallback={<div className="absolute inset-0 pointer-events-none -z-10" />}>
          <TsParticleBackground 
            // key={interactionMode} // REMOVED KEY ENTIRELY // Add particleColor to key for re-init
            interactionMode={interactionMode}
            particleColor={particleColor} // Pass color prop
          />
        </Suspense>
      )}
      {/* Render toggle globally from AppClientWrapper */}
      <ParticleInteractionToggle 
        currentMode={interactionMode}
        onToggle={handleToggleInteraction}
      />
      <ParticleColorSelector
        availableColors={particleColors}
        currentColor={particleColor}
        onColorChange={handleParticleColorChange}
      />
      {children}
    </>
  );
}

// Assuming SettingsProvider is from '@/context/SettingsContext' as per original structure
// If it's not used or from a different place, this might need adjustment.
// For now, I'm keeping it as it was in the provided file content.
// If SettingsProvider is not actually used, it can be removed.
import { SettingsProvider } from '@/context/SettingsContext'; // Moved here for clarity if used

const AppClientWrapper: React.FC<AppClientWrapperProps> = ({ children }) => {
  // If SettingsProvider is essential, it should wrap InnerClientLogic.
  // If not, InnerClientLogic can be returned directly.
  // The `useTheme` from `next-themes` is typically used at a higher level or where theme decisions are made.
  // If `InnerClientLogic` or its children don't need `resolvedTheme`, `useTheme()` call can be removed from there.
  
  // Minimal wrapper if SettingsProvider is not strictly needed here or is handled elsewhere
  // return <InnerClientLogic>{children}</InnerClientLogic>; 

  // Wrapper with SettingsProvider as per the viewed file content
  return (
    <SettingsProvider> 
      <InnerClientLogic>{children}</InnerClientLogic>
    </SettingsProvider>
  );
};

export default AppClientWrapper;
