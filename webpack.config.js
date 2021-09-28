const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (options) => {
  const isDev = options.name === 'development';
  // const pages = ['index', 'task', 'task-result', '404' ];

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
      index: path.resolve(__dirname, './src/pages/index/index.js'),
      task: path.resolve(__dirname, './src/pages/task/task.js'),
      'task-result': path.resolve(__dirname, './src/pages/task/task-result.js'),
      404: path.resolve(__dirname, './src/pages/404/404.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/pages/index/index.html'),
        filename: 'index.html',
        chunks: ['index'],
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/pages/task/task.html'),
        filename: 'task.html',
        chunks: ['task'],
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/pages/task/task-result.html'),
        filename: 'task-result.html',
        chunks: ['task-result'],
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/pages/404/404.html'),
        filename: '404.html',
        chunks: ['404'],
      }),
      // TODO: переделать/ автоматизировать и для entry points
      // ...pages.map(
      //   (page) =>
      //     new HtmlWebpackPlugin({
      //       inject: true,
      //       template: path.resolve(__dirname, `./src/pages/${page}/${page}.html`),
      //       filename: `${page}.html`,
      //       chunks: [page],
      //     })
      // ),

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
