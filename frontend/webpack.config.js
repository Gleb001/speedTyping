// imports =================================================== //
const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');

// constants ================================================= //
const SRC_PATH = path.resolve(__dirname, "./src");
const PATHS = {
    "@app":      SRC_PATH + "/app",
    "@pages":    SRC_PATH + "/pages",
    "@shared":   SRC_PATH + "/shared",
    "@widgets":  SRC_PATH + "/widgets",
    "@entities": SRC_PATH + "/entities",
    // "@components": SRC_PATH + "./src/shared/components",
    // "@libs": SRC_PATH + "./src/shared/libs",
    // "@helpers": SRC_PATH + "./src/shared/helpers",
    // "@hooks": SRC_PATH + "./src/shared/hooks",
};

// export ==================================================== //
module.exports = {
    // devtool: "source-map",
    watchOptions: { ignored: "**/node_modules" },
    entry: path.resolve(__dirname, "./src/index.tsx"),
    stats: { errorDetails: true },
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
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(
                __dirname, "./src/index.html"
            )
        })
    ],
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