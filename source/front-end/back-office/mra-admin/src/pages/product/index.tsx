import { lazy } from "react";
import { Switch } from "react-router-dom";
import RouteLoading from "../../routes/RouteLoading";
import { Pages } from "../../utils";

const AddProduct = lazy(() => import("./Add"));
const ListProduct = lazy(() => import("./List"));

const Product = () => {
  return (
    <Switch>
      <RouteLoading exact path={Pages.PRODUCT}>
        <ListProduct />
      </RouteLoading>
      <RouteLoading exact path={Pages.CREATE_PRODUCT}>
        <AddProduct />
      </RouteLoading>
    </Switch>
  );
};

export default Product;
