var path           = require('path');
var webpack        = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
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
    //配置别名，在项目中可缩减引用路径
    alias: {
      'jquery' : 'jquery/dist/jquery.min.js'
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
      ReactDOM: 'react-dom'
    })
  ]
}