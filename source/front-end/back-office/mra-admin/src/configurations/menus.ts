import { Group, ListAlt } from "@material-ui/icons";

const Menus: MenuItemProps[] = [
  {
    path: "/admin/users",
    pathsActivate: [
      "/admin/users",
      "/admin/users/create",
      "/admin/users/:userId",
    ],
    icon: Group,
    label: "menus.users",
  },
  {
    path: "/admin/products",
    pathsActivate: ["/admin/products"],
    icon: ListAlt,
    label: "menus.products",
  },
];

export default Menus;
