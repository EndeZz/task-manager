const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const PATHS = {
  client: path.join(__dirname, 'client'),
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  entry: {
    'index': PATHS.client + '/pages/index/index.js',
    'tasks': PATHS.client + '/pages/tasks/tasks.js',
    'task': PATHS.client + '/pages/task/task.js',
    'users': PATHS.client + '/pages/users/users.js',
    'auth': PATHS.client + '/pages/auth/auth.js',
    '404': PATHS.client + '/pages/404/404.js',
    'profile': PATHS.client + '/pages/profile/profile.js',
    'notifications': PATHS.client + '/pages/notifications/notifications.js',
    'user': PATHS.client + '/pages/user/user.js',
    'task-new': PATHS.client + '/pages/task-new/task-new.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      }
    ]
  },
  devServer: {
    port: 5500
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: PATHS.client + '/pages/index/index.pug',
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HTMLWebpackPlugin({
      template: PATHS.client + '/pages/tasks/tasks.pug',
      chunks: ['tasks'],
      filename: 'tasks.html'
    }),
    new HTMLWebpackPlugin({
      template: PATHS.client + '/pages/task/task.pug',
      chunks: ['task'],
      filename: 'task.html'
    }),
    new HTMLWebpackPlugin({
      template: PATHS.client + '/pages/users/users.pug',
      chunks: ['users'],
      filename: 'users.html'
    }),
    new HTMLWebpackPlugin({
      template: PATHS.client + '/pages/auth/auth.pug',
      chunks: ['auth'],
      filename: 'auth.html'
    }),
    new HTMLWebpackPlugin({
      template: PATHS.client + '/pages/404/404.pug',
      chunks: ['404'],
      filename: '404.html'
    }),
    new HTMLWebpackPlugin({
      template: PATHS.client + '/pages/profile/profile.pug',
      chunks: ['profile'],
      filename: 'profile.html'
    }),
    new HTMLWebpackPlugin({
      template: PATHS.client + '/pages/notifications/notifications.pug',
      chunks: ['notifications'],
      filename: 'notifications.html'
    }),
    new HTMLWebpackPlugin({
      template: PATHS.client + '/pages/user/user.pug',
      chunks: ['user'],
      filename: 'user.html'
    }),
    new HTMLWebpackPlugin({
      template: PATHS.client + '/pages/task-new/task-new.pug',
      chunks: ['task-new'],
      filename: 'task-new.html'
    }),
    new HtmlWebpackPugPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: './style/[name].css'
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: path.resolve(__dirname, './src/file'), to: path.resolve(__dirname, './dist/file') }
    //   ],
    // }),
    new ESLintPlugin({
      extensions: ['ts', 'tsx', 'js', 'jsx']
    }),
    new StylelintPlugin({
      extensions: ['css', 'scss', 'sass']
    })
  ]
}
