import { accountService } from '@services';
import { AsyncAction, Dispatch, StateFetcher } from '../app-type';
import {
  GET_ROLES,
  HIDE_LOADING,
  SHOW_LOADING,
  GET_PERMISSIONS,
  SET_CURRENT_PERMISSION,
  SET_CURRENT_ROLE,
  GET_ACTIONS,
  RESET_ALL_PERMISSION,
} from './type';
import { PermissionType, RoleType } from '@models';

export const showLoading =
  (): AsyncAction => (dispatch: Dispatch, _: StateFetcher) => {
    dispatch({ type: SHOW_LOADING });
  };

export const hideLoading =
  (): AsyncAction => (dispatch: Dispatch, getState: StateFetcher) => {
    const { countLoading } = getState().appState;
    if (countLoading > 0) {
      dispatch({ type: HIDE_LOADING });
    }
  };

export const getRoles =
  (): AsyncAction => async (dispatch: Dispatch, _: StateFetcher) => {
    const roles = await accountService.getCurrentUserRoles();
    dispatch({ type: GET_ROLES, payload: roles });
  };

export const getPermissions =
  (role: RoleType): AsyncAction =>
  async (dispatch: Dispatch, _: StateFetcher) => {
    const permissions = await accountService.getCurrentUserPermissions(role);
    dispatch({ type: GET_PERMISSIONS, payload: permissions });
  };

export const getActions =
  (role: RoleType, permission: PermissionType): AsyncAction =>
  async (dispatch: Dispatch, _: StateFetcher) => {
    const actions = await accountService.getCurrentUserActions(
      role,
      permission
    );
    dispatch({ type: GET_ACTIONS, payload: actions });
  };

export const setCurrentRole =
  (role: RoleType): AsyncAction =>
  async (dispatch: Dispatch, _: StateFetcher) => {
    dispatch({ type: SET_CURRENT_ROLE, payload: role });
  };

export const setCurrentPermission =
  (permission: PermissionType): AsyncAction =>
  async (dispatch: Dispatch, _: StateFetcher) => {
    dispatch({ type: SET_CURRENT_PERMISSION, payload: permission });
  };

export const resetAllPermission =
  (params: Object = {}): AsyncAction =>
  async (dispatch: Dispatch, _: StateFetcher) => {
    const payload = {
      ...{
        roles: [],
        permissions: [],
        actions: [],
        currentPermission: PermissionType.Unknown,
        currentRole: RoleType.Unknown,
      },
      ...{ ...params },
    };

    dispatch({ type: RESET_ALL_PERMISSION, payload });
  };
