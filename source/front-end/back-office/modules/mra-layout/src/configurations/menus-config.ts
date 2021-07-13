import { Home } from "@material-ui/icons";
import { MenuItemProps } from "../components";

const Menus: MenuItemProps[] = [
  {
    path: "/users",
    pathsActivate: ["/users", "/user/create"],
    icon: Home,
    label: "menus.users",
  },
  {
    path: "/products",
    pathsActivate: ["/products"],
    icon: Home,
    label: "menus.products",
  },
];

export default Menus;
