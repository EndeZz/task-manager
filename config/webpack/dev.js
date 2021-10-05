const path = require('path');

const webpack = require('webpack');
const { merge } = require('webpack-merge');

const common = require('./common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    compress: true,
    contentBase: __dirname + "/client/pages/",
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 3000,
    clientLogLevel: 'silent',
  },
});
