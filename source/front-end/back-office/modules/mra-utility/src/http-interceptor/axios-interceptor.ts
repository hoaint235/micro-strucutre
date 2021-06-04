import axios from "axios";

function initHttpInterceptor() {
  axios.interceptors.request.use(
    (requestConfig) => {
      return requestConfig;
    },
    (error) => {}
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {}
  );
}

export { axios as API, initHttpInterceptor };
