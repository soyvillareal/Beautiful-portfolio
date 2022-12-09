import s from './Nav.module.scss';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { MdChangeCircle } from 'react-icons/md';
import throttle from 'lodash.throttle';
import BtnToggleTheme from '../BtnToggleTheme/BtnToggleTheme';
import { routes } from '../../routes/BaseRoutes';
import Button from '../../components/UIElements/Button/Button';
import info from '../../assets/lottie/info.json';
import DisplayLottie from '../../components/UIElements/Lottie/Lottie';

import { NavsNon, NavsCollapse } from './Navs';

const Nav = () => {
  const location = useLocation();

  const [active, setActive] = React.useState('#main');

  let btns = document.querySelectorAll('.btn_carousel'),
    chgButtons = React.useCallback(
      (hide = !1) => {
        btns.forEach((btn) => {
          if (btn.getAttribute('section') === active) {
            btn.style.bottom = hide ? '-100px' : '';
          } else {
            btn.style.bottom = '-100px';
          }
        });
      },
      [active, btns],
    );

  let navResize = React.useCallback(() => {
    let width =
        window.innerWidth || document.documentElement.clientWidth,
      nav = document.querySelector('#navigation'),
      items = document.querySelectorAll('.link_nav');

    if (
      ['#projects', '#about'].indexOf(active) !== -1 &&
      width <= 425
    ) {
      nav.style.gap = '0.6rem';
      nav.firstChild.style.gap = '0.6rem';
      items.forEach((el) => {
        el.style.fontSize = '1.2rem';
        el.style.padding = '0.6rem';
      });
    } else {
      nav.style.gap = '';
      nav.firstChild.style.gap = '';
      items.forEach((el) => {
        el.removeAttribute('style');
      });
    }
  }, [active]);

  let changeNav = () => {
    if (document.body.classList.contains(s.showNavChange)) {
      document.body.classList.add(s.showBtnChange);
      chgButtons(!0);
    } else {
      document.body.classList.remove(s.showBtnChange);
      chgButtons();
    }
    document.body.classList.toggle(s.showNavChange);
    navResize();
  };

  React.useEffect(() => {
    let buttons = () => {
      NavsCollapse.forEach((Ns) => {
        var element = document.querySelector(Ns.href),
          distance = element.getBoundingClientRect(),
          height =
            window.innerHeight ||
            document.documentElement.clientHeight;

        if (distance.top < height * 0.7 && distance.bottom > 0) {
          setActive(Ns.href);
          navResize();
        }
      });
    };
    if (location.pathname === routes.HOME) {
      document.addEventListener('scroll', buttons);
      window.addEventListener('resize', throttle(buttons, 3000));

      window.history.pushState(null, '', active);

      if (['#about', '#projects'].indexOf(active) !== -1) {
        document.body.classList.remove(s.showBtnChange);
        document.body.classList.add(s.showNavChange);
        chgButtons();
      } else {
        document.body.classList.remove(s.showNavChange);
        document.body.classList.remove(s.showBtnChange);
        chgButtons(!0);
      }
    }
    return () => {
      document.removeEventListener('scroll', buttons);
      window.removeEventListener('resize', buttons);
    };
  }, [active, location, navResize, chgButtons]);

  return (
    <>
      <Button
        addClass={`${s.navButton} ${s.changeNav}`}
        onClick={() => changeNav()}
      >
        <MdChangeCircle />
      </Button>
      <nav id="navigation" className={s.containerNavigation}>
        {active === '#contact'
          ? [
              NavsNon.map((Ns, i) => (
                <Button
                  key={i}
                  href={Ns.href}
                  addClass={`${s.navButton} ${
                    active === Ns.href ? s.navButtonActive : ''
                  }`}
                  onClick={() => setActive(Ns.href)}
                >
                  {Ns.icon}
                </Button>
              )),
              <NavLink
                key={routes.CURRICULUM}
                to={routes.CURRICULUM}
                className={`${s.navButton}  ${s.navLink}`}
              >
                <DisplayLottie
                  lottieId="contact-info"
                  addClass={s.graduateIntroIcon}
                  animationLight={info}
                />
              </NavLink>,
            ]
          : location.pathname === routes.HOME && (
              <div className={s.contentNavigation}>
                {NavsCollapse.map((Ns, i) => (
                  <Button
                    key={i}
                    href={Ns.href}
                    addClass={`link_nav ${s.navButton} ${
                      active === Ns.href ? s.navButtonActive : ''
                    }`}
                    onClick={() => setActive(Ns.href)}
                  >
                    {Ns.icon}
                  </Button>
                ))}
              </div>
            )}

        {location.pathname === routes.CURRICULUM && (
          <NavLink to={routes.HOME} className={s.navButton}>
            <BiArrowBack />
          </NavLink>
        )}
        <BtnToggleTheme toggleClassName={`link_nav ${s.navButton}`} />
      </nav>
    </>
  );
};

/*
const MainNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <Logo className={s.desktop} />

      <nav className={s.desktop}>
        <NavLinks />
        <BtnToggleTheme />
      </nav>

      <Media query={{ maxWidth: 768 }}>
        {() => (
          <>
            <Burger onClick={toggleDrawer} />

            <Logo className={s.mobile} />

            <BtnToggleTheme className={s.mobile} />
          </>
        )}
      </Media>

      <SideDrawer show={isDrawerOpen} onClose={toggleDrawer}>
        <nav className={s.navigationDrawerNav}>
          <NavLinks />
        </nav>
      </SideDrawer>
    </>
  );
};
*/

export default Nav;
