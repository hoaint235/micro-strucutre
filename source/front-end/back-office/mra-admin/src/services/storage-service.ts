class StorageService {
  getCurrentRole() {
    return localStorage.getItem("currentRole");
  }
}

export default new StorageService();
