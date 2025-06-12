'use client';

import React, { useCallback, useMemo } from 'react'; // Removed useRef and useEffect for manual refresh, Container type
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles'; 
import { type Engine, type ISourceOptions } from 'tsparticles-engine'; // Removed Container type

interface TsParticleBackgroundProps {
  interactionMode: 'repulse' | 'attract';
  particleColor: string; // New prop for particle color
}

const TsParticleBackground: React.FC<TsParticleBackgroundProps> = ({ 
  interactionMode, 
  particleColor 
}) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const currentOptions = useMemo<ISourceOptions>(() => ({
        fullScreen: {
          enable: true,
          zIndex: 1,
        },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: interactionMode, 
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100, 
              duration: 0.4, 
            },
            attract: {
              distance: 200,
              duration: 0.4, 
              speed: 3, 
            },
          },
        },
        particles: {
          color: {
            value: particleColor, 
          },
          links: {
            color: particleColor, 
            distance: 150,
            enable: true,
            opacity: 0.25,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none", 
            enable: true,
            outModes: {
              default: "bounce", 
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.25,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }), [interactionMode, particleColor]);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 w-full h-full"
      options={currentOptions} 
    />
  );
};

export default TsParticleBackground;
