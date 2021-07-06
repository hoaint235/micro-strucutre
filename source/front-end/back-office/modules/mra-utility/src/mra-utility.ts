import { API } from "./http-interceptor/axios-interceptor";
import { Cognito } from "./authentication/cognito";

export { resources } from "./international";

export function publicApiFunction() {
  return true;
}

export * from "./fn-common";

export { API, Cognito };
