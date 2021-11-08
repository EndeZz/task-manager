const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const PATHS = {
  client: path.join(__dirname, 'client'),
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  entry: {
    'index': PATHS.client + '/pages/index.tsx'
  },
  resolve: {
    extensions: ['.ts', '.js', '.jsx', '.tsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].bundle.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
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
      },
      // {
      //   test: /\.svg$/,
      //   loader: 'svg-inline-loader',
      // },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `assets/image/[name].[ext]`,
            }
          },
        ],
      },
    ]
  },
  devServer: {
    port: 5500,
    historyApiFallback: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: PATHS.client + '/pages/index.html',
      chunks: ['index'],
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: './style/[name].css'
    }),

    // new ESLintPlugin({
    //   extensions: ['ts', 'tsx', 'js', 'jsx']
    // }),
    // new StylelintPlugin({
    //   extensions: ['css', 'scss', 'sass']
    // })
  ]
}
