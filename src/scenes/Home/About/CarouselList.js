import s from './About.module.scss';
import aboutImage from '../../../assets/about/ventures.jpg';
import devicesLight from '../../../assets/lottie/devices-light.json';
import devicesDark from '../../../assets/lottie/devices-dark.json';
import health from '../../../assets/lottie/health.json';

const CarouselList = [
  {
    subtitle: (
      <>
        Desarrollador <b className={s.purple}>Web</b>
      </>
    ),
    description: (
      <>
        <p>
          Durante el transcurso de mis estudios universitarios,{' '}
          <b className={s.purple}>
            experimenté con muchas tecnologías
          </b>
          , y aunque todas y cada una de ellas tiene un potencial
          increíble, no dudé ni un segundo en elegir el desarrollo web
          para convertirlo en mi pasatiempo.
        </p>

        <p>
          Hoy en día, luego de haberme graduado, puedo decir que fue
          la mejor decisión que pude tomar en mi vida. Sin embargo,{' '}
          <b className={s.purple}>
            no estoy cerrado por completo a otras áreas de esta
            industria
          </b>
          .
        </p>
      </>
    ),
    image: {
      type: 'svg',
      src: devicesLight,
      srcDark: devicesDark,
      position: 'right',
    },
  },
  {
    subtitle: (
      <>
        Ventures <span className={s.purple}>Summit</span> 2019
      </>
    ),
    description: (
      <>
        <p>
          Durante mi época universitaria, tuve la oportunidad de
          participar en uno de los eventos que ha marcado un antes y
          un después en mi vida, tanto profesional como personal.
        </p>

        <p>
          Me refiero a
          <i>
            <b className={s.purple}> INNOVA Latam. </b>
          </i>
          Esta fue, sin duda alguna, una experiencia enriquecedora
          para mí, donde pude exponer mi vida como emprendedor y
          escuchar a grandes empresarios de la industria de la
          tecnología.
        </p>
      </>
    ),
    image: {
      type: 'png',
      src: aboutImage,
      position: 'left',
    },
  },
  {
    subtitle: (
      <>
        Una vida <b className={s.purple}>saludable</b>
      </>
    ),
    description: (
      <>
        <p>
          Sé que este es un <b className={s.purple}>trabajo duro</b>,
          ser programador puede llegar a ser muy{' '}
          <b className={s.purple}>exigente</b> y hasta cierto punto
          puede llegar a afectar la salud de una persona si no tiene
          cuidado. Es por eso que me mantengo en{' '}
          <b className={s.purple}>constante entrenamiento</b>, procuro
          entrenar activamente mi{' '}
          <b className={s.purple}>cuerpo y mi mente</b>, yendo al
          gimnasio y estudiando.
        </p>
      </>
    ),
    image: {
      type: 'svg',
      src: health,
      addClass: s.svgHealth,
      position: 'right',
    },
  },
];

export default CarouselList;
