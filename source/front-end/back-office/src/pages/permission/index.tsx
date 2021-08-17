import { lazy } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../../routes/PrivateRoute';
import { Pages } from '../../utils';

const ListPermission = lazy(() => import('./List'));

const Permission = () => (
  <Switch>
    <PrivateRoute exact path={Pages.PERMISSION} component={ListPermission} />
  </Switch>
);

export default Permission;
