import React, { Fragment } from "react";
import RouteItem from "../../components/controls/RouteItem";
import AddUser from "../../pages/AddUser";
import EditUser from "../../pages/EditUser";
import ListRoles from "../../pages/ListRoles";
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
  {
    path: "/users/:userId",
    component: EditUser,
  },
  {
    path: "/roles",
    component: ListRoles,
  },
];

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
