"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SettingsContextType {
  isParticleEffectEnabled: boolean;
  toggleParticleEffect: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isParticleEffectEnabled, setParticleEffectEnabled] = useState(true);

  const toggleParticleEffect = () => {
    setParticleEffectEnabled(prevState => !prevState);
  };

  return (
    <SettingsContext.Provider value={{ isParticleEffectEnabled, toggleParticleEffect }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
