const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');  
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry:"./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    }),
    // new ESLintPlugin({
    //   context: "./src/",
    //   extensions: [".js"],
    // }),
    // new StylelintPlugin(),
  ],
  

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", //2. inject styles into dom
          "css-loader"    //1. css -> commonjs
          ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },

    ]
  }
};