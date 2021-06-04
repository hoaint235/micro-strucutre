import { navigateToUrl } from "single-spa";
// import { canAccess } from '@cdl-app-console/utility';

const defaultPaths = ["/"];

const validateWhiteList = (url: string) => {
  const path = url.split(window.location.origin)[1]; // get path of browser url
  return defaultPaths.includes(path);
};

export const Routing = {
  register() {
    window.addEventListener("single-spa:before-routing-event", async (evt) => {
      const {
        detail: { newUrl },
      } = evt as CustomEvent;
      // await canAccess();

      if (validateWhiteList(newUrl)) {
        navigateToUrl("/sign-in");
        return;
      }
    });
  },
};
