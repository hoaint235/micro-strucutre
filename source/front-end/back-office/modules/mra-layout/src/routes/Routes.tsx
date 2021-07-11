import { MProvider } from "@mra/theme";
import React from "react";
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
    auth: false,
  },
];

const Routes = () => {
  return (
    <MProvider name="mra-layout">
      <Router>
        <Switch>
          <Route exact path="/users">
            <AuthLayout>
              <div id={`single-spa-application:@mra/account`}></div>
            </AuthLayout>
          </Route>
          <Route exact path="/sign-in">
            <NoAuthLayout>
              <div id={`single-spa-application:@mra/authentication`}></div>
            </NoAuthLayout>
          </Route>
          <Route exact path="/forgot-password">
            <NoAuthLayout>
              <div id={`single-spa-application:@mra/authentication`}></div>
            </NoAuthLayout>
          </Route>
          {/* {routes.map((route) => (
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
        ))} */}
        </Switch>
      </Router>
    </MProvider>
  );
};

export default Routes;
