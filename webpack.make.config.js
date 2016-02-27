var path           = require('path');
var webpack        = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var makeConfig = options => {
  return {
    entry: {
      app: ['./src/js/app.jsx']
    },
    output: {
      path: path.resolve(__dirname, 'dest'),
      publicPath: options.debug ? 'http://localhost:8080/' : 'http://www.tangsj.com/',
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
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        },
        {
          test: /\.json$/,
          loader: 'json'
        }
      ]
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
      })
    ]
  }
}

module.exports = makeConfig;