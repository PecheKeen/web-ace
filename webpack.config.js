const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, 'src/index.tsx'),

	output: {
		path: path.resolve(__dirname, 'client'),
		filename: 'bundle.js',
		publicPath: '/client/',
	},

	plugins: [
		new HTMLWebpackPlugin({
			template: './client/index.html',
		}),
	],

	devServer: {
		host: 'localhost',
		port: 8080,
		proxy: {
			'/': 'http://localhost:5050',
		},
		historyApiFallback: true,
		static: {
			directory: path.resolve(__dirname, 'client'),
			publicPath: '/client/',
		},
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
		],
	},

	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
};
