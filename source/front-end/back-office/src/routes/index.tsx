import { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthTemplate, DefaultTemplate, SuspenseLoading } from '@components';
import { Pages } from '@utils';
import PrivateRoute from './PrivateRoute';
import SuspenseRoute from './SuspenseRoute';

const NotFound = lazy(() => import('../pages/not-found'));
const Dashboard = lazy(() => import('../pages/dashboard'));
const User = lazy(() => import('../pages/user'));
const Vendor = lazy(() => import('../pages/vendor'));
const Category = lazy(() => import('../pages/category'));
const Product = lazy(() => import('../pages/product'));
const Authenticate = lazy(() => import('../pages/authenticate'));
const Permission = lazy(() => import('../pages/permission'));

const Routes = () => (
  <Switch>
    <Route path="/admin/:path?">
      <AuthTemplate>
        <Switch>
          <PrivateRoute exact path={Pages.DASH_BOARD} component={Dashboard} />
          <PrivateRoute path={Pages.USER} component={User} />
          <PrivateRoute path={Pages.VENDOR} component={Vendor} />
          <PrivateRoute path={Pages.PRODUCT} component={Product} />
          <PrivateRoute path={Pages.CATEGORY} component={Category} />
          <PrivateRoute path={Pages.PERMISSION} component={Permission} />
        </Switch>
      </AuthTemplate>
    </Route>

    <SuspenseRoute exact path={Pages.NOT_FOUND}>
      <NotFound />
    </SuspenseRoute>

    <Route path="/">
      <DefaultTemplate>
        <Switch>
          <Route exact path="/">
            <Redirect to={Pages.MAIN} />
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
);

export { default as PrivateRoute } from './PrivateRoute';
export default Routes;
