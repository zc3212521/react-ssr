const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        overlay: true,
        open: false,
        host: '0.0.0.0',
        hot: true,
        port: '8090',
        proxy: {
            '/api': 'http://localhost:3000'
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});