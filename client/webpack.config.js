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
    filename: 'bundle-[hash].js'
  },
  resolve: { 
    modules: ['./node_modules'],
    extensions: ['.js', '.scss'] 
  },
  module: {
    rules: [
        {
          test: /\.js$/, 
          exclude: /node_modules/, 
          loaders: ['babel-loader']
        },
        { 
          test: /(\.css|\.scss)$/, 
          loaders: [
            'style-loader', 
            'css-loader?sourceMap', 
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [require('autoprefixer')]
              }
            }, 
            'sass-loader?sourceMap'
          ]
        }, 
        {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader'},
        {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"},
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'},
        {test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]'},
        {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'},
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: true
    }),
    new webpack.HotModuleReplacementPlugin(),
  
    new HtmlWebpackPlugin({
      //template: 'src/index.ejs',
      // minify: {
      //   removeComments: true,
      //   collapseWhitespace: true
      // },
      // inject: true
    })
  ],
  //postcss: ()=> [autoprefixer]
};
