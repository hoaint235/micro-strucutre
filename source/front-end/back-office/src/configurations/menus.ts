import { BarChart, Description, ListAlt } from '@material-ui/icons';
import { IMenuItem, PermissionType } from '../models';
import { Pages } from '../utils';

const Menus: IMenuItem[] = [
  {
    path: Pages.DASH_BOARD,
    icon: BarChart,
    label: 'menus.dashBoard',
    permission: PermissionType.Dashboard,
  },
  {
    icon: ListAlt,
    label: 'menus.masterData.title',
    children: [
      {
        path: Pages.VENDOR,
        activePaths: [Pages.VENDOR, Pages.CREATE_VENDOR],
        label: 'menus.masterData.vendors',
        permission: PermissionType.Vendor,
      },
      {
        path: Pages.CATEGORY,
        label: 'menus.masterData.categories',
        permission: PermissionType.Category,
      },
      {
        path: Pages.PRODUCT,
        activePaths: [Pages.PRODUCT, Pages.CREATE_PRODUCT],
        label: 'menus.masterData.products',
        permission: PermissionType.Product,
      },
      {
        path: Pages.USER,
        activePaths: [Pages.USER, Pages.CREATE_USER, Pages.EDIT_USER],
        label: 'menus.masterData.users',
        permission: PermissionType.Account,
      },
      {
        path: Pages.PERMISSION,
        label: 'menus.masterData.permissions',
        permission: PermissionType.Permission,
      },
    ],
  },
  {
    icon: Description,
    label: 'menus.purchase.title',
    children: [
      {
        path: Pages.VENDOR,
        activePaths: [Pages.VENDOR, Pages.CREATE_VENDOR],
        label: 'menus.purchase.purchase',
        permission: PermissionType.PurchaseOrder,
      },
      {
        path: Pages.CATEGORY,
        label: 'menus.purchase.sell',
        permission: PermissionType.SaleOrder,
      },
    ],
  },
];

export default Menus;
