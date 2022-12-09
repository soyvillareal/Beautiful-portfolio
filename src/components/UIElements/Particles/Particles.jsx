import React from 'react';
import { loadFull } from 'tsparticles';
import ReactParticles from 'react-tsparticles';
import { useThemeContext } from '../../../hooks/themeHook/themeHook';

const Particles = () => {
  const { dark } = useThemeContext();

  const particlesInit = React.useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particles = {
    number: {
      value: 100,
      density: {
        enable: true,
        area: 1500,
      },
    },
    move: {
      enable: true,
      direction: 'right',
      speed: 0.05,
    },
    size: {
      value: 1,
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.05,
      },
    },
  };

  if(!dark){
    particles.color = '#000';
  }

  return (
    <ReactParticles
      init={particlesInit}
      params={{
        particles: particles,
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default Particles;
