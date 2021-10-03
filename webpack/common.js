const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const fs = require('fs');
const path = require('path');
const paths = require('./path');

const pagesDir = path.resolve(`${paths.src}`, 'pages');

const folders = fs.readdirSync(pagesDir).map((item) => path.resolve(`${pagesDir}`, `${item}`));

const pugPages = folders
  .map((folder) => fs.readdirSync(folder)
    .filter((fileName) => fileName.endsWith('.pug'))
    .map((item) => path.resolve(`${folder}`, `${item}`)));

const tsPages = folders
  .map((folder) => fs.readdirSync(folder)
    .filter((fileName) => fileName.endsWith('.ts'))
    .map((item) => path.resolve(`${folder}`, `${item}`)));

module.exports = {
  context: paths.src,
  entry: tsPages.flat(),
  devtool: 'source-map',
  output: {
    clean: true,
    path: paths.build,
    filename: 'bundle.[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          'html-loader',
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        resolve: { extensions: ['.tsx', '.ts', '.js'] },
        use: {
          loader: 'ts-loader',
        },
      },

      /** SCSS/SAAS */
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ],
      },
      /** fonts */
      {
        test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'public/fonts/[name][ext]',
        },
      },
      /** images */
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
        // generator: {
        //   filename: 'public/img/[name][ext]',
        // },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      maxAsyncRequests: 9,
      maxInitialRequests: 9,
      name: false,
      cacheGroups: {
        libText: {
          test: /lib-concat/,
          name: 'libText',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    ...pugPages.flat().map((page) => new HtmlWebpackPlugin({
      template: `${page}`,
      filename: `./${path.basename(page).replace(/\.pug/, '.html')}`,
      inject: true,
    })),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new StylelintPlugin(),
    new ESLintPlugin(),
  ],
};
