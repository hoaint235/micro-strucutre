import { lazy } from "react";
import { Switch } from "react-router-dom";
import RouteLoading from "../../routes/RouteLoading";
import { Pages } from "../../utils";

const SignIn = lazy(() => import("./SignIn"));
const ForgotPassword = lazy(() => import("./ForgotPassword"));

const Category = () => {
  return (
    <Switch>
      <RouteLoading exact path={Pages.SIGN_IN}>
        <SignIn />
      </RouteLoading>
      <RouteLoading exact path={Pages.FORGOT_PASSWORD}>
        <ForgotPassword />
      </RouteLoading>
    </Switch>
  );
};

export default Category;
