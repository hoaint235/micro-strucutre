import { lazy } from "react";
import { Switch } from "react-router-dom";
import RouteLoading from "../../routes/RouteLoading";
import { Pages } from "../../utils";

const ListCategory = lazy(() => import("./List"));

const Category = () => {
  return (
    <Switch>
      <RouteLoading exact path={Pages.CATEGORY}>
        <ListCategory />
      </RouteLoading>
    </Switch>
  );
};

export default Category;
