const paths = require('./paths');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	devtool: false,
	output: {
		path: paths.build,
		publicPath: '/',
		filename: 'js/[name][contenthash].bundle.js',
		clean: true,
		assetModuleFilename: '../public/[name][ext]'
	},
	module: {
		rules: [
			{
				test: /\.(c|sa|sc)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							sourceMap: false,
							modules: true,
						},
					},
					'postcss-loader',
					'sass-loader',
				],
			},
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles/[contenthash][name].css',
			chunkFilename: '[id].css',
		}),

		new ImageMinimizerPlugin({
			minimizerOptions: {
				plugins: ["optipng"],
			},
		}),
		new ImageMinimizerPlugin({
			deleteOriginalAssets: false,
			//filename: "../dist/img/[name].webp",
			minimizerOptions: {
				plugins: ["imagemin-webp"],
			},
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin(), '...'],
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
});