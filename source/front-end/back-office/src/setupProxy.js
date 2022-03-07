const { createProxyMiddleware } = require('http-proxy-middleware');

const apiEndpoints = [
  'roles',
  'users',
  'categories'
];

module.exports = function (app) {
  apiEndpoints.forEach(endPoint => {
    app.use(
      `/admin/${endPoint}`,
      createProxyMiddleware({
        target: process.env.REACT_APP_API_URL,
        changeOrigin: true,
        pathRewrite: {
          [`^/admin/${endPoint}`]: `/api/${endPoint}`,
        },
      })
    );
  });
};
