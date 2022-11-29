const { merge } = require('webpack-merge');
const path = require("path");
const webpackConfig = require('./webpack.config');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(webpackConfig, {
  mode: 'development',
  devtool: false,
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "node_modules/bootstrap/dist/js/bootstrap.min.js"),
          to: path.resolve(__dirname, "js/bootstrap"),
          context: "node_modules/bootstrap/dist/js/",
        },
        {
          from: path.resolve(__dirname, "node_modules/bootstrap/js/dist/*.js"),
          to: path.resolve(__dirname, "js/bootstrap"),
          context: "node_modules/bootstrap/js/dist/",
        },
      ],
    }),
  ],
});
