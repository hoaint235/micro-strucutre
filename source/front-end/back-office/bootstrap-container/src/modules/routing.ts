import { navigateToUrl } from "single-spa";
import { isAuthenticated } from "@mra/utility";

const defaultPaths = ["/"];

const validateWhiteList = (url: string) => {
  const path = url.split(window.location.origin)[1]; // get path of browser url
  return defaultPaths.includes(path);
};

export const Routing = {
  register() {
    window.addEventListener("single-spa:before-routing-event", async (evt) => {
      let {
        detail: { newUrl },
      } = evt as CustomEvent;
      if (validateWhiteList(newUrl)) {
        const canAccess = await isAuthenticated();
        newUrl = canAccess ? "/home" : "/sign-in";
      }

      navigateToUrl(newUrl);
    });
  },
};
