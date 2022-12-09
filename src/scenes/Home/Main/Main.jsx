import s from './Main.module.scss';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import Coding from '../../../components/UIElements/Coding/Coding';

const Main = () => {
  return (
    <div className={s.content}>
      <div className={s.homeHeader}>
        <h2 style={{ paddingBottom: 15 }} className={s.title}>
          ¡Hola! <span className={s.wave}>👋🏻</span>
        </h2>

        <h1 className={s.mainTitle}>
          Soy
          <strong className={s.mainName}> Oscar Garcés</strong>
        </h1>

        <div style={{ paddingTop: 50 }}>
          <Typewriter
            strings={[
              'Ingeniero Informático',
              'Desarrollador Full Stack',
              'Desarrollador Web',
            ]}
            wrapperClassName={s.typewriterWrapper}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>
      
      
      <Coding codingClassName={s.codingMainIcon}/>
      
    </div>
  );
};

export default Main;
