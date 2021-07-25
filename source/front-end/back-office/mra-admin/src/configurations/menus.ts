import { BarChart, ListAlt } from "@material-ui/icons";

const Menus: MenuItemProps[] = [
  {
    path: "/admin/dashboard",
    icon: BarChart,
    label: "Dash board",
  },
  {
    path: "/admin/users",
    icon: ListAlt,
    label: "menus.masterData.title",
    children: [
      {
        path: "/admin/users",
        pathsActivate: [
          "/admin/users",
          "/admin/users/create",
          "/admin/users/:userId",
        ],
        label: "menus.masterData.users",
      },
      {
        path: "/admin/categories",
        label: "menus.masterData.categories",
      },
      {
        path: "/admin/products",
        pathsActivate: [
          "/admin/products",
          "/admin/products/create",
          "/admin/products/:productId",
        ],
        label: "menus.masterData.products",
      },
    ],
  },
];

export default Menus;
