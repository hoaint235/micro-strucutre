import { lazy } from 'react';
import { Switch } from 'react-router-dom';
import SuspenseRoute from '../../routes/SuspenseRoute';
import { Pages } from '../../utils';

const SignIn = lazy(() => import('./SignIn'));
const ForgotPassword = lazy(() => import('./ForgotPassword'));

const Category = () => (
  <Switch>
    <SuspenseRoute exact path={Pages.SIGN_IN}>
      <SignIn />
    </SuspenseRoute>
    <SuspenseRoute exact path={Pages.FORGOT_PASSWORD}>
      <ForgotPassword />
    </SuspenseRoute>
  </Switch>
);

export default Category;
