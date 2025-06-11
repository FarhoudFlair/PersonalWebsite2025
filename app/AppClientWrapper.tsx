"use client";

import React from 'react';
import { SettingsProvider, useSettings } from '@/context/SettingsContext';
import TsParticleBackground from '@/components/animations/TsParticleBackground';

interface AppClientWrapperProps {
  children: React.ReactNode;
}

function InnerClientLogic({ children }: { children: React.ReactNode }) {
  // const { isParticleEffectEnabled } = useSettings(); // Setting is no longer used here if particles are always on
  return (
    <>
      <TsParticleBackground />
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
