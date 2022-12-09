import React from 'react';
import {
  Route,
  Switch,
  useLocation,
  useHistory,
} from 'react-router-dom';
const Home = React.lazy(() => import('../scenes/Home/Home'));
const Curriculum = React.lazy(() =>
  import('../scenes/Curriculum/Curriculum'),
);

export const routes = {
  HOME: '/',
  CURRICULUM: '/curriculum',
};

const BaseRoutes = () => {
  const location = useLocation();
  const history = useHistory();
  const background = location.state?.background;

  React.useEffect(() => {
    return () => {
      if (history.action !== 'POP') {
        window.scrollTo(0, 0);
      }
    };
  }, [location, history]);

  return (
    <>
      <Switch location={background || location}>
        <Route path={routes.HOME} exact component={Home} />
        <Route path={routes.CURRICULUM} component={Curriculum} />
      </Switch>
    </>
  );
};

export default BaseRoutes;
