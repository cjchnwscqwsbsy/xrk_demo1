const path = require('path');
const merge=require('webpack-merge');
const autoprefixer=require('autoprefixer');
const common = require('./webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common,{
    mode:'production',
    devtool:'none',
    plugins:[
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash:8].css',
            chunkFilename:'[name].[contenthash:8].chunk.css'
        })
    ],
    module:{
        rules:[{
            test:/\.css$/,
            include:path.resolve(__dirname,'../src'),
            use:[{
                loader:MiniCssExtractPlugin.loader
            },{
                loader:'css-loader',
                options:{
                    sourceMap:true
                }
            },{
                loader:'postcss-loader',
                options:{
                    plugins:[autoprefixer]
                }
            }]
        },{
            test:/\.less$/,
            include:path.resolve(__dirname,'src'),
            use:[{
                loader:MiniCssExtractPlugin.loader
            },{
                loader:'css-loader',
                options:{
                    sourceMap:true
                }
            },{
                loader:'postcss-loader',
                options:{
                    plugins:[autoprefixer]
                }
            },'less-loader']
        },{
            test:/(\.less|\.css)$/,
            exclude:path.resolve(__dirname,'src'),
            use:[
                { loader: "style-loader",},
                {
                    loader: "css-loader",
                    options:{
                        importLoaders:1
                    }
                },{
                    loader:'less-loader',
                    options: {
                        javascriptEnabled: true
                    }
                }
            ]
        }]
    }
});