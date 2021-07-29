import { lazy } from "react";
import { Switch } from "react-router-dom";
import RouteLoading from "../../routes/RouteLoading";
import { Pages } from "../../utils";

const AddVendor = lazy(() => import("./Add"));
const ListVendor = lazy(() => import("./List"));

const Vendor = () => {
  return (
    <Switch>
      <RouteLoading exact path={Pages.VENDOR}>
        <ListVendor />
      </RouteLoading>
      <RouteLoading exact path={Pages.CREATE_VENDOR}>
        <AddVendor />
      </RouteLoading>
    </Switch>
  );
};

export default Vendor;
