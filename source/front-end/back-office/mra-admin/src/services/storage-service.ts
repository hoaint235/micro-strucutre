import { RoleType } from "../models";

class StorageService {
  getCurrentRole() {
    const result = localStorage.getItem("currentRole");
    console.log(result);
    return result;
  }

  setCurrentRole(role: RoleType) {
    return localStorage.setItem("currentRole", role.toString());
  }
}

export default new StorageService();
