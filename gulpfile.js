"use strict"
const gutil        = require('gulp-util');
const webpack      = require('webpack');
const webpackConfig= require('./webpack.config.js');
const gulp         = require('gulp');
const postcss      = require('postcss');
const gulp_postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');                // 浏览器前缀
const mqpacker     = require('css-mqpacker');                // MQ 包装器
const cssimport    = require('postcss-import');              // css import
const csswring     = require('csswring');                    // css minify
const nested       = require('postcss-nested');              // 支持css嵌套
const rename       = require('gulp-rename');                 // 文件重命名
const webpackDevServer = require('webpack-dev-server');

/**
 * postcss
 */
gulp.task('postcss', () => {
  var processors = [
    cssimport,
    nested,
    mqpacker,
    autoprefixer,
    csswring({
      removeAllComments: true
    })
  ];
  return gulp.src('./static/css/main.css')
          .pipe(gulp_postcss(processors))
          .on('error', errorHandler)
          .pipe(rename({suffix: ".min"}))
          .pipe(gulp.dest('./dest/css'))
          .pipe(gulp.dest('./static/css'))
});

/**
 * webpack pro build
 */
gulp.task('webpack:build', callback => {
  var config = Object.create(webpackConfig);
  //config.devtool = "source-map";
  // run webpack
  webpack(config, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build", err);
    gutil.log("[webpack:build]", stats.toString({
      colors: true
    }));
    callback();
  });
});

/**
 * webpack dev server
 */
gulp.task("webpack-dev-server", function(callback) {
  var config = Object.create(webpackConfig);
  config.devtool = "source-map";

  config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080", "webpack/hot/dev-server");

  var compiler = webpack(config);
  new webpackDevServer(compiler, {
    hot: true,
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    }
  }).listen(8080, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/");
  });
});

/**
 * images copy
 */
gulp.task('images', () => {
  return gulp.src('./static/images/**/*.*')
          .pipe(gulp.dest('./dest/images'))
});

/**
 * font copy
 */
gulp.task('font', () => {
  return gulp.src('./static/font/**/*.*')
          .pipe(gulp.dest('./dest/font'))
});

/**
 * watch task
 */
gulp.task('watch', () => {
  gulp.watch([
    './static/css/**/*.css',
    '!./static/css/main.min.css'
  ], ['postcss', 'images']);
});

/**
 * quick
 */
gulp.task('dev', ['webpack-dev-server', 'watch']);
gulp.task('build', ['postcss', 'webpack:build', 'font', 'images']);
gulp.task('default', ['postcss', 'watch']);

function errorHandler(error) {
  console.log(error.message);
  console.log(error.fileName);
  console.log('line:', error.line, 'column:', error.column);
  this.emit('end');
}
