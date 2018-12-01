let HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');
const webpack = require("webpack");
module.exports = {
    devServer: {
        clientLogLevel: 'error',
        historyApiFallback: true,
        hot: true,
        inline:true, 
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
          }
    },
    entry: [ 
    path.resolve(__dirname, 'src/index.js')
    ],
    watch:true,
    target: 'web',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },

        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['eslint-loader']
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: "html-loader"
                }
            ]
        },
        {
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader" // creates style nodes from JS strings
                },
                {
                    loader: "css-loader", // translates CSS into CommonJS
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: "sass-loader", // compiles Sass to CSS
                    options: {
                        sourceMap: true,
                        data: '@import "variables";',
                        includePaths: [
                            path.join(__dirname, 'src')
                        ]
                    }
                }
            ],
            include: path.join(__dirname, 'src')
        }]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),  
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'cheap-module-source-map'
}