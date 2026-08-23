'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import ParticleInteractionToggle from '@/components/ui/ParticleInteractionToggle';
import { cn } from '@/utils/cn';

interface ColorOption {
  name: string;
  value: string;
}

interface ParticleColorSelectorProps {
  availableColors: ColorOption[];
  currentColor: string;
  onColorChange: (colorValue: string) => void;
  currentMode: 'repulse' | 'attract';
  onToggleInteraction: () => void;
  prefersReducedMotion: boolean;
}

const PANEL_ID = 'particle-signal-controls-panel';
const PANEL_HEADING_ID = 'particle-signal-controls-heading';

const panelVariants = {
  closed: { opacity: 0, y: 8 },
  open: { opacity: 1, y: 0 },
};

const reducedMotionPanelVariants = {
  closed: { opacity: 1, y: 0 },
  open: { opacity: 1, y: 0 },
};

const panelTransition = { duration: 0.18, ease: 'easeOut' as const };
const reducedMotionPanelTransition = { duration: 0 };

function ParticleColorSelector({
  availableColors,
  currentColor,
  onColorChange,
  currentMode,
  onToggleInteraction,
  prefersReducedMotion,
}: ParticleColorSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const controlsRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const selectedColor = availableColors.find((color) => color.value === currentColor);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') {
        return;
      }

      event.preventDefault();
      setIsOpen(false);
      triggerRef.current?.focus();
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;

      if (target instanceof Node && !controlsRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isOpen]);

  return (
    <div ref={controlsRef} className="fixed bottom-4 right-4 z-40 flex flex-col items-end">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen((wasOpen) => !wasOpen)}
        className="flex h-11 items-center gap-2 border border-ink bg-ink px-3 text-canvas transition-colors hover:border-signal hover:bg-signal dark:hover:text-ink"
        data-studio-component="signal-controls"
        data-qa="signal-controls-toggle"
        aria-label={isOpen ? 'Close particle signal controls' : 'Open particle signal controls'}
        aria-expanded={isOpen}
        aria-controls={PANEL_ID}
      >
        <span className="metadata text-xs font-semibold uppercase tracking-widest">Signal</span>
        <span
          aria-hidden="true"
          className="h-3 w-3 border border-current"
          style={{ backgroundColor: currentColor }}
        />
        <span aria-hidden="true" className="text-base leading-none">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={PANEL_ID}
            role="region"
            aria-labelledby={PANEL_HEADING_ID}
            variants={prefersReducedMotion ? reducedMotionPanelVariants : panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={prefersReducedMotion ? reducedMotionPanelTransition : panelTransition}
            className="absolute bottom-full right-0 mb-2 w-80 max-w-[calc(100vw-2rem)] border border-trace bg-canvas text-ink will-change-transform"
          >
            <div className="flex items-end justify-between gap-4 border-b border-trace px-4 py-3">
              <div>
                <p className="metadata text-xs uppercase tracking-widest text-slate">
                  Particle field
                </p>
                <h2 id={PANEL_HEADING_ID} className="text-2xl font-semibold leading-none">
                  Signal controls
                </h2>
              </div>
              {selectedColor && (
                <p className="text-right text-xs font-medium text-slate">
                  {selectedColor.name}
                </p>
              )}
            </div>

            <div className="p-4">
              <ParticleInteractionToggle
                currentMode={currentMode}
                onToggle={onToggleInteraction}
              />

              <fieldset className="m-0 mt-5 min-w-0 border-0 p-0">
                <legend className="metadata text-xs font-semibold uppercase tracking-widest text-slate">
                  Signal color
                </legend>
                <div className="mt-2 border-y border-trace">
                  {availableColors.map((color) => {
                    const isSelected = currentColor === color.value;

                    return (
                      <button
                        key={color.value}
                        type="button"
                        onClick={() => onColorChange(color.value)}
                        aria-pressed={isSelected}
                        className={cn(
                          'flex min-h-11 w-full items-center gap-3 border-b border-trace px-1 py-2 text-left transition-colors last:border-b-0 hover:bg-trace/30',
                          isSelected && 'bg-trace/30'
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            'h-4 w-4 shrink-0 border',
                            isSelected ? 'border-ink' : 'border-trace'
                          )}
                          style={{ backgroundColor: color.value }}
                        />
                        <span className="text-sm font-medium">{color.name}</span>
                        <span
                          aria-hidden="true"
                          className={cn(
                            'metadata ml-auto text-xs uppercase',
                            isSelected ? 'font-semibold text-ink' : 'text-slate'
                          )}
                        >
                          {isSelected ? 'Selected' : color.value}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ParticleColorSelector;
