const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
// const ESLintPlugin = require('eslint-webpack-plugin');
// const StylelintPlugin = require('stylelint-webpack-plugin');

const PATHS = {
  client: path.join(__dirname, 'client'),
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  entry: {
    'index': PATHS.client + '/pages/index/index.js',
    'tasks': PATHS.client + '/pages/tasks/tasks.js'
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
    // new ESLintPlugin({
    //   extensions: ['ts', 'tsx', 'js', 'jsx']
    // }),
    // new StylelintPlugin({
    //   extensions: ['css', 'scss', 'sass']
    // })
  ]
}
