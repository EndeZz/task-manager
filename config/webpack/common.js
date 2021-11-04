const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './client/pages/index/index.ts',
    404: './client/pages/404/404.ts',
    auth: './client/pages/auth/auth.ts',
    notifications: './client/pages/notifications/notifications.ts',
    profile: './client/pages/profile/profile.ts',
    task: './client/pages/task/task.ts',
    tasknew: './client/pages/task-new/task-new.ts',
    tasks: './client/pages/tasks/tasks.ts',
    user: './client/pages/user/user.ts',
    users: './client/pages/users/users.ts',
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/../../dist'),
    filename: '[name].[contenthash].js',
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
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
      {
        test: /\.css$/i,
        use: 'style-loader',
      },

      { test: /\.(c|sa|sc)ss$/i, 
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ],
      },
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/pages/index/index.pug',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './client/pages/404/404.pug',
      filename: '404.html',
      chunks: ['404']
    }),
    new HtmlWebpackPlugin({
      template: './client/pages/auth/auth.pug',
      filename: 'auth.html',
      chunks: ['auth']
    }),
    new HtmlWebpackPlugin({
      template: './client/pages/notifications/notifications.pug',
      filename: 'notifications.html',
      chunks: ['notifications']
    }),
    new HtmlWebpackPlugin({
      template: './client/pages/profile/profile.pug',
      filename: 'profile.html',
      chunks: ['profile']
    }),
    new HtmlWebpackPlugin({
      template: './client/pages/task/task.pug',
      filename: 'task.html',
      chunks: ['task']
    }),
    new HtmlWebpackPlugin({
      template: './client/pages/task-new/task-new.pug',
      filename: 'task-new.html',
      chunks: ['tasknew']
    }),
    new HtmlWebpackPlugin({
      template: './client/pages/tasks/tasks.pug',
      filename: 'tasks.html',
      chunks: ['tasks']
    }),
    new HtmlWebpackPlugin({
      template: './client/pages/user/user.pug',
      filename: 'user.html',
      chunks: ['user']
    }),
    new HtmlWebpackPlugin({
      template: './client/pages/users/users.pug',
      filename: 'users.html',
      chunks: ['users']
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new ESLintPlugin(),
    new StylelintPlugin(),
  ],
};
