import { I18n, initHttpInterceptor, initAwsCognito } from "@mra/utility";

export const Common = {
  register() {
    I18n.init();
    initAwsCognito();
    initHttpInterceptor();
  },
};
