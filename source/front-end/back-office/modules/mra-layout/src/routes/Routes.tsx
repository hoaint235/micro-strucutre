import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthLayout, NoAuthLayout } from "../layouts";

const routes = [
  {
    module: "@mra/account",
    path: ["/users"],
    auth: true,
  },
  {
    module: "@mra/authentication",
    path: ["/sign-in", "/forgot-password"],
  },
];

const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          {routes.map((route) => (
            <Fragment key={route.module}>
              {route.path.map((path) => (
                <Route exact path={path}>
                  {route.auth ? (
                    <AuthLayout>
                      <div id={`single-spa-application:${route.module}`}></div>
                    </AuthLayout>
                  ) : (
                    <NoAuthLayout>
                      <div id={`single-spa-application:${route.module}`}></div>
                    </NoAuthLayout>
                  )}
                </Route>
              ))}
            </Fragment>
          ))}
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Routes;
