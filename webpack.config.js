/* eslint-disable import/no-commonjs */

const path = require("path");

module.exports = {
	entry: "./docs/index.js",
	output: {
		path: path.resolve("./docs"),
		filename: "build.js"
	},
	devtool: "source-map",
	resolve: {
		extensions: [".js", ".json"]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				include: [path.resolve("./src"), path.resolve("./docs")]
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(md|example)$/,
				use: ["raw-loader"]
			}
		]
	}
};
