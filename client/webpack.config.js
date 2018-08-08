const webpack = require('webpack');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  //noInfo: true,
  entry: 
    // './src/webpack-public-path',
    // 'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src', 'index.js'),
  
  target: 'web',
  output: {
    //path: `${__dirname}/src`,
    path: path.resolve(__dirname, '..', 'server', 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: true
    }),
    new webpack.HotModuleReplacementPlugin(),
   // new webpack.NoErrorsPlugin(),
    // new HtmlWebpackPlugin({
    //   template: 'src/index.ejs',
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true
    //   },
    //   inject: true
    // })
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=[name].[ext]'},
      {test: /\.ico$/, loader: 'file?name=[name].[ext]'},
      {test: /(\.css|\.scss)$/, loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap']}
    ]
  },
  //postcss: ()=> [autoprefixer]
};
