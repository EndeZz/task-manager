const path = require('path');
const fs = require('fs');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

const PATHS = {
  client: path.join(__dirname, './client'),
  dist: path.join(__dirname, './dist'),
};

const PAGES_DIR = `${PATHS.client}/pages`;
// const PAGES = fs.readdirSync(PAGES_DIR).filter((fileName) => fileName.endsWith('.pug'));

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
      // app: glob.sync(`${PATHS.client}/pages/**/*.*s`),
      index: `${PAGES_DIR}/index/index.ts`,
      task: `${PAGES_DIR}/task/task.ts`,
      tasks: `${PAGES_DIR}/tasks/tasks.ts`,
      404: `${PAGES_DIR}/404/404.ts`,
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${PATHS.client}/pages/index/index.pug`,
        filename: 'index.html',
        chunks: ['index']
      }),
      new HtmlWebpackPlugin({
        template: `${PATHS.client}/pages/tasks/tasks.pug`,
        filename: 'tasks.html',
        chunks: ['tasks']
      }),
      new HtmlWebpackPlugin({
        template: `${PATHS.client}/pages/task/task.pug`,
        filename: 'task.html',
        chunks: ['task']
      }),
      new HtmlWebpackPlugin({
        template: `${PATHS.client}/pages/404/404.pug`,
        filename: '404.html',
        chunks: ['404']
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
      new HtmlWebpackPugPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
        {
          test: /\.pug$/,
          use: ['html-loader', 'pug-html-loader?pretty=true'],
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
