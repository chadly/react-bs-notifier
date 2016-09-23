// "production" build is the build deployed to github pages
const NODE_ENV = process.env.NODE_ENV;
const isDebugBuild = NODE_ENV != "production";

export default {
	entry: "./example/index.jsx",
	output: {
		path: "./example",
		filename: "build.js"
	},
	node: {
		__dirname: true,
		__filename: true
	},
	devtool: "source-map",
	resolve: {
		extensions: ["", ".js", ".jsx", ".json"]
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: "babel",
			query: isDebugBuild ? {
				presets: ["react-hmre"]
			} : undefined
		}, {
			test: /\.json$/,
			loader: "json"
		}]
	}
};