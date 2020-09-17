import React, { lazy, useCallback, useEffect, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import profileAct from "@zef/pages/profile/actions";
import Spins from "@zef/components/spins";

const routes = [
  {
    path: "/",
    component: lazy(() => import("@zef/pages/logins")),
    exact: true,
  },
  {
    path: "/user",
    component: lazy(() => import("@zef/pages/user")),
    exact: true,
    private: false,
  },
  {
    path: "/user/detail/:detailId",
    component: lazy(() => import("@zef/pages/detail")),
    exact: true,
    private: false,
  },
  {
    path: "/register",
    component: lazy(() => import("@zef/pages/register")),
    exact: true,
  },
];

const AppRouter = () => {
  const dispatch = useDispatch();
  const firstCall = useSelector((state) => state.profile.firstCall);
  useEffect(() => {
    dispatch(profileAct.reAuth());
  }, []);

  if (firstCall) {
    return <Spins />;
  } else {
    return (
      <Suspense fallback={<Spins />}>
        <Router>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </Router>
      </Suspense>
    );
  }
};

function RouteWithSubRoutes(route) {
  const isAuth = useSelector((state) => state.profile.isAuth);
  const renderComponent = useCallback(
    (props) => {
      if (isAuth && ["/", "/register"].indexOf(route.path) > -1) {
        return <Redirect to="/user" />;
      }
      if (route.private && !isAuth) {
        return <Redirect to="/" />;
      }
      return <route.component {...props} routes={route.routes} />;
    },
    [route.path, isAuth, route.private, route.routes]
  );
  return <Route path={route.path} render={renderComponent} />;
}

export default AppRouter;
