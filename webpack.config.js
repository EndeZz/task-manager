const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const mode = process.env.NODE_ENV;
const isDev = mode === 'development';
const filename = (ext) => isDev ? `[name]${ext}` : `[name].[contenthash]${ext}`;

module.exports = {
  entry: './js/index.js',
  output: {
    filename: `./js/${filename('.js')}`,
    path: path.resolve(__dirname, 'dist'),
    environment: {
      arrowFunction: false,
    },
  },
  mode,
  context: path.resolve(__dirname, 'src'),
  plugins: [
    new ESLintPlugin(),
    new StylelintPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      minify: {
        removeComments: !isDev,
        collapseWhitespace: !isDev,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `./css/${filename('.css')}`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => path.relative(path.dirname(resourcePath), context) + '/',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(?:|gif|png|jpg|jpeg|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: `./img/${filename('[ext]')}`,
        },
      },
      {
        test: /\.(?:|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: `./fonts/${filename('[ext]')}`,
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
    port: 3000,
    hot: true,
    compress: true,
    client: {
      overlay: true,
    },
    devMiddleware: {
      writeToDisk: true,
    },
  },
}
