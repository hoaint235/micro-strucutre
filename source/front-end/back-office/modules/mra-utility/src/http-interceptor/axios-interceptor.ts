import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Cognito } from "../authentication/cognito";
import { WindowEvents } from "../constants";

const delayHideLoading = () => {
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent(WindowEvents.DECREASE_LOADING));
  }, 500);
};

(axios as any).userInterceptor = () => {
  axios.interceptors.request.use(
    async (request: AxiosRequestConfig) => {
      const token = await Cognito.getAccessToken();
      if (token) {
        request.headers.common["Authorization"] = `Bearer ${token}`;
      }

      window.dispatchEvent(new CustomEvent(WindowEvents.INCREASE_LOADING));

      return request;
    },
    (error) => {
      window.dispatchEvent(new CustomEvent(WindowEvents.DECREASE_LOADING));
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response: AxiosResponse<any>) => {
      delayHideLoading();
      return response;
    },
    (error) => {
      let errorMessage = "errors.internalServerError";

      const { status } = error.response;
      if (status === 403) {
        errorMessage = "errors.forbidden";
      }

      window.dispatchEvent(
        new CustomEvent(WindowEvents.TOAST_ERROR, {
          detail: errorMessage,
        })
      );

      delayHideLoading();
      return Promise.reject(error);
    }
  );
};

export { axios as API };
