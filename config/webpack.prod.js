const path = require('path');
const merge=require('webpack-merge');
const autoprefixer=require('autoprefixer');
const common = require('./webpack.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const  BundleAnalyzerPlugin  =  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common,{
    mode:'production',
    output: {
        filename: '[name]-[hash:8].js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool:'none',
    optimization:{
        // minimizer:[
        //     new UglifyJsPlugin({
        //         include: /src/,
        //         cache:true,
        //         parallel:true,
        //         sourceMap:true,
        //         uglifyOptions:{
        //             compress:{
        //                 // 在UglifyJs删除没有用到的代码时不输出警告
        //                 warnings: false,
        //                 // 删除所有的 `console` 语句，可以兼容ie浏览器
        //                 drop_console: true,
        //                 // 内嵌定义了但是只用到一次的变量
        //                 collapse_vars: true,
        //                 // 提取出出现多次但是没有定义成变量去引用的静态值
        //                 reduce_vars: true,
        //             },
        //             output:{
        //                 //最紧凑的输出
        //                 beautify:true,
        //                 //删除所有注释
        //                 comments:true
        //             }
        //         }
        //     }),
        //     new OptimizeCSSAssetsPlugin({
        //         cssProcessorOptions:{
        //             safe:true
        //         }
        //     })
        // ],
        // splitChunks:{chunks:'all'}
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash:8].css',
            chunkFilename:'[name].[contenthash:8].chunk.css'
        }),
        new OptimizeCSSAssetsPlugin({
            cssProcessorOptions:{
                safe:true
            }
        }),
        new UglifyJsPlugin({
            cache:true,
            parallel:true,
            sourceMap:true
        }),
        new BundleAnalyzerPlugin()
    ],
    module:{
        rules:[{
            test:/\.(less|css)$/,
            // include:path.resolve(__dirname,'../src'),
            use:[{
                loader:MiniCssExtractPlugin.loader,
            },{
                loader:'css-loader',
                options:{
                    sourceMap:true,
                    importLoaders:1
                }
            },{
                loader:'postcss-loader',
                options:{
                    ident:  "postcss",
                    sourceMap:true,
                    plugins:[autoprefixer]
                }
            },{
                loader:'less-loader',
                options: {
                    sourceMap:true,
                    javascriptEnabled: true
                }
            }]
        }]
    }
});
