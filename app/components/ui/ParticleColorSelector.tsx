'use client';

import React from 'react';

interface ColorOption {
  name: string;
  value: string;
}

interface ParticleColorSelectorProps {
  availableColors: ColorOption[];
  currentColor: string;
  onColorChange: (colorValue: string) => void;
}

const ParticleColorSelector: React.FC<ParticleColorSelectorProps> = ({
  availableColors,
  currentColor,
  onColorChange,
}) => {
  return (
    <div className="fixed bottom-16 right-4 z-50 p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-lg shadow-lg flex flex-col space-y-2">
      <p className="text-xs font-medium text-gray-700 dark:text-gray-300 px-1 text-center">Color</p>
      {availableColors.map((color) => (
        <button
          key={color.value}
          type="button" // Added type attribute
          title={color.name}
          aria-label={`Select color ${color.name}`} // Added ARIA label
          onClick={() => onColorChange(color.value)}
          className={`w-6 h-6 rounded-full border-2 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900
            ${currentColor === color.value ? 'ring-2 ring-offset-1 ring-offset-gray-100 dark:ring-offset-gray-900 ring-blue-500' : 'border-gray-300 dark:border-gray-600 hover:border-gray-500 dark:hover:border-gray-400'}`}
          style={{ backgroundColor: color.value }}
        />
      ))}
    </div>
  );
};

export default ParticleColorSelector;
