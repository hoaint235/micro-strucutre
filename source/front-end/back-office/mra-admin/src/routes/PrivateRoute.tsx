import { Fragment } from "react";
import { RouteProps, useHistory } from "react-router-dom";
import { useGuard } from "../hooks";
import SuspenseRoute from "./SuspenseRoute";
import { useEffect } from "react";
import { IMenuItem, PermissionType } from "../models";
import { useStateSelector } from "../store";
import { Menus } from "../configurations";
import { useDispatch } from "react-redux";
import { setCurrentPermission } from "../store/application";

type Props = RouteProps & {
  component: React.LazyExoticComponent<() => JSX.Element>;
};

const PrivateRoute = (props: Props) => {
  const { component: Component, ...restProps } = props;
  const { isAuth } = useGuard();
  const history = useHistory();
  const dispatch = useDispatch();
  const { permissions } = useStateSelector((state) => state.appState);

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
      permissions.includes(menu?.permission || PermissionType.Unknown)
    ) {
      dispatch(
        setCurrentPermission(menu?.permission || PermissionType.Unknown)
      );
      return true;
    }

    if (menu?.children) {
      const item = menu?.children?.find(
        (x) =>
          x.path === pathname &&
          permissions.includes(x.permission || PermissionType.Unknown)
      );

      dispatch(
        setCurrentPermission(item?.permission || PermissionType.Unknown)
      );

      return !!item;
    }

    return false;
  };

  useEffect(() => {
    const isValid = isValidPermission();
    if (isValid) {
      return;
    }

    const menu = loadDefaultMenu(Menus, permissions);
    if (menu) {
      history.push(menu.path || "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [permissions, history.location]);

  return (
    <Fragment>
      {isAuth && (
        <SuspenseRoute {...restProps}>
          <Component />
        </SuspenseRoute>
      )}
    </Fragment>
  );
};

export default PrivateRoute;
