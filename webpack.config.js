"use strict";

const NODE_ENV = "development";
const webpack = require("webpack");
const path = require("path");

module.exports = {
    //context: path.resolve(__dirname + "/script/"),
    entry: {
        app: "./development/script/entry.js",
    },

    output: {
        path    : __dirname + "/docs/script",
        filename: "index.js",
        library : "[name]",
    },

    resolve: {
        extensions: ["", ".js"]
    },

    watch: true,

    watchOptions: {
        aggregateTimeout: 250,
    },

    devtool: NODE_ENV === "development" ? "source-map" : null,

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                // warnings: false,
                //drop_console: true,
                // unsafe: true,
            }
        })
    ],

    module: {
        loaders: [
            {
                test   : /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015"],
                    plugins: ["transform-runtime"]
                }
            }
        ],
    }
};
