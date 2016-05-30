"use strict"

const fs               = require('fs');
const gutil            = require('gulp-util');
const webpack          = require('webpack');
const webpackConfig    = require('./webpack.config.js');
const gulp             = require('gulp');
const postcss          = require('postcss');
const gulp_postcss     = require('gulp-postcss');
const autoprefixer     = require('autoprefixer');                // 浏览器前缀
const mqpacker         = require('css-mqpacker');                // MQ 包装器
const cssimport        = require('postcss-import');              // css import
const csswring         = require('csswring');                    // css minify
const nested           = require('postcss-nested');              // 支持css嵌套
const rename           = require('gulp-rename');                 // 文件重命名
const webpackDevServer = require('webpack-dev-server');
const clean            = require('gulp-clean');
const GulpSSH          = require('gulp-ssh');

const hostConfig = {
  host: '23.105.215.218',
  port: 27575,
  username: 'root',
  privateKey: fs.readFileSync('/Users/codecook/.ssh/id_rsa')
}

var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: hostConfig
})

/**
 * ssh
 */
gulp.task('publish', ['clean-server', 'publish-datas', 'publish-posts', 'publish-uploads'], () => {
  return gulp.src(['dest/**/*'])
        .pipe( gulpSSH.dest('/root/htdocs') )
});
gulp.task('clean-server', () => {
  return gulpSSH.exec(['cd htdocs/ && rm -rf *']);
});
gulp.task('publish-datas', () => {
  return gulp.src(['datas/**/*'])
        .pipe( gulpSSH.dest('/root/services/datas') )
});
gulp.task('publish-posts', () => {
  return gulp.src(['posts/**/*'])
        .pipe( gulpSSH.dest('/root/services/posts') )
});
gulp.task('publish-uploads', () => {
  return gulp.src(['uploads/**/*'])
        .pipe( gulpSSH.dest('/root/services/uploads') )
});

/**
 * clean
 */
gulp.task('clean', () => {
  return gulp.src('dest', {read: false})
    .pipe(clean());
});

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
  return gulp.src('./src/css/main.css')
          .pipe(gulp_postcss(processors))
          .on('error', errorHandler)
          .pipe(rename({suffix: ".min"}))
          .pipe(gulp.dest('./src/css'))
});

/**
 * webpack pro build
 */
gulp.task('webpack:build', callback => {
  var config = Object.create(webpackConfig);
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
gulp.task("webpack-dev-server", callback => {
  var config = Object.create(webpackConfig);
  config.devtool = "source-map";

  config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080", "webpack/hot/dev-server");

  var compiler = webpack(config);
  new webpackDevServer(compiler, {
    historyApiFallback: true, // 为React-Router 开启 browserHistory
    hot: true,
    compress: true, // enable gzip
    //publicPath: config.output.publicPath,
    stats: {
      colors: true,
      chunkModules: false // nodejs API https://webpack.github.io/docs/node.js-api.html
    }
  }).listen(8080, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/");
  });
});
/**
 * watch task
 */
gulp.task('watch', () => {
  gulp.watch([
    './src/css/**/*.css',
    '!./src/css/main.min.css'
  ], ['postcss']);
});

/**
 * quick
 */
gulp.task('dev', ['webpack-dev-server', 'watch']);
gulp.task('build', ['clean', 'webpack:build']);
gulp.task('default', () => {
  console.log('缺少指令！please use:  [gulp dev] OR  [gulp build]');
});

function errorHandler(error) {
  console.log(error.message);
  console.log(error.fileName);
  console.log('line:', error.line, 'column:', error.column);
  this.emit('end');
}
