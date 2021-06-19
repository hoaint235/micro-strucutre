import React, { Fragment } from "react";
import { RouteItem } from "../../../components";
import { Routes as routes } from "../../../utils/configurations";

const Routes = (props) => {
  return (
    <Fragment>
      {routes.map((route) => (
        <RouteItem key={route.path} {...route} {...props} />
      ))}
    </Fragment>
  );
};

export default Routes;
