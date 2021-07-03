import { registerApplication } from "single-spa";

export const Layout = {
  register(): void {
    registerApplication({
      name: "@mra/layout",
      app: () => System.import("@mra/layout"),
      activeWhen: () => true,
    });
  },
};
