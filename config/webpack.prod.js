const path = require('path');
const merge=require('webpack-merge');
const common = require('./webpack.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
        // new CopyWebpackPlugin([{from:path.resolve(__dirname, '../public/assets'), to:path.resolve(__dirname,'../dist/images')}]),
        // new BundleAnalyzerPlugin()
    ]
});
