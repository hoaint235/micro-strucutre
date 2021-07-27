import { Fragment, lazy } from "react";
import { renderRoutes, RouteConfig } from "react-router-config";
import { Redirect } from "react-router-dom";
import { SuspenseLoading } from "../components";
import { AuthTemplate, DefaultTemplate } from "../components/templates";
import { NotFound } from "../pages";
import Config from "./common";

const getLazyPage = (pageName: string) =>
  lazy(() => import(`../pages/${pageName}`));

const Routes: RouteConfig[] = [
  {
    path: "/not-found",
    exact: true,
    component: NotFound,
  },
  {
    path: "/admin/:path?",
    component: (props: any) => (
      <AuthTemplate>
        <SuspenseLoading>{renderRoutes(props.route.routes)}</SuspenseLoading>
      </AuthTemplate>
    ),
    routes: [
      {
        path: "/admin/dashboard",
        exact: true,
        component: getLazyPage("Dashboard"),
      },
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
      {
        path: "/admin/vendors",
        exact: true,
        component: getLazyPage("ListVendors"),
      },
      {
        path: "/admin/vendors/create",
        exact: true,
        component: getLazyPage("AddVendor"),
      },
      {
        path: "/admin/*",
        component: () => <Redirect to={Config.notFoundPage} />,
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
      {
        path: "/*",
        exact: true,
        component: () => <Redirect to={Config.notFoundPage} />,
      },
    ],
  },
];

export default Routes;
