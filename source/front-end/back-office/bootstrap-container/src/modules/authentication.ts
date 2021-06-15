import { registerApplication } from "single-spa";

export const Authentication = {
  register(): void {
    registerApplication({
      name: "@mra/sign-in",
      app: () => System.import("@mra/authentication"),
      activeWhen: ["sign-in"],
      customProps: {
        type: "SIGN_IN",
      },
    });

    registerApplication({
      name: "@mra/forgot-password",
      app: () => System.import("@mra/authentication"),
      activeWhen: ["forgot-password"],
      customProps: {
        type: "FORGOT_PASSWORD",
      },
    });
  },
};
