import s from './BaseLayout.module.scss';
import Particles from '../../components/UIElements/Particles/Particles';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';

import Space from '../../components/UIElements/Space/Space';

const BaseLayout = ({ children }) => {
  return (
    <div className={s.layout}>
      <Particles />
      <Space />
      <Nav />
      <div className={s.container}>{children}</div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
