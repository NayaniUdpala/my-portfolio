import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';
export function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  return <Particles id="tsparticles" init={particlesInit} className="absolute inset-0 z-0" options={{
    background: {
      color: {
        value: '#000000'
      }
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: '#fbbf24'
      },
      links: {
        color: '#fbbf24',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: false,
        straight: false,
        outModes: {
          default: 'bounce'
        }
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 80
      },
      opacity: {
        value: 0.3
      },
      shape: {
        type: 'circle'
      },
      size: {
        value: {
          min: 1,
          max: 3
        }
      }
    },
    detectRetina: true
  }} />;
}