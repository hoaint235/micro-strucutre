const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

require("dotenv").config();

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "mra";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: process.env.ENV === "local",
          isDocker: process.env.ENV === "docker",
          orgName,
        },
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "./src/asset/images",
            to: "images",
          },
        ],
      }),
    ],
    devServer: {
      host: process.env.HOST || "0.0.0.0",
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
  });
};
