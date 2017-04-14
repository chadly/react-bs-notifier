// "production" build is the build deployed to github pages
const NODE_ENV = process.env.NODE_ENV;
const isDebugBuild = NODE_ENV != "production";

module.exports = {
	entry: "./docs/index.tsx",
	output: {
		path: "./docs",
		filename: "build.js"
	},
	devtool: "source-map",
	resolve: {
		extensions: ["", ".js", ".ts", ".tsx"]
	},
	module: {
		loaders: [{
			test: /\.[jt]sx?$/,
			exclude: /node_modules/,
			loader: "awesome-typescript",
			query: isDebugBuild ? {
				presets: ["react-hmre"]
			} : undefined
		}, {
			test: /\.css$/,
			loaders: ["style", "css"]
		}, {
			test: /\.(md|example)$/,
			loader: "raw"
		}]
	}
};