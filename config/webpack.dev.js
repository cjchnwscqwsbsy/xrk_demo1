const path=require('path');
const merge=require('webpack-merge');
const autoprefixer=require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const common = require('./webpack.config');
const serverConfig = require('../src/framework/profile');

module.exports = merge(common,{
    mode:'development',
    devtool:'inline-source-map',
    devServer:{
        contentBase:path.resolve(__dirname, '../dist'),  //服务启动目录，默认为根目录
        hot:true,
        /**
         * 下面为可选配置
         */
        // 指定使用一个 host。默认是 localhost
        host: serverConfig.devServer.host,
        // 端口号
        port: serverConfig.devServer.port,
        // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。通过设置为 true 进行启用
        historyApiFallback: {
            disableDotRule: true
        },
        // 出现错误时是否在浏览器上出现遮罩层提示
        overlay: true,
        /**
         * 在 dev-server 的两种不同模式之间切换
         *   默认情况下，应用程序启用内联模式 inline
         *   设置为 false，使用 iframe 模式，它在通知栏下面使用 <iframe> 标签，包含了关于构建的消息
         */
        inline: true,
        /**
         * 统计信息，枚举类型，可供选项：
         *      "errors-only": 只在发生错误时输出
         *      "minimal": 只在发生错误或有新的编译时输出
         *      "none": 没有输出
         *      "normal": 标准输出
         *      "verbose": 全部输出
         */
        stats: "errors-only",
        // 设置接口请求代理，更多 proxy 配置请参考 https://github.com/chimurai/http-proxy-middleware#options
        proxy: {
            '/api/': {
                changeOrigin: true,
                // 目标地址
                target: serverConfig.proxyServer.baseUrl,
                // 重写路径
                pathRewrite: {
                    '^/api/': '/'
                }
            }
        }
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
            })
        ],
        splitChunks:{chunks:'all'}
    },
    module:{
        rules:[{
            test:/(\.less|\.css)$/,
            // exclude:path.resolve(__dirname,'../src'),
            use:[
                { loader: "style-loader",},
                {
                    loader: "css-loader",
                    options:{
                        importLoaders:1,
                        sourceMap:true
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
                }
            ]
        }]
    }
});
