import { renderRoutes, RouteConfig } from "react-router-config";
import { Redirect } from "react-router-dom";
import { AuthTemplate, DefaultTemplate } from "../components/templates";
import {
  AddUser,
  ForgotPassword,
  ListUsers,
  SignIn,
  EditUser,
  ListCategories,
} from "../pages";
import Config from "./common";

const Routes: RouteConfig[] = [
  {
    path: "/admin/:path?",
    component: (props: any) => (
      <AuthTemplate>{renderRoutes(props.route.routes)}</AuthTemplate>
    ),
    routes: [
      {
        path: "/admin/users",
        exact: true,
        component: ListUsers,
      },
      {
        path: "/admin/users/create",
        exact: true,
        component: AddUser,
      },
      {
        path: "/admin/users/:userId",
        exact: true,
        component: EditUser,
      },
      {
        path: "/admin/categories",
        exact: true,
        component: ListCategories,
      },
      {
        path: "/admin/products",
        exact: true,
        component: () => <div>his ta tes </div>,
      },
    ],
  },
  {
    component: (props: any) => (
      <DefaultTemplate>{renderRoutes(props.route.routes)}</DefaultTemplate>
    ),
    path: "/",
    routes: [
      {
        path: "/",
        exact: true,
        component: () => <Redirect to={Config.defaultPath} />,
      },
      {
        path: "/sign-in",
        component: SignIn,
        exact: true,
      },
      {
        path: "/forgot-password",
        component: ForgotPassword,
        exact: true,
      },
    ],
  },
];

export default Routes;
