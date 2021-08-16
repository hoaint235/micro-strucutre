import { PermissionType } from "./PermissionType";

export interface IMenuItem {
  label: string;
  permission?: PermissionType;
  icon?: any;
  path?: string;
  activePaths?: string[];
  exact?: boolean;
  children?: IMenuItem[];
}
