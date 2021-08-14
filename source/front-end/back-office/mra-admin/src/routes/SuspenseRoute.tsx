import { Route, RouteProps } from "react-router-dom";
import { SuspenseLoading } from "../components";

type Props = RouteProps & {
  children: React.ReactNode;
};

const SuspenseRoute = (props: Props) => {
  const { children, ...restProps } = props;

  return (
    <Route {...restProps}>
      <SuspenseLoading>{children}</SuspenseLoading>
    </Route>
  );
};

export default SuspenseRoute;
