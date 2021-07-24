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
    path: "/admin/categories",
    pathsActivate: ["/admin/categories"],
    icon: ListAlt,
    label: "menus.categories",
  },
  {
    path: "/admin/products",
    pathsActivate: [
      "/admin/products",
      "/admin/products/create",
      "/admin/products/:productId",
    ],
    icon: ListAlt,
    label: "menus.products",
  },
];

export default Menus;
