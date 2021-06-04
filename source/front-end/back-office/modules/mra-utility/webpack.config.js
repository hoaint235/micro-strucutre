const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");

require("dotenv").config();

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mra",
    projectName: "utility",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  });
};
