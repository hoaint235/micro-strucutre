import { Fragment } from "react";
import { Redirect, RouteProps, useHistory } from "react-router-dom";
import { Pages } from "../utils";
import { useGuard } from "../hooks";
import SuspenseRoute from "./SuspenseRoute";
import { useEffect } from "react";
import { IMenuItem, PermissionType } from "../models";
import { useStateSelector } from "../store";
import { Menus } from "../configurations";

type Props = RouteProps & {
  component: React.LazyExoticComponent<() => JSX.Element>;
};

const PrivateRoute = (props: Props) => {
  const { component: Component, ...restProps } = props;
  const { isAuth } = useGuard();
  const history = useHistory();
  const { currentPermissions } = useStateSelector((state) => state.appState);

  const loadDefaultMenu = (
    menus: IMenuItem[],
    permissions: PermissionType[]
  ): IMenuItem | undefined => {
    for (let index = 0; index < menus.length; index++) {
      const menu = menus[index];
      // @ts-ignore
      if (!menu.children && permissions.includes(menu.permission)) {
        return menu;
      }

      if (menu.children) {
        return loadDefaultMenu(menu.children, permissions);
      }
    }
  };

  const isValidPermission = (): boolean => {
    const {
      location: { pathname },
    } = history;
    const menu = Menus.find(
      (x) =>
        x.path === pathname ||
        (x.children && x.children.some((x) => x.path === pathname))
    );
    if (!menu) {
      return false;
    }

    if (
      !menu?.children &&
      currentPermissions.includes(menu?.permission || PermissionType.Unknown)
    ) {
      return true;
    }

    if (menu?.children) {
      return menu?.children?.some(
        (x) =>
          x.path === pathname &&
          currentPermissions.includes(x.permission || PermissionType.Unknown)
      );
    }

    return false;
  };

  useEffect(() => {
    const isValid = isValidPermission();
    if (isValid) {
      return;
    }
    const menu = loadDefaultMenu(Menus, currentPermissions);
    if (menu) {
      history.push(menu.path || "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPermissions, history]);

  return (
    <Fragment>
      {isAuth && (
        <SuspenseRoute {...restProps}>
          {isAuth ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: Pages.SIGN_IN,
                state: { from: props.location },
              }}
            />
          )}
        </SuspenseRoute>
      )}
    </Fragment>
  );
};

export default PrivateRoute;
