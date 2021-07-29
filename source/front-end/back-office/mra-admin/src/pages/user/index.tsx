import { lazy } from "react";
import { Switch } from "react-router-dom";
import RouteLoading from "../../routes/RouteLoading";
import { Pages } from "../../utils";

const AddUser = lazy(() => import("./Add"));
const ListUser = lazy(() => import("./List"));
const EditUser = lazy(() => import("./Edit"));

const User = () => {
  return (
    <Switch>
      <RouteLoading exact path={Pages.USER}>
        <ListUser />
      </RouteLoading>
      <RouteLoading exact path={Pages.CREATE_USER}>
        <AddUser />
      </RouteLoading>
      <RouteLoading exact path={Pages.EDIT_USER}>
        <EditUser />
      </RouteLoading>
    </Switch>
  );
};

export default User;
