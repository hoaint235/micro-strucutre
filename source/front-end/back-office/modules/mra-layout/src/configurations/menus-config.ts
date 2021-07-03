import { Home } from "@material-ui/icons";
import { MenuItemProps } from "../components";

const Menus: MenuItemProps[] = [
  {
    path: "users",
    pathsActivate: ["/users", "/add-user"],
    icon: Home,
    label: "menus.users",
  },
];

export default Menus;
