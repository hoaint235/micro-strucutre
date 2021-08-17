const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/account',
    createProxyMiddleware({
      target: process.env.REACT_APP_API_ACCOUNT,
      changeOrigin: true,
      pathRewrite: {
        '^/account': '/api',
      },
    })
  );

  app.use(
    '/vendor',
    createProxyMiddleware({
      target: process.env.REACT_APP_API_MASTER_DATA,
      changeOrigin: true,
      pathRewrite: {
        '^/vendor': '/',
      },
    })
  );

  app.use(
    '/category',
    createProxyMiddleware({
      target: process.env.REACT_APP_API_PRODUCT,
      changeOrigin: true,
      pathRewrite: {
        '^/category': '/',
      },
    })
  );
};
