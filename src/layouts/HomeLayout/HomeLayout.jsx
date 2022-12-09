import s from './HomeLayout.module.scss';
import Particles from '../../components/UIElements/Particles/Particles';
import Nav from '../../components/Nav/Nav';

import Space from '../../components/UIElements/Space/Space';
import SunLight from '../../assets/lottie/sun-light.json';
import SunDark from '../../assets/lottie/sun-dark.json';
import DisplayLottie from '../../components/UIElements/Lottie/Lottie';

const HomeLayout = ({ children }) => {
  return (
    <div className={s.layout}>
      <Particles />
      <DisplayLottie
        lottieId="main-sun"
        addClass={s.sun}
        animationLight={SunLight}
        animationDark={SunDark}
      />
      <Space />
      <Nav />
      {children}
    </div>
  );
};

export default HomeLayout;
