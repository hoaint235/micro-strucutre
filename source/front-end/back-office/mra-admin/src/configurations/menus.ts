import { BarChart, ListAlt } from "@material-ui/icons";

const Menus: MenuItemProps[] = [
  {
    path: "/admin/dashboard",
    icon: BarChart,
    label: "menus.dashBoard",
  },
  {
    path: "/admin/users",
    icon: ListAlt,
    label: "menus.masterData.title",
    children: [
      {
        path: "/admin/vendors",
        pathsActivate: [
          "/admin/vendors",
          "/admin/vendors/create",
          "/admin/vendors/:productId",
        ],
        label: "menus.masterData.vendors",
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
      {
        path: "/admin/users",
        pathsActivate: [
          "/admin/users",
          "/admin/users/create",
          "/admin/users/:userId",
        ],
        label: "menus.masterData.users",
      },
    ],
  },
];

export default Menus;
