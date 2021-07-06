import { API, Cognito } from "@mra/utility";

export const Common = {
  register() {
    Cognito.initialize();
    API.userInterceptor();
  },
};
