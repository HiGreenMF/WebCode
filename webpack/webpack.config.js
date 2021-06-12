const { resolve } = require("path"); // node内置核心模块，用来设置路径。

module.exports = {
    entry: "./src/index.js", // 入口文件
    output: {
        // 输出配置
        filename: "./js/main.js", // 输出文件名
        path: resolve(__dirname, "build"), // 输出文件路径配置
        clean: true, // 清除打包目录的文件
    },
    // mode: "development", // 开发环境(二选一)
    mode: 'production' ,  // 生产环境(二选一)
    module: {
        rules: [
            // 语法检查
            {
                test: /\.js$/, // 只检测js文件
                exclude: /node_modules/, // 排除node_modules文件夹
                enforce: "pre", // 提前加载使用
                use: {
                    // 使用eslint-loader解析
                    loader: "eslint-loader",
                },
            },
            // 语法转换
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
};