"use client";

import React, { lazy, Suspense, useState, useEffect } from 'react';
import { SettingsProvider, useSettings } from '@/context/SettingsContext';

// Dynamically import the TsParticleBackground component
const TsParticleBackground = lazy(() => import('@/components/animations/TsParticleBackground'));

interface AppClientWrapperProps {
  children: React.ReactNode;
}

function InnerClientLogic({ children }: { children: React.ReactNode }) {
  // Add state to delay loading particles until after main content
  const [showParticles, setShowParticles] = useState(false);
  
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
        <Suspense fallback={<div className="absolute inset-0" />}>
          <TsParticleBackground />
        </Suspense>
      )}
      {children}
    </>
  );
}

const AppClientWrapper: React.FC<AppClientWrapperProps> = ({ children }) => {
  return (
    <SettingsProvider>
      <InnerClientLogic>{children}</InnerClientLogic>
    </SettingsProvider>
  );
};

export default AppClientWrapper;
