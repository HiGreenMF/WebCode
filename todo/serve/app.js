; (async function () {
    const express = require('express')
    const cors = require('cors')
    const db = require('./db/connect/index')

    // 引入配置路由
    const faRouter = require('./routers/add_find')
    const delRouter = require('./routers/delet')
    const updRouter = require('./routers/update')
    // 等待数据库连接成功
    await db
    console.log('数据库启动成功')
    // 调用express
    const app = express()


    app.use(express.urlencoded({ extended: true }))
    // cors跨域资源共享
    app.use(cors())
    // 使用路由中间件
    app.use(faRouter)
    app.use(delRouter)
    app.use(updRouter)





    // 开启服务器
    app.listen('5000', (err) => {
        if (err) console.log('服务器启动失败', err)
        else console.log('服务器启动成功')
    })
})()