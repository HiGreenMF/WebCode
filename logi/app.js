;(async function () {
    const db = require('./base/db')

    const express = require('express')

    const lrRouter = require('./router/lr')
    const reRouter = require('./router/re')

    const cookieParser = require('cookie-parser')

    await db
    console.log('数据库连接成功')
    const app = express()

    app.set('view engine', 'ejs')
    app.set('views', './mb')
    // 中间件 处理静态资源
    app.use(express.static('public'))
    app.use(express.urlencoded({ extended: true }))
    app.use(cookieParser())

    app.use(lrRouter)
    app.use(reRouter)
  

    // 启动服务器
    app.listen(5000, (err) => {
        if (err) console.log('服务器启动失败', err)
        else console.log('服务器启动成功')
    })
})()
