const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const SRC = path.resolve(__dirname, 'node_modules');

module.exports = {
  context: path.resolve(__dirname, 'client'),
  // context: PATHS.src,
  mode: 'development',
  entry: {
    index: './pages/index/index.jsx',
    tasks: './pages/tasks/tasks.jsx',
    task: './pages/task/task.jsx',
    publish: './pages/publish/publish.jsx',
    taskNew: './pages/task-new/task-new.jsx',
    users: './pages/users/users.jsx',
    user: './pages/user/user.jsx',
    auth: './pages/auth/auth.jsx',
    notifications: './pages/notifications/notifications.jsx',
    404: './pages/404/404.jsx',
    profile: './pages/profile/profile.jsx',
    main: './pages/main.jsx'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {        
      'react-router-dom': path.resolve('./node_modules/react-router-dom')
    }
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
    new ScriptExtHtmlWebpackPlugin({
      async: ['user', 'users']
    }),
    new HTMLWebpackPlugin({
      template: './pages/index/index.pug',
      filename: 'index.html',
      inject: true,
    }),
    new HTMLWebpackPlugin({
      template: './pages/tasks/tasks.pug',
      filename: 'tasks.html',
      inject: true,
    }),
    new HTMLWebpackPlugin({
      template: './pages/task/task.pug',
      filename: 'task.html',
      inject: true,
    }),
    new HTMLWebpackPlugin({
      template: './pages/publish/publish.pug',
      filename: 'publish.html',
      inject: true,
    }),
    new HTMLWebpackPlugin({
      template: './pages/task-new/task-new.pug',
      filename: 'task-new.html',
      inject: true,
    }),
    new HTMLWebpackPlugin({
      template: './pages/users/users.pug',
      filename: 'users.html',
      inject: true,
    }),
    new HTMLWebpackPlugin({
      template: './pages/user/user.pug',
      filename: 'user.html',
      inject: true,
    }),
    new HTMLWebpackPlugin({
      template: './pages/auth/auth.pug',
      filename: 'auth.html',
      inject: true,
    }),
    new HTMLWebpackPlugin({
      template: './pages/notifications/notifications.pug',
      filename: 'notifications.html',
      inject: true,
    }),
    new HTMLWebpackPlugin({
      template: './pages/404/404.pug',
      filename: '404.html',
      inject: true,
    }),
    new HTMLWebpackPlugin({
      template: './pages/profile/profile.pug',
      filename: 'profile.html',
      inject: true,
    }),
    new HTMLWebpackPlugin({
      template: './pages/main.pug',
      filename: 'main.html',
      inject: true,
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
      // { test: /\.pug$/, 
      //   use: [require.resolve('babel-loader'), 
      //   require.resolve('pug-as-jsx-loader')] 
      // },
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
      {
        test: /\.tsx$/,
        exclude: /node-modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-typescript']
          }
        }
      },
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
      // {
      //   test: /\.mp3$/,
      //   include: SRC,
      //   loader: 'file-loader'
      // },
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

