var webpackStrip = require('strip-loader');
var stripLoader = {
    test: [/\.js$/, /\.es6$/],
    exclude: /node_modules/,
    loader: webpackStrip.loader('console.log')
} 

var devConfig = require('./webpack.config.js');
devConfig.module.rules.push(stripLoader);
module.exports = devConfig;


