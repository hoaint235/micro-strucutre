import { IUser, ListingRequest, ListingResponse } from "model";
import { RoleType, PermissionType } from "../models";
import { BaseService } from "./base-service";

class UserService extends BaseService {
  constructor() {
    super("account");
  }

  async getCurrentUserRoles() {
    return await super.get<any, RoleType[]>("roles/current-role", false);
  }

  async getCurrentUserPermissions(role: RoleType) {
    return await super.get<any, PermissionType[]>(
      `roles/current-permission?role=${role}`,
      false
    );
  }

  async getUsers(request: ListingRequest) {
    return await super.post<ListingRequest, ListingResponse<IUser>>(
      "users/query",
      request,
      false
    );
  }

  async getUserById(userId: string) {
    return await super.get<IUser>(`users/${userId}`, false);
  }

  async updateStatus(email: string, status: number) {
    await super.put("users/status", { email: email, status: status });
  }

  async createUser(payload: IUser) {
    await super.post("users", { ...payload });
  }

  async deactivateUser(userId: string) {
    await super.put(`users/${userId}:deactivate`, {});
  }

  async activateUser(userId: string) {
    await super.put(`users/${userId}:activate`, {});
  }

  async deleteUser(userId: string) {
    await super.delete(`users/${userId}`);
  }
}

export default new UserService();
