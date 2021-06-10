const model = require('../model')

// 注册函数
function find(username, password) {
    return model.findOne({
        username,
        password
    })
}
module.exports = {
    find
}