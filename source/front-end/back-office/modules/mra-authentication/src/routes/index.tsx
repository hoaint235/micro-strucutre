import { MProvider } from "@mra/theme";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ForgotPassword, SignIn } from "../pages";

const Routes = () => {
  return (
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
  );
};

export default Routes;
