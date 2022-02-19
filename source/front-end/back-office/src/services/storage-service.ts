import { RoleType } from '@models';

const CURRENT_ROLE = 'role';
class StorageService {
  getCurrentRole() {
    return localStorage.getItem(CURRENT_ROLE);
  }

  setCurrentRole(role: RoleType) {
    return localStorage.setItem(CURRENT_ROLE, role.toString());
  }
}

export default new StorageService();
