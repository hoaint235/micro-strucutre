import { API, initHttpInterceptor } from "./http-interceptor/axios-interceptor";
import { I18n, t, changeLanguage } from "./international";
import { Cognito, initAwsCognito } from "./authentication/cognito";

export function publicApiFunction() {
  return true;
}

export {
  API,
  initHttpInterceptor,
  I18n,
  t,
  changeLanguage,
  initAwsCognito,
  Cognito,
};
