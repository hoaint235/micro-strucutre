const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

require("dotenv").config();

const extendConfig = {
  devServer: {
    port: process.env.PORT,
  },
};

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mra",
    projectName: "account",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    ...extendConfig,
  });
};
