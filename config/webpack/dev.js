const path = require('path');

const webpack = require('webpack');
const { merge } = require('webpack-merge');

const common = require('./common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    compress: true,
    contentBase: path.build,
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 3000,
    clientLogLevel: 'silent',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
