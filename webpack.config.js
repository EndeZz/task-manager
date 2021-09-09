const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

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
    entry: {
      main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
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
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/[hash][ext][query]'
          }
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
          type: 'asset/inline',
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(s[ac]ss)$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
  };

  return config;
};
