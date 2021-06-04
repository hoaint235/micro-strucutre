import { I18n, initHttpInterceptor } from "@mra/utility";

export const Common = {
  register() {
    I18n.initInternational();
    initHttpInterceptor();
  },
};
