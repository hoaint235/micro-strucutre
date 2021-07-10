const { merge } = require("webpack-merge");
const webpack = require("webpack");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const getEnv = require("./env");

const env = getEnv();
const application = require("./config.js");

const extendConfig = {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
      },
      template: "src/index.ejs",
      templateParameters: {
        isDev: process.env.ENV === "development",
        configSetup: application["setup"][process.env.ENV],
        title: application.title,
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
    new webpack.DefinePlugin(env.stringified),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "mra";
  const projectName = "root-config";

  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName,
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    ...extendConfig,
  });
};
