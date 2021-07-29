import { IUser, ListingRequest, ListingResponse } from "model";
import { BaseService } from "./base-service";

class UserService extends BaseService {
  constructor() {
    super("account");
  }

  async gerCurrentUserRoles() {
    const response = await super.get<any, string[]>("roles", false);
    return response || [];
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
