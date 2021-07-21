import { IUser, ListingRequest, ListingResponse } from "model";
import axios from "axios";

const UserService = {
  async getUsers(request: ListingRequest = { limit: 10, offset: 0 }) {
    const response = await axios.get<ListingResponse<IUser>>("/account/users", {
      params: { ...request },
    });
    return response.data;
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
