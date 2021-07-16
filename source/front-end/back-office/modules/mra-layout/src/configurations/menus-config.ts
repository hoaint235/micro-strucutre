import { Home, Group, ListAlt } from "@material-ui/icons";
import { MenuItemProps } from "../components";

const Menus: MenuItemProps[] = [
  {
    path: "/users",
    pathsActivate: ["/users", "/users/create"],
    icon: Group,
    label: "menus.users",
  },
  {
    path: "/products",
    pathsActivate: ["/products"],
    icon: ListAlt,
    label: "menus.products",
  },
];

export default Menus;
