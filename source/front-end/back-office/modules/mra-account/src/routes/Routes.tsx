import { MProvider } from "@mra/theme";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListUsers from "../pages/ListUsers";

const Routes = () => {
  return (
    <MProvider name="mra-account">
      <Router>
        <Switch>
          <Route exact path="/users">
            <ListUsers />
          </Route>
        </Switch>
      </Router>
    </MProvider>
  );
};

export default Routes;
