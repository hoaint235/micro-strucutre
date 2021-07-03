import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthLayout } from "../layouts";

const Routes = () => {
  return (
    <Fragment>
      <Router>
        <AuthLayout>
          <Switch>
            <Route exact path="/users">
              <div id="single-spa-application:@mra/account"></div>
            </Route>
          </Switch>
        </AuthLayout>
      </Router>
    </Fragment>
  );
};

export default Routes;
