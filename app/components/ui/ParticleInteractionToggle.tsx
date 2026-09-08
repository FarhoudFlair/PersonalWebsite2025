'use client';

import { cn } from '@/utils/cn';

interface ParticleInteractionToggleProps {
  currentMode: 'repulse' | 'attract';
  onToggle: () => void;
}

const interactionModes = [
  { label: 'Attract', value: 'attract' },
  { label: 'Repulse', value: 'repulse' },
] as const;

function ParticleInteractionToggle({
  currentMode,
  onToggle,
}: ParticleInteractionToggleProps) {
  return (
    <fieldset className="m-0 min-w-0 border-0 p-0">
      <legend className="metadata text-xs font-semibold uppercase tracking-widest text-slate">
        Interaction
      </legend>
      <div className="mt-2 grid grid-cols-2 border border-trace">
        {interactionModes.map((mode, index) => {
          const isSelected = currentMode === mode.value;

          return (
            <button
              key={mode.value}
              type="button"
              onClick={isSelected ? undefined : onToggle}
              aria-pressed={isSelected}
              className={cn(
                'min-h-11 px-3 py-2 text-sm font-medium transition-colors',
                index > 0 && 'border-l border-trace',
                isSelected
                  ? 'bg-signal text-canvas dark:text-ink'
                  : 'bg-canvas text-ink hover:bg-trace/40'
              )}
            >
              {mode.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export default ParticleInteractionToggle;
