const path                = require('path');
const webpack             = require('webpack');
const HtmlWebpackPlugin   = require('html-webpack-plugin');
const ExtractTextPlugin   = require('extract-text-webpack-plugin');
const autoprefixer        = require('autoprefixer');
const mqpacker            = require('css-mqpacker');
const cssimport           = require('postcss-import');
const nested              = require('postcss-nested');
const uglifyJsPlugin      = webpack.optimize.UglifyJsPlugin;

const env = process.env.NODE_ENV || 'development';

module.exports = {
  entry: {
    app: ['./src/js/app.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dest'),
    publicPath: (env == 'development' ? 'http://localhost:8080/' : 'http://www.tangsj.com'),
    filename: 'js/[hash:8].[name].js',
    sourceMapFilename: '[file].map'
  },
  resolve: {
    root: [
      path.join(__dirname, 'src', 'js'),
      path.join(__dirname, 'node_modules')
    ],
    //配置别名，在项目中可缩减引用路径 【可以读取文件夹动态生成】
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
        test: /\.(jpg|png|gif)$/i,
        loader: 'file?limit=10000&name=images/[hash:8].[name].[ext]'
      },
      {
        test: /\.(woff|eot|ttf|woff2|svg|otf)$/i,
        loader: 'file?limit=10000&name=font/[hash:8].[name].[ext]'
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader!postcss-loader') // style-loader
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  postcss: function (webpack) {
      return [
        cssimport({
          addDependencyTo: webpack
        }),
        nested,
        autoprefixer,
        mqpacker
      ];
  },
  plugins: [
    new ExtractTextPlugin('css/[contenthash:8].[name].css'),
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
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'src/index.html',
      favicon: 'src/favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new webpack.NoErrorsPlugin()
  ]
}
