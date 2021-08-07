import { RoleType } from "./../../models/RoleType";
import { AccountService } from "../../services";
import { AsyncAction, Dispatch, StateFetcher } from "../app-type";
import {
  GET_CURRENT_ROLES,
  HIDE_LOADING,
  SHOW_LOADING,
  GET_CURRENT_PERMISSIONS,
} from "./type";

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

export const getCurrentRoles = (): AsyncAction => {
  return async (dispatch: Dispatch, _: StateFetcher) => {
    const roles = await AccountService.getCurrentUserRoles();
    dispatch({ type: GET_CURRENT_ROLES, payload: roles });
  };
};

export const getCurrentPermissions = (role: RoleType): AsyncAction => {
  return async (dispatch: Dispatch, _: StateFetcher) => {
    const permissions = await AccountService.getCurrentUserPermissions(role);
    dispatch({ type: GET_CURRENT_PERMISSIONS, payload: permissions });
  };
};
