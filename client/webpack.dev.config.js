const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackConfig =  require('./webpack.config.js');

module.exports = merge(webpackConfig, {
  devServer: {
    contentBase: path.resolve(__dirname, '../dist/static'),
    port: 1337,
    proxy: {
      '/api': 'http://localhost:31337',
    },
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
});