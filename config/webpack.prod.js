const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require('path');

const prodConfig = {
    mode: "production",
    devtool: "source-map",
    optimization: {
        splitChunks: {
            chunks: "all",
        }
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new Dotenv({
            path: path.resolve(__dirname, '../environments/.env'),
            safe: false,
            allowEmptyValues: true,
            systemvars: true
        })
    ],
    module: {
        rules: [
            {
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
                test: /.(css|sass|scss)$/,
            }
        ],
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}

module.exports = merge(common, prodConfig);