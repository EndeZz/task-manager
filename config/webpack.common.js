const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		main: paths.src + '/js/index.js'
	},
	//output: {
	//	path: paths.build,
	//	publicPath: '/',
	//	filename: '[name].bundle.js',
	//	clean: true
	//},
	plugins: [
		new HtmlWebpackPlugin({
			template: paths.src + '/index.html',
			filename: 'index.html',
		}),
		new CleanWebpackPlugin(),
		new ESLintPlugin({
			files: ['.', 'src', 'config'],
			formatter: 'table',
			extensions: ['ts', 'tsx', 'js', 'jsx'],
			fix: true
		}),
		new StylelintPlugin({
			extensions: ['css', 'scss'],
			fix: true,
		}),
		new PrettierPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: paths.src,
					to: paths.build,
					globOptions: {
						ignore: ['**/index.html', '**/js', '**/scss'],
					},
					noErrorOnMissing: true,
				},
			],
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
				type: 'asset/resource',
				generator: {
					//filename: 'img/[name][ext]',
				}
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf)$/i,
				type: 'asset/inline',
			},
		]
	},
	resolve: {
		modules: [paths.src, 'node_modules'],
		extensions: ['.js', '.jsx', '.json'],
		alias: {
			'@': paths.src,
		},
	},
}