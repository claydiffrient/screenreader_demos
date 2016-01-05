var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: './app/Index',
    tables: './app/Tables',
    forms: './app/Forms',
    screenreaderOnly: './app/ScreenreaderOnly',
    buttons: './app/Buttons',
    headings: './app/Headings',
    liveRegions: './app/LiveRegions',
    images: './app/Images'
  },
  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
    publicPath: '/assets/',
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js'
    }),
    new ExtractTextPlugin('[name].css')
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')}
    ]
  }
};
