import { lazy } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../../routes/PrivateRoute";
import { Pages } from "../../utils";

const ListCategory = lazy(() => import("./List"));

const Category = () => {
  return (
    <Switch>
      <PrivateRoute exact path={Pages.CATEGORY} component={ListCategory} />
    </Switch>
  );
};

export default Category;
