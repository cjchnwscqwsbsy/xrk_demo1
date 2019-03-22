const path = require('path');
const merge=require('webpack-merge');
const common = require('./webpack.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common,{
    mode:'production',
    devtool:'hidden-source-map',
    optimization:{
        minimizer:[
            new UglifyJsPlugin({
                uglifyOptions:{
                    compress:{
                        // 在UglifyJs删除没有用到的代码时不输出警告
                        warnings: false,
                        // 删除所有的 `console` 语句，可以兼容ie浏览器
                        drop_console: true,
                        // 内嵌定义了但是只用到一次的变量
                        collapse_vars: true,
                        // 提取出出现多次但是没有定义成变量去引用的静态值
                        reduce_vars: true,
                    },
                    output:{
                        //最紧凑的输出
                        beautify:false,
                        //删除所有注释
                        comments:false
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions:{
                    safe:true
                }
            })
        ],
        splitChunks:{chunks:'all'}
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash:8].css',
            chunkFilename:'[name].[contenthash:8].chunk.css'
        })
    ],
    module:{
        rules:[{
            test:/\.css$/,
            include:path.resolve(__dirname,'src'),
            use:[{
                loader:MiniCssExtractPlugin.loader
            },{
                loader:'css-loader',
                options:{
                    sourceMap:true
                }
            }]
        }]
    }
});