const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval',
    devServer: {
        overlay: true,
        open: false,
        host: '0.0.0.0',
        // hot: true,  // todo 验证
        port: '8090',
        proxy: {
            '/api': 'http://localhost:3000'
        }
    }
});