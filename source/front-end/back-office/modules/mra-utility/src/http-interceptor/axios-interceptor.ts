import axios from "axios";

function initHttpInterceptor() {
  axios.interceptors.request.use(
    (requestConfig) => {
      return requestConfig;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}

export { axios as API, initHttpInterceptor };
