import { MenuItemProps } from "./../../components/controls/MenuItem/MenuItem.type";
import { Home } from "@material-ui/icons";
const Menus: MenuItemProps[] = [
  {
    path: "users",
    pathsActivate: ["/users", "/add-user"],
    icon: Home,
    label: "menus.users",
  },
];

export default Menus;
