import s from './Education.module.scss';
import lottieGraduateLight from '../../../assets/lottie/avatar-light.json';
import lottieGraduateDark from '../../../assets/lottie/avatar-dark.json';
import DisplayLottie from '../../../components/UIElements/Lottie/Lottie';

const About = () => {

  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Educación
      </h1>
      <div className={s.content}>
        <div className={s.aboutHeader}>
          <h2 className={s.subTitle}>
            <span className={s.purple}>Graduado de Ingeniería 👨‍💻</span>
          </h2>
          <div className={s.description}>
            <p>
              Soy Ingeniero Informático, me gradue de mi universidad
              con <b className={s.purple}>merito por investigación</b>{' '}
              debido a la tesis desarrollada junto a mis compañeros.
              Tengo una gran pasión por el desarrollo web Front-end y
              Back-end.
            </p>

            <p>
              Me efuerzo cada día por ser mejor persona y profesional,{' '}
              <b className={s.purple}>me encanta aprender</b>,
              colaborar en proyectos de codigo abierto y siempre estoy
              experimentando nuevas tecnologias.
            </p>
          </div>
        </div>

        <DisplayLottie
          lottieId="main-graduate"
          addClass={s.graduateIntroIcon}
          animationLight={lottieGraduateLight}
          animationDark={lottieGraduateDark}
        />
      </div>
    </div>
  );
};

export default About;
