const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const webpack = require("webpack");

const env = require("dotenv").config();
const raw = env.parsed;

const extendConfig = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env": Object.keys(raw).reduce((env, key) => {
        env[key] = JSON.stringify(raw[key]);
        return env;
      }, {}),
    }),
  ],
  devServer: {
    port: process.env.PORT,
  },
};

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mra",
    projectName: "layout",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    ...extendConfig,
  });
};
