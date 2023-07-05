// imports =================================================== //
const path = require("path");

// constants ================================================= //
const PATHS = {
    "@components": path.resolve(
        __dirname, "./src/shared/components"
    ),
    "@libs": path.resolve(
        __dirname, "./src/shared/libs"
    ),
    "@helpers": path.resolve(
        __dirname, "./src/shared/helpers"
    ),
    "@hooks": path.resolve(
        __dirname, "./src/shared/hooks"
    ),
};

// export ==================================================== //
module.exports = {
    devtool: "source-map",
    watchOptions: { ignored: "**/node_modules" },
    entry: path.resolve(__dirname, "./src/index.tsx"),
    stats: { errorDetails: true }, // ?
    // optimization: { splitChunks: { chunks: "all", } }, // ?
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
        ]
    },
    resolve: {
        extensions: [ ".js", ".jsx", ".ts", ".tsx" ],
        alias: PATHS
    },
    output: {
        clean: true,
        path: path.resolve(__dirname, "demo"),
        filename: "bundle.js",
    },
};