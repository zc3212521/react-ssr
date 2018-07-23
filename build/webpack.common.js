const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: path.join(__dirname, '../client/src/app.js')
    },
    // target: 'node',
    module: {
        rules: [
            {
                test: /.jsx$/,
                use: ['babel-loader',],
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
                exclude: [
                    path.join(__dirname, '../node_modules')
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
          type: path.resolve(__dirname, '../client/src/store/type.js'),
      }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../client/src/index.html'),
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // libraryTarget: 'commonjs2'
    }
};