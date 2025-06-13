'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPalette, FaTimes } from 'react-icons/fa';

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-16 right-4 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-lg shadow-lg flex flex-col items-center space-y-2 mb-2"
          >
            <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Color</p>
            <div className="flex space-x-2">
              {availableColors.map((color) => (
                <button
                  key={color.value}
                  type="button"
                  title={color.name}
                  aria-label={`Select color ${color.name}`}
                  onClick={() => onColorChange(color.value)}
                  className={`w-6 h-6 rounded-full border-2 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 ${
                    currentColor === color.value
                      ? 'ring-2 ring-offset-1 ring-offset-gray-100 dark:ring-offset-gray-900 ring-primary-500'
                      : 'border-gray-300 dark:border-gray-600 hover:border-gray-500 dark:hover:border-gray-400'
                  }`}
                  style={{ backgroundColor: color.value }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-500"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Close color picker' : 'Open color picker'}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? 'times' : 'palette'}
            initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.5 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            {isOpen ? <FaTimes size={20} /> : <FaPalette size={20} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default ParticleColorSelector;
