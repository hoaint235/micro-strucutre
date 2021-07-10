import { navigateToUrl } from "single-spa";
import { Cognito } from "@mra/utility";

const baseUrl = "/";
const defaultPaths = ["/users", "/add-user", "/roles", "/add-role"];

const getPath = (url: string) => url.split(window.location.origin)[1];

export const Routing = {
  register() {
    window.addEventListener("single-spa:before-routing-event", async (evt) => {
      let {
        detail: { newUrl },
      } = evt as CustomEvent;
      const path = getPath(newUrl);
      const canAccess = await Cognito.isAuthenticated();
      if (baseUrl === path) {
        newUrl = canAccess ? "/users" : "/sign-in";
        navigateToUrl(newUrl);
      }

      if (defaultPaths.includes(path) && !canAccess) {
        newUrl = "/sign-in";
      }

      navigateToUrl(newUrl);
    });
  },
};
