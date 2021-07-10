const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const getEnv = require("./env");
const env = getEnv();

module.exports = {
  mode: "production",
  entry: "./src/setup-importmap.ts",
  output: {
    filename: "setup-importmap.js",
    path: path.resolve(__dirname, "./dist/setup-importmap"),
    chunkFilename: "[name].js",
  },
  resolve: {
    modules: [__dirname, "node_modules"],
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  plugins: [new webpack.DefinePlugin(env.stringified)],
  module: {
    rules: [
      {
        test: /\.(j|t)s$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        include: /\/includes/,
      }),
    ],
  },
};
