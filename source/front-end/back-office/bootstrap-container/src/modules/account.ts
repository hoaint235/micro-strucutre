import { registerApplication } from "single-spa";

export const Account = {
  register(): void {
    registerApplication({
      name: "@mra/sign-in",
      app: () => System.import("@mra/account"),
      activeWhen: ["/sign-in"],
      customProps: {
        type: "SIGN_IN",
      },
    });

    registerApplication({
      name: "@mra/forgot-password",
      app: () => System.import("@mra/account"),
      activeWhen: ["/forgot-password"],
      customProps: {
        type: "FORGOT_PASSWORD",
      },
    });
  },
};
