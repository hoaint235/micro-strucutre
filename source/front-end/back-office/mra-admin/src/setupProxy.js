const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/account",
    createProxyMiddleware({
      target: process.env.REACT_APP_API_ACCOUNT,
      changeOrigin: true,
      pathRewrite: {
        "^/account": "/api",
      },
    })
  );
};
