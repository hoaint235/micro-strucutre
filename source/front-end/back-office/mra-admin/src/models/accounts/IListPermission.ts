import { RoleType, PermissionType, ActionType } from "..";

export interface IListPermission {
  role: RoleType;
  permission: PermissionType;
  action: ActionType;
  isActive: boolean;
}
