const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  devServer: {
    port: 8000,
    historyApiFallback: true,
    hot: true,
  },
  entry: {
    app: '/src/js/app.js',
  },
  plugins: [
    new ESLintPlugin(),
    new StylelintPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'), // шаблон
      filename: 'index.html', // название выходного файла
      minify: false,
    }),
    new MiniCssExtractPlugin({
      linkType: 'text/css',
      filename: 'styles/[name].[id].css',
      chunkFilename: '[name].[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
};
