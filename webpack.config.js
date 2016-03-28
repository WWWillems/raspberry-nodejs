var path = require('path');
var webpack = require('webpack');

var buildPath = path.resolve(__dirname, "build");

module.exports = {
    entry: './main.js',

    output: {
        path: buildPath,
        filename: 'bundle.js',
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query:
                {
                  presets: ['es2015', 'react'],
                }
            }
        ]
    }
}
