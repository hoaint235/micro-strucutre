import axios from "axios";

function initHttpInterceptor() {
  axios.interceptors.request.use(
    (requestConfig) => {
      console.log("request", requestConfig);
      return requestConfig;
    },
    (error) => {
      console.log(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      console.log("response", response);
      return response;
    },
    (error) => {
      console.log(error);
    }
  );
}

export { axios as API, initHttpInterceptor };
