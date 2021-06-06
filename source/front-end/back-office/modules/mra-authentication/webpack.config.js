const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

const extendConfig = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: require.resolve("file-loader"),
        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  },
};

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mra",
    projectName: "authentication",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    ...extendConfig,
  });
};
