const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');

module.exports = {
	entry: {
		main: `${paths.client}/index.tsx`
	},
	plugins: [
		new ESLintPlugin({
			files: ['.', 'client', 'config'],
			formatter: 'table',
			extensions: ['ts', 'tsx', 'js', 'jsx'],
			fix: true,
		}),
		new StylelintPlugin({
			extensions: ['css', 'scss'],
			fix: true,
		}),
		new PrettierPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: paths.client,
					to: paths.build,
					globOptions: {
						ignore: ['**.html', '**.pug', '**/js', '**/ts', '**/scss'],
					},
					noErrorOnMissing: true,
				},
			],
		}),
	],
	module: {
		rules: [
			{
				test: /\.jsx?$/i,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf)$/i,
				type: 'asset/inline',
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-typescript']
					}
				},
			},
		],
	},
	resolve: {
		modules: [paths.client, 'node_modules'],
		extensions: ['.js', '.tsx', '.jsx', '.ts', '.json'],
		//alias: {
		//	'@': paths.client,
		//},
	},
};
