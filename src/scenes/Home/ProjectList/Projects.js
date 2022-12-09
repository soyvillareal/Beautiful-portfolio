import Tubeak from '../../../assets/projects/tubeak.png';
import PHPMagazine from '../../../assets/projects/php-magazine.png';
import Edutka from '../../../assets/projects/edutka.png';
import AppBienestar from '../../../assets/projects/app-bienestar.png';

const Projects = [
  {
    title: 'Tubeak',
    text: 'Sitio web para compartir, ver videos y transmitir en vivo.',
    img: Tubeak,
    links: {
      source: 'https://github.com/soyvillareal/Tubeak',
    },
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'PHP',
      'MySQL',
      'Apache',
      'NGINX',
    ],
  },
  {
    title: 'PHP Magazine',
    text: 'Revista digital para periodicos o blogueros.',
    img: PHPMagazine,
    links: {
      demo: 'https://phpmagazine.soyvillareal.com',
      source: 'https://github.com/soyvillareal/php-magazine',
    },
    tags: [
      'HTML',
      'AMP',
      'CSS',
      'JQuery',
      'PHP',
      'NodeJS',
      'MySQL',
      'Apache',
    ],
  },
  {
    title: 'Edutka SGA',
    text: 'Plataforma de gestion academico administrativo',
    img: Edutka,
    links: {
      demo: 'https://edutka.soyvillareal.com',
      source: 'https://github.com/soyvillareal/Edutka-SGA',
    },
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Apache'],
  },
  {
    title: 'App Bienestar',
    text: 'Aplicación para el control y registro de puntos en bienestar universitario.',
    img: AppBienestar,
    links: {
      source: 'https://github.com/soyvillareal/AppBienestar',
    },
    tags: ['Ionic', 'Angular', 'TypeScript', 'Firebase'],
  },
];

export default Projects;