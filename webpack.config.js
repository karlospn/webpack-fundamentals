var path = require('path');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared');


module.exports = {
    context: path.resolve('js'),
    entry: {
        about: './about_page',
        contact: './contact_page',
        home : './index/index_page' 
    },
    output: {
        path: path.resolve('build'),
        publicPath: '/public/assets/',
        filename: "[name].js"
    },
    plugins: [
        commonsPlugin
    ],
    devServer: {
        contentBase:  'public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: "pre",
                loader: "jshint-loader"
            },
            {
                test: /\.es6/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: "url-loader?limit=10000"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
}