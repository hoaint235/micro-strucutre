import { Redirect } from "react-router-dom";
import { Menus } from "../configurations";
import { IMenuItem, PermissionType } from "../models";
import { useStateSelector } from "../store";

const RedirectDefault = () => {
  const { currentPermissions } = useStateSelector((state) => state.appState);

  if (currentPermissions.length === 0) {
    return null;
  }

  const findMenu = (menus: IMenuItem[], permissions: PermissionType[]): any => {
    for (let index = 0; index < menus.length; index++) {
      const menu = menus[index];
      // @ts-ignore
      if (!menu.children && permissions.includes(menu.permission)) {
        return menu;
      }

      if (menu.children) {
        return findMenu(menu.children, permissions);
      }
    }
  };

  const menu = findMenu(Menus, currentPermissions);
  return <Redirect to={menu?.path} />;
};

export default RedirectDefault;
