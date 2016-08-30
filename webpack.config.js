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

var webpackConfig = {
  entry: {
    app: ['./src/js/app.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dest'),
    publicPath: `http://${process.env.MODE}/`,
    filename: 'js/[hash:8].[name].js',
    sourceMapFilename: '[file].map'
  },
  resolve: {
    root: [
      path.join(__dirname, 'src', 'js'),
      path.join(__dirname, 'node_modules')
    ],
    extensions: ['', '.json', '.jsx', '.js'],
    //配置别名，在项目中可缩减引用路径 【可以读取文件夹动态生成】
    alias: {
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
        loader: (env?'react-hot!babel': 'babel')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader') // style-loader
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
    new webpack.BannerPlugin('author : t_fate@163.com', {}),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('css/[contenthash:8].[name].css'),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'src/index.html',
      favicon: 'src/favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ]
}

// 生产环境定义
if(env == 'production'){
  var productPlugins = [
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.NoErrorsPlugin()
  ];
  webpackConfig.plugins = webpackConfig.plugins.concat(productPlugins);
}

module.exports = webpackConfig;
