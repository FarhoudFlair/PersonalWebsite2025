'use client';

import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

const TsParticleBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 w-full h-full -z-10"
      options={{
        fullScreen: {
          enable: true, // Use fullscreen for maximum coverage
          zIndex: -1
        },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60, // Lower for better performance with many particles
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
              parallax: { enable: true, force: 80, smooth: 10 }
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              links: { opacity: 0.8 }
            },
            push: {
              quantity: 10, // Many more particles on click
            },
            bubble: {
              distance: 200,
              duration: 2,
              opacity: 0.8,
              size: 12,
              speed: 3
            },
          },
        },
        particles: {
          color: {
            value: ["#00c896", "#00e1a9", "#009fdb", "#4dabf5", "#00f0ff"]
          },
          links: {
            color: {
              value: "#00c896"
            },
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1.2,
            triangles: {
              enable: true,
              opacity: 0.1
            },
            warp: false
          },
          collisions: {
            enable: false, // Disable collisions for more density
          },
          move: {
            angle: {
              offset: 0,
              value: 90
            },
            direction: "none",
            enable: true,
            outModes: {
              default: "out", // Changed from bounce to out for more fluid movement
            },
            random: false,
            speed: { min: 0.3, max: 1.2 },
            straight: false,
            trail: {
              enable: false,
              length: 10,
              fillColor: {
                value: "#000000"
              }
            },
            attract: {
              enable: false,
              rotateX: 500,
              rotateY: 1200,
            },
          },
          number: {
            density: {
              enable: true,
              area: 800, // Increased area for better performance
            },
            value: 150, // Reduced number of particles for performance
            limit: 300, // Reduced limit
          },
          groups: {
            z5000: {
              number: {
                value: 70, // More group particles
              },
              particles: {
                color: {
                  value: ["#00e1a9", "#00f0ff"],
                },
                move: {
                  distance: 100,
                  enable: true,
                  speed: { min: 0.5, max: 1 },
                },
                size: {
                  value: { min: 1, max: 2.5 },
                },
                opacity: {
                  value: { min: 0.6, max: 0.9 },
                },
              },
            },
            z7500: {
              number: {
                value: 50,
              },
              particles: {
                color: {
                  value: ["#009fdb", "#0084ff"],
                },
                move: {
                  distance: 150,
                  enable: true,
                  speed: { min: 0.3, max: 0.7 },
                },
                size: {
                  value: { min: 1.5, max: 3.5 },
                },
                opacity: {
                  value: { min: 0.4, max: 0.7 },
                },
              },
            },
          },
          opacity: {
            value: { min: 0.25, max: 0.5 },
            animation: {
              enable: true,
              speed: 0.8,
              minimumValue: 0.1,
              sync: false
            }
          },
          shape: {
            type: ["circle", "triangle", "polygon"],
            options: {
              polygon: {
                sides: 6
              }
            }
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 1.5,
              minimumValue: 0.1,
              sync: false
            }
          },
          twinkle: {
            lines: {
              enable: false,
              frequency: 0.01,
              opacity: 0.5,
              color: {
                value: "#00e1a9"
              }
            },
            particles: {
              enable: false,
              frequency: 0.1,
              opacity: 0.8,
              color: {
                value: "#00f0ff"
              }
            }
          }
        },
        detectRetina: true,
      }}
    />
  );
};

export default TsParticleBackground;
