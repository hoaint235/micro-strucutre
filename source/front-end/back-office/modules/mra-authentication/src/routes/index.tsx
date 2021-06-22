import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForgotPassword from "../pages/ForgotPassword";
import SignIn from "../pages/SignIn";

const Routes = () => {
  return (
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
  );
};

export default Routes;
