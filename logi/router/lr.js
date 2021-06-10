const express = require('express')

const { create } = require('../base/crud/zhuce')

const { find } = require('../base/crud/logi')

const router = express.Router()

// 注册
router.post('/zhuce', async (request, response) => {
    const { username, password } = request.body
    await create(username, password)

    response.redirect('http://127.0.0.1:5000/views/logi.html')
    // response.send('ok')
})

// 登录
router.post('/logi', async (request, response) => {
    const { username, password } = request.body
    console.log({ username, password });

    let user = await find(username, password)
    if (user) {
        response.cookie('id', user._id)
        response.redirect('http://127.0.0.1:5000/home')
    } else {
        response.send('用户名或密码错误')
    }
})
module.exports = router


