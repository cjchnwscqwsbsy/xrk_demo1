## Question

#### 实时切换网站主题
- 研究antd-theme-generator&webpack-theme-color-replacer实现原理
- 熟练使用以上两个npm库

#### css
- transform:translateY(40px)和margin-top:40px的原理是什么
    - 元素视图属性：offsetTop和offsetLeft有无变化，是GPU还是CPU进行计算

#### webpack
- webpack打包图片超过244kib
- 引入antd第三方库打包后文件过大(1M~3M之间)
- img标签打包问题
     - 将img引用的图片移动到指定目录后，打包后的js中依然img引用的图片路径没有改变

- publicPath
    - devServer中的publicPath
        - 访问内存中的文件路径，该字段未显示设置则以output.publicPath为准
        - 默认值是/
        - 该值是以contentBase为根路径基础
        - devServe构建的文件都是在内存中
    - output中的publicPath:
        - 其他xxx.publicPath的备胎或参考标准
        - 建议使用output.publicPath作为唯一标准

## Target
- 工具集
    - 各种工具组件
    - 页面可视化快速构建
- 技术交流平台

## Task

#### 导航栏
- 完成导航栏布局
- 实现导航栏用户通用操作---涉及前后端交互
    - logo图标上传下载
    - 用户登录

#### 搭建后台服务 --- node
- 目标：通过node搭建后台服务，深刻理解前后端交互中所用到协议及其他相关技术
- 成长点：
    - 网络通信原理
    - http、https、http2
    - tcp
    - 文件模块
    - 进程&线程
    - 流
- 修仙之路：
    - express -> koa -> egg
    
#### 动态切换主题 2019.12.16
- 动态实时的切换整个网站的主题
- webpack-theme-color-replacer
- antd-theme-generator

#### 封装rest

---
2019.12.12前：
- 加入路由
- 代码分割
- 深刻理解路由
- 首页及相关组件定制

## 网络资源
- https://yangyuetao.cn/
- https://umijs.org/zh/guide/#%E7%89%B9%E6%80%A7

## 实用工具
- RunKit

## 中长期任务
- hackpaint项目持续研发 --- 主要工作 every day
- less之深入学习与运用 --- 0.5h per day
- React之间断性升级与优化  --- 1d per week

