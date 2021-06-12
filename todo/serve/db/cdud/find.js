const model = require('../model')

// 查找全部任务方法
function findAllTodo() {
    return model.find()
}

module.exports = {
    findAllTodo,
}