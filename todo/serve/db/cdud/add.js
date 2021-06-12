const model = require('../model')

// 添加任务名函数
function addTodos(todoName) {
    return model.create({
        todoName,
    })
}

module.exports = {
    addTodos,
}