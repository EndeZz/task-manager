const paths = require('./paths');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	output: {
		path: paths.build,
		publicPath: '/',
		filename: '[name].js',
		clean: true,
	},
	devServer: {
		static: {
			directory: paths.public,
			publicPath: '/public',
		},
		historyApiFallback: true,
		open: {
			app: {
				name: 'chrome',
			},
		},
		compress: true,
		hot: true,
		port: 8080,
	},
	module: {
		rules: [
			{
				test: /\.module\.(c|sc)ss$/i,
				use: [
					'style-loader',
					//MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							importLoaders: 2,
							modules: {
								localIdentName: '[name]__[local]-[hash:base64:5]'
							},
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /^((?!\.module).)*(c|sc)ss$/i,
				use: [
					'style-loader',
					//MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							importLoaders: 2,
							modules: {
								localIdentName: '[local]'
							},
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},

		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: `${paths.client}/index.html`,
			filename: `index.html`,
		}),
		//new MiniCssExtractPlugin({
		//	filename: 'styles/[name].css',
		//}),
	],
});
