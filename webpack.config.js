const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output: {
        filename: '[name]-[hash:8].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        new HTMLWebpackPlugin({
            title:'xrk_demo1',
            template:'./public/index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsWebpackPlugin()
        // 添加 NamedModulesPlugin，以便更容易查看要修补(patch)的依赖，由于设置了 mode: 'development'，所以这个插件可以省略
        // new webpack.NamedModulesPlugin()
    ],
    module:{
        rules:[{
            test:/\.js(x)$/,
            include:path.resolve(__dirname,'src'),
            loader:'babel-loader?cacheDirectory'
        },{
            test:/\.(png|svg|jpg|git)$/,
            use:['file-loader']
        },{
            test:/\.(woff|woff2|eot|ttf|otf)$/,
            use:['file-loader']
        },{
            test:/\.(csv|tsv)$/,
            use:['csv-loader']
        },{
            test:/\.xml$/,
            use:['xml-loader']
        },{
            test:/\.md$/,
            use:['html-loader','markdown-loader']
        }]
    },
    resolve:{
        alias:{
            src:path.resolve(__dirname,'src')
        }
    }
};