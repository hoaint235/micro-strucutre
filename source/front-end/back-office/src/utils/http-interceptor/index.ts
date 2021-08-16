import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { cognitoService } from "../../services";
import { WindowEvents } from "../constants";
import { Store } from "redux";
import { hideLoading, showLoading } from "../../store/application";

const AxiosInterceptor = {
  setup(store: Store) {
    axios.interceptors.request.use(
      async (request: AxiosRequestConfig) => {
        const token = await cognitoService.getAccessToken();
        if (token) {
          request.headers.common["Authorization"] = `Bearer ${token}`;
        }

        if (!request.data?.cancelLoading) {
          store.dispatch(showLoading());
        }

        return request;
      },
      (error) => {
        store.dispatch(hideLoading());
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      (response: AxiosResponse<any>) => {
        store.dispatch(hideLoading());
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

        store.dispatch(hideLoading());
        return Promise.reject(error);
      }
    );
  },
};

export default AxiosInterceptor;
