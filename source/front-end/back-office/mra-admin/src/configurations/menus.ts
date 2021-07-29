import { BarChart, ListAlt } from "@material-ui/icons";
import { Pages } from "../utils";

const Menus: MenuItemProps[] = [
  {
    path: Pages.DASH_BOARD,
    icon: BarChart,
    label: "menus.dashBoard",
  },
  {
    icon: ListAlt,
    label: "menus.masterData.title",
    children: [
      {
        path: Pages.VENDOR,
        pathsActivate: [Pages.VENDOR, Pages.CREATE_VENDOR],
        label: "menus.masterData.vendors",
      },
      {
        path: Pages.CATEGORY,
        label: "menus.masterData.categories",
      },
      {
        path: Pages.PRODUCT,
        pathsActivate: [Pages.PRODUCT, Pages.CREATE_PRODUCT],
        label: "menus.masterData.products",
      },
      {
        path: Pages.USER,
        pathsActivate: [Pages.USER, Pages.CREATE_USER, Pages.EDIT_USER],
        label: "menus.masterData.users",
      },
    ],
  },
];

export default Menus;
