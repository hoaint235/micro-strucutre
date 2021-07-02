import React, { Fragment } from "react";
import { RouteItem } from "../../../components";
import { Routes as routes } from "../../../configurations";

const Routes = () => {
  return (
    <Fragment>
      {routes.map(({ path, module }) => (
        <RouteItem key={path} module={module} path={path} />
      ))}
    </Fragment>
  );
};

export default Routes;
