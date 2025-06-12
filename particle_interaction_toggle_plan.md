# Particle Interaction Toggle - Implementation Plan

## 1. Overview

The goal is to add a UI toggle that allows the user to switch the mouse hover interaction for the `tsparticles` background effect. The two modes are:
1.  **Repulse**: Particles move away from the mouse cursor.
2.  **Attract**: Particles move towards the mouse cursor.

This will be achieved by dynamically updating the `tsparticles` configuration based on the selected mode.

## 2. State Management

*   **Component**: `app/AppClientWrapper.tsx` (specifically within `InnerClientLogic`)
*   **Details**:
    *   Introduce a React state variable to store the current interaction mode.
        *   Type: `'repulse' | 'attract'`
        *   Default: `'repulse'`
        *   Example: `const [interactionMode, setInteractionMode] = useState<'repulse' | 'attract'>('repulse');`
    *   Create a handler function to toggle this state.
        *   Example:
            ```typescript
            const handleToggleInteraction = () => {
              setInteractionMode(prevMode => prevMode === 'repulse' ? 'attract' : 'repulse');
            };
            ```
*   **Rationale**: `AppClientWrapper.tsx` is a suitable high-level component to manage this global UI state, as it already handles the particle background's lifecycle.

## 3. Particle Component Modification

*   **Component**: `app/components/animations/TsParticleBackground.tsx`
*   **Details**:
    *   **Props Update**:
        *   Modify the component's props interface to accept an `interactionMode` prop.
        *   Example:
            ```typescript
            interface TsParticleBackgroundProps {
              interactionMode: 'repulse' | 'attract';
            }
            const TsParticleBackground: React.FC<TsParticleBackgroundProps> = ({ interactionMode }) => { /* ... */ };
            ```
    *   **Dynamic Options**:
        *   Inside the `options` object passed to the `<Particles>` component, locate the `interactivity.modes.repulse` configuration.
        *   Dynamically set the `strength` property based on the `interactionMode` prop.
            *   `tsparticles` uses a positive `strength` for repulsion (e.g., `100`).
            *   It uses a negative `strength` for attraction (e.g., `-100`).
        *   Example (within `options.interactivity.modes.repulse`):
            ```javascript
            strength: interactionMode === 'attract' ? -100 : 100,
            ```
*   **Rationale**: This allows the particle behavior to be controlled by props. The `react-tsparticles` component should re-initialize with new options when its `options` prop changes.

## 4. UI Toggle Component Creation

*   **File**: `app/components/ui/ParticleInteractionToggle.tsx` (New file)
*   **Details**:
    *   Create a new React functional component.
    *   **Props**:
        *   `currentMode: 'repulse' | 'attract'`
        *   `onToggle: () => void`
    *   **Functionality**:
        *   Render a button or switch element.
        *   Display text indicating the current mode (e.g., "Mode: Push Away" or "Mode: Pull Towards").
        *   Call the `onToggle` prop when the button is clicked.
    *   **Styling**:
        *   Position fixed on the screen (e.g., bottom-right) with a `z-index` high enough to be above other elements (e.g., `z-50`).
        *   Apply appropriate styling for visibility and usability.
    *   Example Structure:
        ```typescript
        // app/components/ui/ParticleInteractionToggle.tsx
        'use client';
        import React from 'react';

        interface ParticleInteractionToggleProps {
          currentMode: 'repulse' | 'attract';
          onToggle: () => void;
        }

        const ParticleInteractionToggle: React.FC<ParticleInteractionToggleProps> = ({ currentMode, onToggle }) => {
          return (
            <button
              onClick={onToggle}
              className="fixed bottom-5 right-5 z-50 p-3 bg-slate-700 hover:bg-slate-600 text-white text-sm rounded-lg shadow-lg transition-colors duration-150 ease-in-out"
              aria-label={`Toggle particle interaction mode, current mode: ${currentMode === 'repulse' ? 'Push Away' : 'Pull Towards'}`}
            >
              Mode: {currentMode === 'repulse' ? 'Push Away' : 'Pull Towards'}
            </button>
          );
        };
        export default ParticleInteractionToggle;
        ```
*   **Rationale**: Encapsulates the toggle's UI and behavior into a reusable component.

## 5. Integration

*   **Component**: `app/AppClientWrapper.tsx` (within `InnerClientLogic`)
*   **Details**:
    *   **Import**: Import the newly created `ParticleInteractionToggle` component.
    *   **Pass Props to `TsParticleBackground`**:
        *   When rendering `<TsParticleBackground />`, pass the `interactionMode` state as a prop.
        *   Example: `<TsParticleBackground interactionMode={interactionMode} />`
    *   **Render Toggle**:
        *   Render the `<ParticleInteractionToggle />` component.
        *   Pass the `interactionMode` state as the `currentMode` prop.
        *   Pass the `handleToggleInteraction` function as the `onToggle` prop.
        *   Example: `<ParticleInteractionToggle currentMode={interactionMode} onToggle={handleToggleInteraction} />`
*   **Rationale**: Connects the state management, particle component, and UI toggle to enable the dynamic interaction feature.

## 6. Expected Behavior

When the toggle button is clicked:
1. The `interactionMode` state in `AppClientWrapper.tsx` updates.
2. This new mode is passed as a prop to `TsParticleBackground.tsx`.
3. `TsParticleBackground.tsx` reconstructs its `options` object with the new `strength` for the repulse effect.
4. The `react-tsparticles` component re-initializes with the new options, changing the mouse hover behavior.
