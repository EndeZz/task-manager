const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

// режим - build или dev
const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`);

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './js/main.js',
  output: {
    filename: `./js/${filename('js')}`,
    path: path.resolve(__dirname, 'app'),
    publicPath: ''
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'app'),
    open: true,
    compress: true,
    hot: true,
    port: 3000
  },
  plugins: [
    new HTMLWebpackPlugin({
    // откуда будут браться данные
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      minify: {
      // удаляет пробелы если мы в production
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `./css/${filename('css')}`
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/img'), to: path.resolve(__dirname, 'app/img') }
      ]
    })
  ],
  devtool: isProd ? false : 'source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        //  css-файл
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
            // options: {
            //     hmr: isDev
            // },
          },
          'css-loader'
        ]
      },
      {
        // scss
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resoursePath, context) => `${path.relative(path.dirname(resoursePath), context)}/`
            }
          },
          'css-loader',
          'sass-loader'
        ]
      },
      { // JS
        test: /\.js$/,
        exclude: /none_modules/,
        use: ['babel-loader']
      },
      {
        // test: /\.(?:|gif|png|jpg|jpeg|svg)$/,
        // use: [{
        //     loader: 'file-loader',
        //     options: {
        //         name: `./img/${filename('[ext]')}`,
        //     }
        // }],
        test: /\.(?:|gif|png|jpg|jpeg|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/[hash][ext][query]'
        }
      },
      {
        test: /\.(?:|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: `./fonts/${filename('[ext]')}`
          }
        }]
      }
    ]
  }
};
