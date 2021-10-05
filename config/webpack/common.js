const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './client/pages/index/index.ts',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['html-loader', 'pug-html-loader'],
      },
      {
        test: /\.tsx?$/, 
        use: 'ts-loader',
        exclude: /node_modules/,
        resolve: {extensions: ['.tsx', '.ts', '.js']},
      },
      { test: /\.svg$/, use: 'svg-inline-loader' },
      { test: /\.scss$/, use: ['sass-loader', 'css-loader'] },
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/pages/index/index.html',
    }),
    new ESLintPlugin(),
    new StylelintPlugin(),
  ],
};
