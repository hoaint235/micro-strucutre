const ApiHelper = {
  createUser() {
    return "/account/users";
  },
  deactivateUser(userId: string) {
    return `/account/users/${userId}:deactivate`;
  },
  activateUser(userId: string) {
    return `/account/users/${userId}:activate`;
  },
  deleteUser(userId: string) {
    return `/account/users/${userId}`;
  }
};

export default ApiHelper;
