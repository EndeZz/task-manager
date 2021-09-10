const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const fs = require('fs');
const paths = require('./path');

const pagesDir = `${paths.src}/pug/pages/`;
const pages = fs.readdirSync(pagesDir).filter((fileName) => fileName.endsWith('.pug'));

module.exports = {
  context: paths.src,
  entry: [`${paths.src}/index.js`],
  devtool: 'source-map',
  output: {
    clean: true,
    path: paths.build,
    filename: 'script.js',
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
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      /** SCSS/SAAS */
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      /** fonts */
      {
        test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
      /** images */
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: `${paths.src}/pages/index.html`,
    //   filename: 'index.html',
    // }),
    ...pages.map((page) => new HtmlWebpackPlugin({
      template: `${pagesDir}/${page}`,
      filename: `./${page.replace(/\.pug/, '.html')}`,
    })),
    new HtmlWebpackPlugin({
      template: `${pagesDir}/index.pug`,
      filename: './index.html',
      inject: true,
    }),
    new StylelintPlugin(),
    new ESLintPlugin(),
  ],
};
