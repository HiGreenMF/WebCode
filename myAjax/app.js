//引入express
const express = require('express')
// 调用exoress
const app = express()

// 中间件处理静态资源
app.use(express.static('public'))
// 中间件处理post请求body中的值
app.use(express.urlencoded({ extended: true }))


// 处理get请求
app.get('/test', (req, res) => {
    setTimeout(() => {
        res.send(req.query)
    }, 6000)
})

//处理post请求
app.post('/test', (req, res) => {
    setTimeout(() => {
        res.send(req.body)
    }, 6000)

})

// 启动服务器
app.listen('5000', (err) => {
    if (err) console.log('启动失败', err)
    else console.log('启动成功');
})