import { IUser, ListingRequest, ListingResponse } from "model";
import axios from "axios";

const UserService = {
  async gerCurrentUserRoles() {
    const response = await axios.get<string[]>("/account/roles", {
      data: { cancelLoading: true },
    });
    return response.data || [];
  },
  async getUsers(request: ListingRequest = { limit: 10, offset: 0 }) {
    const response = await axios.get<ListingResponse<IUser>>("/account/users", {
      params: { ...request },
      data: { cancelLoading: true },
    });
    return response.data;
  },
  async getUserById(userId: string) {
    const response = await axios.get<IUser>(`/account/users/${userId}`, {
      data: { cancelLoading: true },
    });
    return response.data;
  },
  async updateStatus(email: string, status: number) {
    await axios.put("/account/users/status", { email: email, status: status });
  },
  async createUser(payload: IUser) {
    await axios.post("/account/users", { ...payload });
  },
  async deactivateUser(userId: string) {
    await axios.put(`/account/users/${userId}:deactivate`, {});
  },
  async activateUser(userId: string) {
    await axios.put(`/account/users/${userId}:activate`, {});
  },
  async deleteUser(userId: string) {
    await axios.delete(`/account/users/${userId}`, {});
  },
};

export default UserService;
