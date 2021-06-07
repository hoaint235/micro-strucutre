import React from "react";
import { Route } from "react-router-dom";

const RouteItem = ({ path, component: Component, routes, ...restProps }) => {
  return (
    <Route
      path={path}
      render={(renderProps) => (
        <Component {...restProps} {...renderProps} routes={routes} />
      )}
    />
  );
};

export default RouteItem;
