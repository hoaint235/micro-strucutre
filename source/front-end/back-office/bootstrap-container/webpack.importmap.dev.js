const config = require("./webpack.importmap");
const webpack = require("webpack");

config.mode = "development";
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.devtool = "source-map";

config.devServer = {
  historyApiFallback: true,
  public: `${process.env.MRA_SETUP_HOST}:${process.env.MRA_SETUP_PORT}`,
  host: process.env.MRA_SETUP_HOST,
  port: process.env.MRA_SETUP_PORT,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  firewall: false,
  client: {
    host: process.env.MRA_SETUP_HOST,
  },
};

module.exports = config;
