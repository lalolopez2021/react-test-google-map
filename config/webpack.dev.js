const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const Dotenv = require('dotenv-webpack');
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require('path');

const devConfig = {
    mode: "development",
    devServer: {
        port: 3000,
        contentBase: "../dist",
        open: "chrome",
        hot: true,
    },
    target: "web",
    plugins: [
        new HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
        new Dotenv({
            path: path.resolve(__dirname, '../environments/.env.development'),
            safe: false,
            allowEmptyValues: true,
            systemvars: true
        })
    ],
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                use: ["style-loader", "css-loader", "sass-loader"],
                test: /.(css|sass|scss)$/,
            }  
        ],
    },
};

module.exports = merge(common, devConfig);