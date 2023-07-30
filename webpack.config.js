const path = require('path');
const isDev = (process.env.NODE_ENV !== 'production');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const postcssRTLCSS = require('postcss-rtlcss');
const { Mode } = require('postcss-rtlcss/options');

module.exports = {
  mode: 'production',
  entry: {
    // ################################################
    // SCSS
    // ################################################
    // Base
    "base/bootstrap.base": ["./scss/base/bootstrap.base.scss"],
    "base/vartheme.base": ["./scss/base/vartheme.base.scss"],
    "base/bootstrap-rtl.base": ["./scss/base/bootstrap-rtl.base.scss"],
    "base/vartheme-rtl.base": ["./scss/base/vartheme-rtl.base.scss"],
    // Layout
    "layout/edge2edge.layout": ["./scss/layout/edge2edge.layout.scss"],
    "layout/equal-height.layout": ["./scss/layout/equal-height.layout.scss"],
    "layout/print.layout": ["./scss/layout/print.layout.scss"],
    // Components are in the webpack.config.components.js file.
    // Theme
    "theme/content-moderation.theme": ["./scss/theme/content-moderation.theme.scss"],
  },
  output: {
    path: path.resolve(__dirname, 'css'),
    pathinfo: true,
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        exclude: /sprite\.svg$/,
        type: 'javascript/auto',
        use: [{
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', //?[contenthash]
              outputPath: '../../'
            },
          },
          {
            loader: 'img-loader',
            options: {
              enabled: !isDev,
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              name: '[name].[ext]?[hash]',
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDev,
              importLoaders: 2,
              url: (url) => {
                // Don't handle sprite svg
                if (url.includes('sprite.svg')) {
                  return false;
                }

                return true;
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDev,
              postcssOptions: {
                plugins: [
                  autoprefixer(),
                  postcssRTLCSS({
                    mode: Mode.override, // Use 'combined' mode for RTL flipping
                    ignorePrefixedRules: true,
                  }),
                  ['postcss-perfectionist', {
                    format: 'expanded',
                    indentSize: 2,
                    trimLeadingZero: true,
                    zeroLengthNoUnit: false,
                    maxAtRuleLength: false,
                    maxSelectorLength: false,
                    maxValueLength: false,
                  }]
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
              // Global SCSS imports:
              additionalData: `
                @use "sass:color";
                @use "sass:math";
              `,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
    extensions: ['.js', '.json'],
  },
  plugins: [
    new RemoveEmptyScriptsPlugin(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new MiniCssExtractPlugin(),
  ],
  watchOptions: {
    aggregateTimeout: 300,
    ignored: ['**/*.woff', '**/*.json', '**/*.woff2', '**/*.jpg', '**/*.png', '**/*.svg', 'node_modules', 'images'],
  }
};
