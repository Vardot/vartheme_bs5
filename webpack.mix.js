/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your application. See https://github.com/JeffreyWay/laravel-mix.
 |
 */
const proxy = require("./proxy.browsersync.js");
const mix = require("laravel-mix");
const glob = require("glob");
require("laravel-mix-stylelint");
require("laravel-mix-copy-watched");

/*
  |--------------------------------------------------------------------------
  | Configuration
  |--------------------------------------------------------------------------
  */
mix
  .webpackConfig({
    // Use the jQuery shipped with Drupal to avoid conflicts.
    externals: {
      jquery: "jQuery",
    },
  })
  .setPublicPath("build")
  .disableNotifications()
  .options({
    processCssUrls: false,
  });

/*
  |--------------------------------------------------------------------------
  | Browsersync
  |--------------------------------------------------------------------------
  */
mix.browserSync({
  proxy: proxy.proxy,
  files: [
    "build/js/**/*.js",
    "build/css/**/*.css",
    "build/components/**/*.css",
    "build/components/**/*.js",
    "src/**/*.twig",
    "templates/**/*.twig",
  ],
  stream: true,
});

/*
  |--------------------------------------------------------------------------
  | SASS
  |--------------------------------------------------------------------------
  */
mix.sass("src/scss/main.style.scss", "css");

/**
 * Compile theme SASS directory to build/css/components
 */
glob.sync("src/components/**/*.scss").forEach((sourcePath) => {
  const destinationPath = sourcePath.replace(
    /^src\/(components\/.+)\/_?(.+)\.scss$/,
    "$1/$2.css"
  );

  mix.sass(sourcePath, destinationPath);
});

/**
 * Compile theme SASS directory to build/css/base
 */
glob.sync("src/scss/base/*.scss").forEach((sourcePath) => {
  mix.sass(sourcePath, "css/base");
});

/**
 * Compile theme SASS directory to build/css/layout
 */
glob.sync("src/scss/layout/*.scss").forEach((sourcePath) => {
  mix.sass(sourcePath, "css/layout");
});

/**
 * Compile theme SASS directory to build/css/theme
 */
glob.sync("src/scss/theme/*.scss").forEach((sourcePath) => {
  mix.sass(sourcePath, "css/theme");
});

/*
  |--------------------------------------------------------------------------
  | JS
  |--------------------------------------------------------------------------
  */
mix.js("src/js/main.script.js", "js");

glob.sync("src/components/**/*.js").forEach((sourcePath) => {
  const destinationPath = sourcePath.replace(
    /^src\/(components\/.+)\/(.+)\.js$/,
    "$1/$2.js"
  );

  mix.js(sourcePath, destinationPath);
});
/*
  |--------------------------------------------------------------------------
  | Style Lint
  |--------------------------------------------------------------------------
  */
mix.stylelint({
  configFile: "./.stylelintrc.js",
  context: "./src",
  failOnError: false,
  files: ["**/*.scss"],
  quiet: false,
  customSyntax: "postcss-scss",
});

/*
  |--------------------------------------------------------------------------
  * IMAGES / ICONS / VIDEOS / FONTS
  |--------------------------------------------------------------------------
  */
// * Directly copies the images, icons and fonts with no optimizations on the images
mix.copyDirectoryWatched("src/assets/images", "build/assets/images");
mix.copyDirectoryWatched("src/assets/icons", "build/assets/icons");
mix.copyDirectoryWatched("src/assets/videos", "build/assets/videos");
mix.copyDirectoryWatched("src/assets/fonts/**/*", "build/fonts");
