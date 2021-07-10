const config = require("./webpack.config");
const { merge } = require("webpack-merge");

const devConfig = {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    host: process.env.HOST,
    port: process.env.PORT,
    public: `${process.env.HOST}:${process.env.PORT}`,
    proxy: {
      "/account": {
        target: "http://localhost:7000",
        changeOrigin: true,
        pathRewrite: {
          "^/account": "/api",
        },
      },
    },
  },
};

module.exports = merge(config, {
  ...devConfig,
});
