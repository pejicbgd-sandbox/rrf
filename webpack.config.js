var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var SRC_DIR = path.resolve(__dirname, 'src');
var PUBLIC_DIR = path.resolve(__dirname, 'public/');

module.exports = {
    entry: SRC_DIR + '/index.jsx',
    output: {
        path: PUBLIC_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders : [
            {
                test : /\.jsx?/,
                include : SRC_DIR,
                exclude : /node_modules/,
                loader : 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            }
        ]
    },

};
