import { lazy } from "react";
import { renderRoutes, RouteConfig } from "react-router-config";
import { Redirect } from "react-router-dom";
import { SuspenseLoading } from "../components";
import { AuthTemplate, DefaultTemplate } from "../components/templates";
import Config from "./common";

const getLazyPage = (pageName: string) =>
  lazy(() => import(`../pages/${pageName}`));

const Routes: RouteConfig[] = [
  {
    path: "/admin/:path?",
    component: (props: any) => (
      <AuthTemplate>
        <SuspenseLoading>{renderRoutes(props.route.routes)}</SuspenseLoading>
      </AuthTemplate>
    ),
    routes: [
      {
        path: "/admin/users",
        exact: true,
        component: getLazyPage("ListUsers"),
      },
      {
        path: "/admin/users/create",
        exact: true,
        component: getLazyPage("AddUser"),
      },
      {
        path: "/admin/users/:userId",
        exact: true,
        component: getLazyPage("EditUser"),
      },
      {
        path: "/admin/categories",
        exact: true,
        component: getLazyPage("ListCategories"),
      },
      {
        path: "/admin/products",
        exact: true,
        component: getLazyPage("ListProducts"),
      },
      {
        path: "/admin/products/create",
        exact: true,
        component: getLazyPage("AddProduct"),
      },
    ],
  },
  {
    component: (props: any) => (
      <DefaultTemplate>
        <SuspenseLoading>{renderRoutes(props.route.routes)}</SuspenseLoading>
      </DefaultTemplate>
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
        component: getLazyPage("SignIn"),
        exact: true,
      },
      {
        path: "/forgot-password",
        component: getLazyPage("ForgotPassword"),
        exact: true,
      },
    ],
  },
];

export default Routes;
