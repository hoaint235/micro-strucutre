import React, { Fragment } from "react";
import RouteItem from "../../components/commons/RouteItem";
import AddUser from "../../pages/AddUser";
import ListUsers from "../../pages/ListUsers";

const routes = [
  {
    path: "/users",
    component: ListUsers,
  },
  {
    path: "/add-user",
    component: AddUser,
  },
];

const Routes = () => {
  return (
    <Fragment>
      {routes.map((route) => (
        <RouteItem key={route.path} {...route} />
      ))}
    </Fragment>
  );
};

export default Routes;
