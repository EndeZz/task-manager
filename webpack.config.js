const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const EsLintPlugin = require('eslint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;


module.exports = {
  context: path.resolve(__dirname, 'client'),
  // context: PATHS.src,
  mode: 'development',
  entry: path.join(__dirname, './client', 'index.jsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output: {
    filename: `./js/${filename('js')}`,
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    open: true,
    compress: true,
    port: 3000
  },
  plugins: [

    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `./css/${filename('css')}`
    }),
    // new EsLintPlugin({extensions: ['.tsx', '.ts', '.js', '.jsx']}),
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'client', 'index.html'),
    }),
  ],
  devtool: isProd ? false : 'source-map',
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [{
          loader: 'html-loader'
        }, {
          loader: 'pug-html-loader',
          options: {
            exports: false
          }
        }]
      },
      {
        test: /\.(js|tsx|jsx|ts)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
            plugins: ['transform-react-pug', 'transform-react-jsx']
          }
        }
      },
      // {
      //   test: /\.tsx$/,
      //   exclude: /node-modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-react', '@babel/preset-typescript']
      //     }
      //   }
      // },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => path.relative(path.dirname(resourcePath), context) + '/'
            }
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(?:|gif|png|jpg|jpeg|svg|mp4|mp3)$/,
        type: 'asset/resource',
        generator: {
          filename: `./public/${filename('[ext]')}`
        }
      },
      {
        test: /\.(?:|woff)$/,
        type: 'asset/resource',
        generator: {
          filename: `./fonts/${filename('[ext]')}`
        }
      }
    ]
  }
};

