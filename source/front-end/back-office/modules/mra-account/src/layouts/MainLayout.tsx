import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./Routes/Routes";
import StyleProvider from "./StyleProvider";

const MainLayout = () => {
  return (
    <StyleProvider>
      <Router>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </StyleProvider>
  );
};

export default MainLayout;
