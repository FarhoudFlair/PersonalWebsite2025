'use client';

import React from 'react';

interface ParticleInteractionToggleProps {
  currentMode: 'repulse' | 'attract';
  onToggle: () => void;
}

const ParticleInteractionToggle: React.FC<ParticleInteractionToggleProps> = ({ currentMode, onToggle }) => {
  const isAttractMode = currentMode === 'attract'; // 'attract' corresponds to "Pull Towards"
  return (
    <button
      type="button" // Added type attribute
      onClick={onToggle}
      className="fixed bottom-5 right-5 z-50 p-3 bg-slate-700 hover:bg-slate-600 text-white text-sm rounded-lg shadow-lg transition-colors duration-150 ease-in-out"
      aria-label={`Toggle particle interaction mode, current mode: ${currentMode === 'repulse' ? 'Push Away' : 'Pull Towards'}`}
      aria-pressed={isAttractMode} // Added ARIA pressed state
    >
      Mode: {currentMode === 'repulse' ? 'Push Away' : 'Pull Towards'}
    </button>
  );
};

export default ParticleInteractionToggle;
