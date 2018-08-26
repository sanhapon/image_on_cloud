const webpack= require('webpack');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../../client/src/index.js'),
    output: {        
        publicPath : '/',
        filename : 'bundle.js',
        path : path.resolve(__dirname, 'dist')
        
    },
    mode: 'development',
    plugins: [new webpack.HotModuleReplacementPlugin()],
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
        ],
      }
}