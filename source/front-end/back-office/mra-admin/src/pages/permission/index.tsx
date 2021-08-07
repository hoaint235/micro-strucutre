import { lazy } from "react";
import { Switch } from "react-router-dom";
import RouteLoading from "../../routes/RouteLoading";
import { Pages } from "../../utils";

const ListPermission = lazy(() => import("./List"));

const Permission = () => {
  return (
    <Switch>
      <RouteLoading exact path={Pages.PERMISSION}>
        <ListPermission />
      </RouteLoading>
    </Switch>
  );
};

export default Permission;
