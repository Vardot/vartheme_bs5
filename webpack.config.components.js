const path = require('path');
const isDev = (process.env.NODE_ENV !== 'production');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const postcssRTLCSS = require('postcss-rtlcss');
const { Mode } = require('postcss-rtlcss/options');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: {
    // ################################################
    // SCSS
    // ################################################
    // Components
    // 'atoms/accordion-item/accordion-item': ['./components/atoms/accordion-item/accordion-item.scss'],
    // 'atoms/progress-bar/progress-bar': ['./components/atoms/progress-bar/progress-bar.scss'],
    // 'atoms/taxonomy/taxonomy': ['./components/atoms/taxonomy/taxonomy.scss'],
    // 'molecules/alert/alert': ['./components/molecules/alert/alert.scss'],
    // 'molecules/pagination/pagination': ['./components/molecules/pagination/pagination.scss'],
    // 'molecules/breadcrumb/breadcrumb': ['./components/molecules/breadcrumb/breadcrumb.scss'],
    // 'molecules/tabs/tabs': ['./components/molecules/tabs/tabs.scss'],
    // 'organisms/nav/nav': ['./components/organisms/nav/nav.scss'],
    // 'organisms/navbar/navbar': ['./components/organisms/navbar/navbar.scss'],
    // // 'organisms/page-header/page-header': ['./components/organisms/page-header/page-header.scss'],
    // 'organisms/page-footer/page-footer': ['./components/organisms/page-footer/page-footer.scss'],
    // 'organisms/page-better-login/page-better-login': ['./components/organisms/page-better-login/page-better-login.scss'],
    // 'organisms/social-auth/social-auth': ['./components/organisms/social-auth/social-auth.scss'],
    // 'organisms/card-featured/card-featured': ['./components/organisms/card-featured/card-featured.scss'],
    // 'organisms/card-impressed/card-impressed': ['./components/organisms/card-impressed/card-impressed.scss'],
    // 'organisms/card-overlay/card-overlay': ['./components/organisms/card-overlay/card-overlay.scss'],
    // 'organisms/card-hero/card-hero': ['./components/organisms/card-hero/card-hero.scss'],
    // 'organisms/card-text/card-text': ['./components/organisms/card-text/card-text.scss'],
    // 'organisms/heroslider/heroslider': ['./components/organisms/heroslider/heroslider.scss'],
    // 'organisms/media-hero-slide/media-hero-slide': ['./components/organisms/media-hero-slide/media-hero-slide.scss'],
    // 'organisms/media-hero-slider/media-hero-slider': ['./components/organisms/media-hero-slider/media-hero-slider.scss'],
    // 'organisms/media-header/media-header': ['./components/organisms/media-header/media-header.scss'],
    // 'pages/page/page': ['./components/pages/page/page.scss']
  },
  output: {
    path: path.resolve(__dirname, 'components'),
    pathinfo: true,
    publicPath: '../../',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
        use: [{
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', //?[contenthash]
              publicPath: (url, resourcePath, context) => {
                const relativePath = path.relative(context, resourcePath);

                // Settings
                if (resourcePath.includes('media/settings')) {
                  return `../../${relativePath}`;
                }

                return `../${relativePath}`;
              },
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
    noParse: [ path.resolve(__dirname, 'components/atoms/accordion/accordion.js')],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
    extensions: ['.js', '.json'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./components", to: "./" }
      ],
      options: {
        concurrency: 100,
      },
    }),
    new RemoveEmptyScriptsPlugin(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new MiniCssExtractPlugin(),
  ],
  watchOptions: {
    aggregateTimeout: 300,
    ignored: ['components/**/**/*.js', '**/*.woff', '**/*.json', '**/*.woff2', '**/*.jpg', '**/*.png', '**/*.svg', 'node_modules'],
  }
};
