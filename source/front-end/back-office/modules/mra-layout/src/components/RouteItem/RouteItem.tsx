import React from "react";
import { Route } from "react-router-dom";

const RouteItem = ({ path, module }) => {
  return (
    <Route
      path={path}
      render={(renderProps) => (
        <div {...renderProps} id={`single-spa-application:${module}`}></div>
      )}
    />
  );
};

export default RouteItem;
