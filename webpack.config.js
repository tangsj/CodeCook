var path           = require('path');
var webpack        = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var webpackConfig = {
  entry: {
    app: ['./static/js/app.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dest'),
    publicPath: 'http://localhost:8080/dest/',
    filename: 'js/app.js',
    sourceMapFilename: '[file].map'
  },
  resolve: {
    root: [
      path.join(__dirname, 'static', 'js'),
      path.join(__dirname, 'node_modules')
    ],
    //配置别名，在项目中可缩减引用路径
    alias: {
      // 3rd lib
      'jquery' : 'jquery/dist/jquery.min.js',
      // site config
      'config': 'config.jsx',
      // layout tpl
      'layout.home': 'layout/home.jsx',
      'layout.main': 'layout/main.jsx',
      'layout.nomatch': 'layout/nomatch.jsx',
      'layout.about': 'layout/about.jsx'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      React: 'react',
      ReactDOM: 'react-dom',
      hljs: 'highlight.js',
      Config: 'config'
    })
  ]
}

module.exports = webpackConfig;