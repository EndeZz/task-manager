const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const PATHS = {
  client: path.join(__dirname, './client'),
  dist: path.join(__dirname, './dist'),
};

module.exports = (options) => {
  const isDev = options.name === 'development';

  const config = {
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'inline-source-map' : false,
    devServer: {
      hot: true,
      open: true,
      compress: true,
      port: 8080,
    },
    context: PATHS.client,
    entry: {
      index: `${PATHS.client}/pages/index/index.js`,
      task: `${PATHS.client}/pages/task/task.js`,
      tasks: `${PATHS.client}/pages/tasks/tasks.js`,
      404: `${PATHS.client}/pages/404/404.js`,
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${PATHS.client}/pages/index/index.html`,
        filename: 'index.html',
      }),
      new HtmlWebpackPlugin({
        template: `${PATHS.client}/pages/task/task.html`,
        filename: 'task.html',
      }),
      new HtmlWebpackPlugin({
        template: `${PATHS.client}/pages/tasks/tasks.html`,
        filename: 'tasks.html',
      }),
      new HtmlWebpackPlugin({
        template: `${PATHS.client}/pages/404/404.html`,
        filename: '404.html',
      }),
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].css',
      }),
      new ImageminPlugin({
        test: /\.(png|gif|svg|jpg|jpeg)$/i,
      }),
      new ESLintPlugin({ extensions: ['ts', 'tsx', 'js', 'jsx'] }),
      new StylelintPlugin({ extensions: ['css', 'scss', 'sass'] }),
    ],
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/[hash][ext][query]',
          },
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
          type: 'asset/inline',
        },
        {
          test: /\.css$/i,
          use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(s[ac]ss)$/i,
          use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    optimization: {
      minimize: true,
      minimizer: [new CssMinimizerPlugin()],
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            type: 'css/mini-extract',
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  };

  return config;
};
