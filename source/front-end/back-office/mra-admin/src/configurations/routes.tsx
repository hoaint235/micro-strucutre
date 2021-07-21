import { renderRoutes, RouteConfig } from "react-router-config";
import { Redirect } from "react-router-dom";
import { AuthTemplate, DefaultTemplate } from "../components/templates";
import { ForgotPassword, ListUsers, SignIn } from "../pages";

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
        component: () => <Redirect to="/admin/users" />,
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
