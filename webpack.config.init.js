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
          from: path.resolve(__dirname, "node_modules/@popperjs/core/dist/umd/popper.js"),
          to: path.resolve(__dirname, "js/popperjs"),
          context: "node_modules/@popperjs/core/dist/",
        },
        {
          from: path.resolve(__dirname, "node_modules/bootstrap/js/dist/*.js"),
          to: path.resolve(__dirname, "js/bootstrap"),
          context: "node_modules/bootstrap/js/dist/",
        },
        {
          from: path.resolve(__dirname, "node_modules/bootstrap/js/dist/dom/*.js"),
          to: path.resolve(__dirname, "js/bootstrap/dom"),
          context: "node_modules/bootstrap/js/dist/dom",
        },
        {
          from: path.resolve(__dirname, "node_modules/bootstrap/js/dist/util/*.js"),
          to: path.resolve(__dirname, "js/bootstrap/util"),
          context: "node_modules/bootstrap/js/dist/util",
        },
        // Uncomment to use the fontawesome library.
        // {
        //   from: path.resolve(__dirname, "node_modules/@fortawesome/fontawesome-free/css/all.min.css"),
        //   to: path.resolve(__dirname, "fonts/fontawesome-free/css"),
        //   context: "node_modules/@fortawesome/fontawesome-free/css",
        // },
        // {
        //   from: path.resolve(__dirname, "node_modules/@fortawesome/fontawesome-free/webfonts/*"),
        //   to: path.resolve(__dirname, "fonts/fontawesome-free/webfonts"),
        //   context: "node_modules/@fortawesome/fontawesome-free/webfonts",
        // },
        {
          from: path.resolve(__dirname, "node_modules/bootstrap-icons/font/*"),
          to: path.resolve(__dirname, "fonts/bootstrap-icons/font/"),
          context: "node_modules/bootstrap-icons/font",
        },
        {
          from: path.resolve(__dirname, "node_modules/bootstrap-icons/font/fonts/*"),
          to: path.resolve(__dirname, "fonts/bootstrap-icons/font/fonts"),
          context: "node_modules/bootstrap-icons/font/fonts",
        },
        {
          from: path.resolve(__dirname, "node_modules/bootstrap-icons/icons/*"),
          to: path.resolve(__dirname, "images/icons"),
          context: "node_modules/bootstrap-icons/icons",
        }
      ],
    }),
  ],
});
