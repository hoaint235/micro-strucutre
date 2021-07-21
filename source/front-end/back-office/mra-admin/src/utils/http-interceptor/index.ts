import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { CognitoService } from "../../services";
import { WindowEvents } from "../constants";

const delayHideLoading = () => {
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent(WindowEvents.DECREASE_LOADING));
  }, 500);
};

const AxiosInterceptor = {
  setup() {
    axios.interceptors.request.use(
      async (request: AxiosRequestConfig) => {
        const token = await CognitoService.getAccessToken();
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
        switch (status) {
          case 401:
            errorMessage = "errors.notAuthorized";
            break;
          case 403:
            errorMessage = "errors.forbidden";
            break;
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
  },
};

export default AxiosInterceptor;
