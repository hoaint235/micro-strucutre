import { MProvider } from "@mra/theme";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ForgotPassword, SignIn } from "../pages";
import { NoAuthLayout } from "@mra/layout";

const Routes = () => {
  return (
    <NoAuthLayout>
      <MProvider name="mra-authentication">
        <Router>
          <Switch>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route path="/forgot-password">
              <ForgotPassword />
            </Route>
          </Switch>
        </Router>
      </MProvider>
    </NoAuthLayout>
  );
};

export default Routes;
