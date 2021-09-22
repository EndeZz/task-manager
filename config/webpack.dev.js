const paths = require('./paths');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
	mode: 'development',
	devtool: 'source-map',
	entry: {
		main: `${paths.src}/js/index.js`,
	},
	output: {
		path: paths.build,
		publicPath: '/',
		filename: 'js/[name].js',
	},
	devServer: {
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
				test: /\.(c|sa|sc)ss$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							importLoaders: 1,
							modules: false
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					},
				],
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: `${paths.src}/index.html`,
			filename: 'index.html',
		}),
		new HtmlWebpackPlugin({
			template: `${paths.src}/tasks.html`,
			filename: 'tasks.html',
		}),
		new HtmlWebpackPlugin({
			template: `${paths.src}/users.html`,
			filename: 'users.html',
		}),
		new HtmlWebpackPlugin({
			template: `${paths.src}/tasks_edit.html`,
			filename: 'tasks_edit.html',
		}),
		new HtmlWebpackPlugin({
			template: `${paths.src}/new_user.html`,
			filename: 'new_user.html',
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
});