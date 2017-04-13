// "production" build is the build deployed to github pages
const NODE_ENV = process.env.NODE_ENV;
const isDebugBuild = NODE_ENV != "production";

export default {
	entry: "./docs/index.jsx",
	output: {
		path: "./docs",
		filename: "build.js"
	},
	devtool: "source-map",
	resolve: {
		extensions: ["", ".js", ".jsx", ".json", ".ts", ".tsx"]
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
			test: /\.css$/,
			loaders: ["style", "css"]
		}, {
			test: /\.json$/,
			loader: "json"
		}, {
			test: /\.(md|example)$/,
			loader: "raw"
		}]
	}
};