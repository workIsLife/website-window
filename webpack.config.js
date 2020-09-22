const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugin: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }), 
        MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: '.css',
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        port: 8080
    }
}