import { API, initHttpInterceptor } from "./http-interceptor/axios-interceptor";
import {
  Cognito,
  initAwsCognito,
  isAuthenticated,
} from "./authentication/cognito";

export { resources } from "./international";

export function publicApiFunction() {
  return true;
}

export * from './fn-common';

export { API, initHttpInterceptor, initAwsCognito, Cognito, isAuthenticated };
