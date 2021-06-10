const model = require('../model')

// 注册函数
function create(username, password) {
    return model.create({
        username,
        password
    })
}
module.exports = {
    create
}