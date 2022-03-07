import {
  RoleType,
  PermissionType,
  ActionType,
  ListingRequest,
  ListingResponse,
  IListPermission,
  IUser
} from '@models';
import { BaseService } from './base-service';

class UserService {
  getRoles = () => BaseService.get<any, string[]>('roles');

  getPermissions = () => BaseService.get<any, IListPermission[]>('roles/permissions', false);

  updatePermissions = (payload: IListPermission[]) => BaseService.put<{ permissions: IListPermission[] }, {}>('roles/permissions', { permissions: payload });

  getCurrentUserRoles = () => BaseService.get<any, RoleType[]>('roles/current-role', false);

  getCurrentUserPermissions = (role: RoleType) => BaseService.get<any, PermissionType[]>(`roles/current-permission?role=${role}`, false);;

  getCurrentUserActions = async (role: RoleType, permission: PermissionType) => {
    if (role === RoleType.Unknown || permission === PermissionType.Unknown) {
      return [];
    }
    return await BaseService.get<any, ActionType[]>(
      `roles/current-action?role=${role}&permission=${permission}`,
      false
    );
  }

  getUsers = (request: ListingRequest) => BaseService.post<ListingRequest, ListingResponse<IUser>>('users/query', request, false);

  getUserById = (userId: string) => BaseService.get<IUser>(`users/${userId}`, false);

  updateStatus = (email: string, status: number) => BaseService.put('users/status', { email, status });

  createUser = (payload: IUser) => BaseService.post('users', { ...payload });

  deactivateUser = (userId: string) => BaseService.put(`users/${userId}:deactivate`, {});

  activateUser = (userId: string) => BaseService.put(`users/${userId}:activate`, {});

  deleteUser = (userId: string) => BaseService.delete(`users/${userId}`);
}

export default new UserService();
