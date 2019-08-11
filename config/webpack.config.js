const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    entry:{
        app:path.resolve(__dirname, '../src/index.js'),
        vendors:['react', 'react-dom', 'antd', 'react-router-dom']
    },
    optimization:{
        minimizer:[
            new UglifyJsPlugin({
                include: /src/,
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
    output: {
        filename: '[name]-[hash:8].js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins:[
        new HTMLWebpackPlugin({
            title:'xrk_demo1',
            template:path.resolve(__dirname, '../public/index.html'),
            hash:true,
            minify:{
                removeComments:true,
                collapseWhitespace:true,
                removeAttributeQuotes:true
            }
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsWebpackPlugin()
        // 添加 NamedModulesPlugin，以便更容易查看要修补(patch)的依赖，由于设置了 mode: 'development'，所以这个插件可以省略
        // new webpack.NamedModulesPlugin()
    ],
    module:{
        rules:[{
            test:/(\.jsx|\.js)$/,
            exclude: '/node_modules/',
            loader:'babel-loader?cacheDirectory',
            query: {compact: false}
        },{
            test:/\.(png|svg|jp?g|git)(\?.*)$/,
            exclude: '/node_modules/',
            use:[{
                loader:'url-loader',
                options: {
                    limit:30000,
                    name:'images/[name].[hash].[ext]'
                }
            }]
        },{
            test:/\.(woff|woff2|eot|svg|ttf|otf)(\?|$)/,
            use:[{
                loader:'file-loader',
                options:{
                    name:'iconfont/[name].[hash].[ext]'
                }
            }]
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
            component:path.resolve(__dirname,'../src/component/index'),
            template:path.resolve(__dirname,'../src/template')
        },
        extensions: ['.js','.jsx','.json']
    }
};