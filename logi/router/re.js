const express = require('express')

const router = express.Router()

const path = require('path')

const user = require('./lr')


// 登录成功跳转首页
router.get('/home',  (request, response) => {
    // 先获取cookie 再判断
    let { id } = request.cookies

    if (id) {
        response.render('home')
    } else {
        response.redirect('http://127.0.0.1:5000/views/login.html')
    }
})

// 登录成功详情页的连接跳转
router.get('/xq', (request, response) => {
    let { id } = request.cookies
    if (id) {
        response.sendFile(path.resolve(__dirname, '../public/views/xq.html'))
    } else {
        response.redirect('http://127.0.0.1:5000/views/login.html')
    }
})
module.exports = router