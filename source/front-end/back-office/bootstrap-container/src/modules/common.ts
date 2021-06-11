import { initHttpInterceptor, initAwsCognito } from "@mra/utility";

export const Common = {
  register() {
    initAwsCognito();
    initHttpInterceptor();
  },
};
