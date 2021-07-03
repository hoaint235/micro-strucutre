import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListUsers from "../pages/ListUsers";
import { MaterialProvider } from "../theme";

const Routes = () => {
  return (
    <MaterialProvider>
      <Router>
        <Switch>
          <Route exact path="/users">
            <ListUsers />
          </Route>
        </Switch>
      </Router>
    </MaterialProvider>
  );
};

export default Routes;
