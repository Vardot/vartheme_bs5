const path = require('path');
const isDev = (process.env.NODE_ENV !== 'production');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const postcssRTLCSS = require('postcss-rtlcss');
const { Mode } = require('postcss-rtlcss/options');
const CopyPlugin = require("copy-webpack-plugin");
const postcssSorting = require('postcss-sorting');
const discardComments = require('postcss-discard-comments');
const discardEmpty = require('postcss-discard-empty');
const sortingConfig = require('./.postcss-sorting.json');

module.exports = {
  mode: 'development',
  entry: {
    // ################################################
    // SCSS
    // ################################################
    // Components
    'base/root/root': ['./components/base/root/root.scss'],
    'atoms/progress-bar/progress-bar': ['./components/atoms/progress-bar/progress-bar.scss'],
    'molecules/accordion-block/accordion-block': ['./components/molecules/accordion-block/accordion-block.scss'],
    'organisms/hero-slider-container/hero-slider-container': ['./components/organisms/hero-slider-container/hero-slider-container.scss'],
    'molecules/alert/alert': ['./components/molecules/alert/alert.scss'],
    'molecules/callout/callout': ['./components/molecules/callout/callout.scss'],
    'molecules/pagination/pagination': ['./components/molecules/pagination/pagination.scss'],
    'molecules/share/share': ['./components/molecules/share/share.scss'],
    'molecules/breadcrumb/breadcrumb': ['./components/molecules/breadcrumb/breadcrumb.scss'],
    'molecules/tabs/tabs': ['./components/molecules/tabs/tabs.scss'],
    'molecules/navbar-brand/navbar-brand': ['./components/molecules/navbar-brand/navbar-brand.scss'],
    'organisms/nav/nav': ['./components/organisms/nav/nav.scss'],
    'organisms/navbar/navbar': ['./components/organisms/navbar/navbar.scss'],
    'organisms/page-footer/page-footer': ['./components/organisms/page-footer/page-footer.scss'],
    'pages/page-better-login/page-better-login': ['./components/pages/page-better-login/page-better-login.scss'],
    'organisms/social-auth/social-auth': ['./components/organisms/social-auth/social-auth.scss'],
    'organisms/card-impressed/card-impressed': ['./components/organisms/card-impressed/card-impressed.scss'],
    'organisms/card-text/card-text': ['./components/organisms/card-text/card-text.scss'],
    'organisms/media-banner/media-banner': ['./components/organisms/media-banner/media-banner.scss'],
    'organisms/heroslider/heroslider': ['./components/organisms/heroslider/heroslider.scss'],
    'organisms/media-hero-slide/media-hero-slide': ['./components/organisms/media-hero-slide/media-hero-slide.scss'],
    'organisms/media-hero-slider/media-hero-slider': ['./components/organisms/media-hero-slider/media-hero-slider.scss'],
    'organisms/media-header/media-header': ['./components/organisms/media-header/media-header.scss'],
    'pages/page/page': ['./components/pages/page/page.scss'],
    'atoms/button/button': ['./components/atoms/button/button.scss'],
    'atoms/badge/badge': ['./components/atoms/badge/badge.scss'],
  },
  output: {
    path: path.resolve(__dirname, 'components'),
    pathinfo: false,
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
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDev,
              importLoaders: 2,
              url: {
                filter: (url) => {
                  // Don't handle sprite svg
                  if (url.includes('sprite.svg')) {
                    return false;
                  }

                  return true;
                },
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
                  postcssSorting(sortingConfig),
                  // Remove all comments including Bootstrap license headers
                  discardComments({
                    removeAll: true,
                  }),
                  // Remove empty CSS rules and blocks
                  discardEmpty(),
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
                @use "sass:string";
              `,
              sassOptions: {
                // Silence deprecation warnings from Bootstrap 5.3.8
                // These will be fixed in Bootstrap 6
                quietDeps: true,
                silenceDeprecations: ['import', 'global-builtin', 'color-functions'],
              },
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
