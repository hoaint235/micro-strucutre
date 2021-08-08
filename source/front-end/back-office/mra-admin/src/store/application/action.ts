import { AccountService } from "../../services";
import { AsyncAction, Dispatch, StateFetcher } from "../app-type";
import {
  GET_ROLES,
  HIDE_LOADING,
  SHOW_LOADING,
  GET_PERMISSIONS,
  SET_CURRENT_PERMISSION,
  SET_CURRENT_ROLE,
  GET_ACTIONS,
} from "./type";
import { PermissionType, RoleType } from "../../models";

export const showLoading = (): AsyncAction => {
  return (dispatch: Dispatch, _: StateFetcher) => {
    dispatch({ type: SHOW_LOADING });
  };
};

export const hideLoading = (): AsyncAction => {
  return (dispatch: Dispatch, getState: StateFetcher) => {
    const { countLoading } = getState().appState;
    if (countLoading > 0) {
      dispatch({ type: HIDE_LOADING });
    }
  };
};

export const getRoles = (): AsyncAction => {
  return async (dispatch: Dispatch, _: StateFetcher) => {
    const roles = await AccountService.getCurrentUserRoles();
    dispatch({ type: GET_ROLES, payload: roles });
  };
};

export const getPermissions = (role: RoleType): AsyncAction => {
  return async (dispatch: Dispatch, _: StateFetcher) => {
    const permissions = await AccountService.getCurrentUserPermissions(role);
    dispatch({ type: GET_PERMISSIONS, payload: permissions });
  };
};

export const getActions = (
  role: RoleType,
  permission: PermissionType
): AsyncAction => {
  return async (dispatch: Dispatch, _: StateFetcher) => {
    const actions = await AccountService.getCurrentUserActions(
      role,
      permission
    );
    dispatch({ type: GET_ACTIONS, payload: actions });
  };
};

export const setCurrentRole = (role: RoleType): AsyncAction => {
  return async (dispatch: Dispatch, _: StateFetcher) => {
    dispatch({ type: SET_CURRENT_ROLE, payload: role });
  };
};

export const setCurrentPermission = (
  permission: PermissionType
): AsyncAction => {
  return async (dispatch: Dispatch, _: StateFetcher) => {
    dispatch({ type: SET_CURRENT_PERMISSION, payload: permission });
  };
};
