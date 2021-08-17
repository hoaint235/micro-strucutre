import { lazy } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../../routes/PrivateRoute';
import { Pages } from '../../utils';

const AddUser = lazy(() => import('./Add'));
const ListUser = lazy(() => import('./List'));
const EditUser = lazy(() => import('./Edit'));

const User = () => (
  <Switch>
    <PrivateRoute exact path={Pages.USER} component={ListUser} />
    <PrivateRoute exact path={Pages.CREATE_USER} component={AddUser} />
    <PrivateRoute exact path={Pages.EDIT_USER} component={EditUser} />
  </Switch>
);

export default User;
