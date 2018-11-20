
const path = require('path')

module.exports = {
    // 基本路径
    baseUrl: './',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: () => { },
    configureWebpack: config => { // webpack配置，值位对象时会合并配置，为方法时会改写配置
        // if (process.env.NODE_ENV === 'production') {
        //     // 为生产环境修改配置...
        //     config.mode = 'production';
        // } else {
        //     // 为开发环境修改配置...
        //     config.mode = 'development';
        // }
        Object.assign(config, { // 开发生产共同配置
            resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': path.resolve(__dirname, './src'),
                '@com': path.resolve(__dirname, './src/components'),
                '@views': path.resolve(__dirname, 'src/views'),
                'vue$': 'vue/dist/vue.esm.js'
            }
            }
        })
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        open: true,                                 //配置自动启动浏览器
        host: '127.0.0.1',
        port: 8081,                                 // 端口号
        https: false,
        hotOnly: false,                             // https:{type:Boolean}
        proxy: null,                                // 设置代理
        // proxy: 'http://localhost:4000'           // 配置跨域处理,只有一个代理
        // proxy: {                                 // 配置多个代理                           
        //     '/api': {
        //         target: '<url>',
        //         ws: true,
        //         changeOrigin: true
        //     },
        //     '/foo': {
        //         target: '<other_url>'
        //     }
        // },
        before: app => { }
    },
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
}