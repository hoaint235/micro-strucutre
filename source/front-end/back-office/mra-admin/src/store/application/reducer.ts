import { Action } from "../app-type";
import { PermissionType, RoleType } from "./../../models";
import {
  SHOW_LOADING,
  HIDE_LOADING,
  GET_CURRENT_ROLES,
  GET_CURRENT_PERMISSIONS,
} from "./type";

export type State = {
  countLoading: number;
  currentRoles: RoleType[];
  currentPermissions: PermissionType[];
};

export const initializeState: State = {
  countLoading: 0,
  currentRoles: [],
  currentPermissions: [],
};

const applicationReducer = (
  state: State = initializeState,
  action: Action
): State => {
  switch (action.type) {
    case SHOW_LOADING:
      return {
        ...state,
        countLoading: state.countLoading + 1,
      };
    case HIDE_LOADING:
      return {
        ...state,
        countLoading: state.countLoading - 1,
      };
    case GET_CURRENT_ROLES:
      return {
        ...state,
        currentRoles: [...state.currentRoles, ...action.payload],
      };
    case GET_CURRENT_PERMISSIONS:
      return {
        ...state,
        currentPermissions: [...state.currentPermissions, ...action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};

export default applicationReducer;
