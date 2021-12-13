var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var csscomb = require('gulp-csscomb');
var autoprefixer = require('autoprefixer');
var filter = require('gulp-filter');
var rtlcss = require('gulp-rtlcss');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

const paths = {
  scss: {
    src: 'scss/**/*/*.scss',
    dest: 'css',
    watch: 'scss/**/*/*.scss'
  },
  js: {
    bootstrap_src: './node_modules/bootstrap/dist/js/*',
    bootstrap_dest: './js/bootstrap'
  },
  fontawesome: {
    css_src: './node_modules/@fortawesome/fontawesome-free/css/all.min.css',
    css_dest: './fonts/fontawesome-free/css',
    webfonts_src: './node_modules/@fortawesome/fontawesome-free/webfonts/*',
    webfonts_dest: './fonts/fontawesome-free/webfonts'
  }
};

// Compile sass into CSS & auto-inject into browsers
function compile () {
  var sassOptions = {
    outputStyle: 'expanded',
    indentType: 'space',
    indentWidth: 2,
    linefeed: 'lf'
  };

  // Filter mixins and variables not to be compiled to CSS.
  const filterFiles = filter(['**', '!**/mixins/*.scss', '!mixins.scss', '!variables.scss']);

  // Compile all .scss to .css .
  const css_status = gulp.src([paths.scss.src])
    .pipe(filterFiles)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(csscomb())
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(browserSync.stream());

  // Re-Compile LTR CSS files.
  // Change rtl files to a wild card selection directory:
  // RTL_SRC = "css/rtl/**/*/*.css"
  // RTL_SRC = "css/rtl"
  const rtl_css_status = gulp.src('css/base/bootstrap.base.css')
		.pipe(rtlcss())
    .pipe(rename({
      dirname: ".",
      basename: "bootstrap",
      prefix: "",
      suffix: "-rtl.base",
      extname: ".css"
    }))
		.pipe(gulp.dest('./css/rtl/base'));

  return (css_status && rtl_css_status);

}

// Move the Bootstrap JavaScript files into our js/bootstrap folder.
function move_bootstrap_js_files() {
  return gulp.src([
        paths.js.bootstrap_src
     ])
    .pipe(gulp.dest(paths.js.bootstrap_dest))
    .pipe(browserSync.stream());
}

// Move the Font Awesome css file to the theme.
function move_fontawesome_css_file() {
  return gulp.src([
        paths.fontawesome.css_src,
     ])
    .pipe(gulp.dest(paths.fontawesome.css_dest))
    .pipe(browserSync.stream());
}

// Move the Font Awesome webfonts files to the theme.
function move_fontawesome_webfonts_files() {
  return gulp.src([
        paths.fontawesome.webfonts_src,
     ])
    .pipe(gulp.dest(paths.fontawesome.webfonts_dest))
    .pipe(browserSync.stream());
}

// Watching scss files.
function watch() {
  gulp.watch([paths.scss.watch], compile);
}

const build = gulp.series(compile, move_bootstrap_js_files, move_fontawesome_css_file, move_fontawesome_webfonts_files, gulp.parallel(watch));

exports.compile = compile;
exports.move_bootstrap_js_files = move_bootstrap_js_files;
exports.move_fontawesome_css_file = move_fontawesome_css_file;
exports.move_fontawesome_webfonts_files = move_fontawesome_webfonts_files;
exports.watch = watch;

exports.default = build;
