const path = require('path');

const webpack = require('webpack');
const { merge } = require('webpack-merge');

const common = require('./common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, '/../../public'),
      publicPath: '/public'
    },
    port: 8080,
    hot: true,
    open: true,
  },
});

