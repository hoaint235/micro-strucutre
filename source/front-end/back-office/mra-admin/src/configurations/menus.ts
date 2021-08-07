import { BarChart, Description, ListAlt } from "@material-ui/icons";
import { Pages, Roles } from "../utils";

const Menus: MenuItemProps[] = [
  {
    path: Pages.DASH_BOARD,
    icon: BarChart,
    label: "menus.dashBoard",
    roles: [Roles.Admin, Roles.MasterData],
  },
  {
    icon: ListAlt,
    label: "menus.masterData.title",
    children: [
      {
        path: Pages.VENDOR,
        activePaths: [Pages.VENDOR, Pages.CREATE_VENDOR],
        label: "menus.masterData.vendors",
      },
      {
        path: Pages.CATEGORY,
        label: "menus.masterData.categories",
      },
      {
        path: Pages.PRODUCT,
        activePaths: [Pages.PRODUCT, Pages.CREATE_PRODUCT],
        label: "menus.masterData.products",
      },
      {
        path: Pages.USER,
        activePaths: [Pages.USER, Pages.CREATE_USER, Pages.EDIT_USER],
        label: "menus.masterData.users",
      },
      {
        path: Pages.PERMISSION,
        label: "menus.masterData.permissions",
      },
    ],
  },
  {
    icon: Description,
    label: "menus.purchase.title",
    children: [
      {
        path: Pages.VENDOR,
        activePaths: [Pages.VENDOR, Pages.CREATE_VENDOR],
        label: "menus.purchase.purchase",
      },
      {
        path: Pages.CATEGORY,
        label: "menus.purchase.sell",
      },
    ],
  },
];

export default Menus;
