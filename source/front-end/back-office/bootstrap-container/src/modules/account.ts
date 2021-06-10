import { registerApplication } from "single-spa";
export const Account = {
  register() {
    registerApplication({
      name: "@mra/account",
      app: () => System.import("@mra/account"),
      activeWhen: [
        "/users",
        "/users/:userId",
        "/add-user",
        "/roles",
        "/add-role",
        "/roles/:roleId",
      ],
    });
  },
};
