const path = require("path");

// "production" build is the build deployed to github pages
const NODE_ENV = process.env.NODE_ENV;
const isDebugBuild = NODE_ENV != "production";

module.exports = {
	entry: "./docs/index.jsx",
	output: {
		path: path.resolve("./docs"),
		filename: "build.js"
	},
	devtool: "source-map",
	resolve: {
		extensions: [".js", ".jsx", ".json"]
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
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
