const paths = require('./paths');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	//devtool: 'source-map',
	//output: {
	//	path: paths.build,
	//	publicPath: '/',
	//	filename: 'js/[name].bundle.js',
	//},
	devServer: {
		historyApiFallback: true,
		open: {
			app: {
				name: 'chrome',
			},
		},
		compress: true,
		hot: true,
		port: 9000,
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/i,
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
		new webpack.HotModuleReplacementPlugin(),
	],
});