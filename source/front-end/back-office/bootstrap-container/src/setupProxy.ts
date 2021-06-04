import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    "/authen",
    createProxyMiddleware({
      target: "http://localhost:7000",
      pathRewrite: {
        "^/authen": "/api/authentication",
      },
    })
  );
};
