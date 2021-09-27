const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: path.join(__dirname, 'src', 'index.js'),
    task: path.join(__dirname, 'src', 'task.js'),
    uiKit: path.join(__dirname, 'src', 'ui-kit.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif|ico)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'images',
          },
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/pages', 'index.html'),
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/pages', 'task.html'),
      filename: 'task.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'ui-kit.html'),
      filename: 'ui-kit.html',
    }),
    new ESLintPlugin({
      context: path.join(__dirname, 'src'),
      extensions: ['.js'],
    }),
    new StylelintPlugin(),
  ],
};
