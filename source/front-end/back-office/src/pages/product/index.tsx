import { lazy } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../../routes/PrivateRoute';
import { Pages } from '../../utils';

const AddProduct = lazy(() => import('./Add'));
const ListProduct = lazy(() => import('./List'));

const Product = () => (
  <Switch>
    <PrivateRoute exact path={Pages.PRODUCT} component={ListProduct} />
    <PrivateRoute exact path={Pages.CREATE_PRODUCT} component={AddProduct} />
  </Switch>
);

export default Product;
