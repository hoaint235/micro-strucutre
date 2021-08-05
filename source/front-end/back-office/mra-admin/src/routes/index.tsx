import { lazy } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { AuthTemplate, DefaultTemplate, SuspenseLoading } from "../components";
import { Pages } from "../utils";
import RouteLoading from "./RouteLoading";

const NotFound = lazy(() => import("../pages/NotFound"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const User = lazy(() => import("../pages/user"));
const Vendor = lazy(() => import("../pages/vendor"));
const Category = lazy(() => import("../pages/category"));
const Product = lazy(() => import("../pages/product"));
const Authenticate = lazy(() => import("../pages/authenticate"));
const Permission = lazy(() => import('../pages/permission'));

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin/:path?">
          <AuthTemplate>
            <Switch>
              <RouteLoading exact path={Pages.DASH_BOARD}>
                <Dashboard />
              </RouteLoading>

              <RouteLoading path={Pages.USER}>
                <User />
              </RouteLoading>

              <RouteLoading path={Pages.VENDOR}>
                <Vendor />
              </RouteLoading>

              <RouteLoading path={Pages.PRODUCT}>
                <Product />
              </RouteLoading>

              <RouteLoading path={Pages.CATEGORY}>
                <Category />
              </RouteLoading>

              <RouteLoading path={Pages.PERMISSION}>
                <Permission/>
              </RouteLoading>
            </Switch>
          </AuthTemplate>
        </Route>

        <RouteLoading exact path={Pages.NOT_FOUND}>
          <NotFound />
        </RouteLoading>

        <Route path="/">
          <DefaultTemplate>
            <Switch>
              <Route exact path="/">
                <Redirect to={Pages.DEFAULT} />,
              </Route>
              <SuspenseLoading>
                <Authenticate />
              </SuspenseLoading>
              <Route exact path="/*">
                <Redirect to={Pages.NOT_FOUND} />
              </Route>
            </Switch>
          </DefaultTemplate>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
