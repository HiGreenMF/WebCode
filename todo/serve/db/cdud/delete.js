const model = require('../model')

// 删除一条任务名函数
function deleteTodo(id) {
    return model.deleteOne({ _id: id })
}

// 删除多条任务名函数

function deleteManyTodo(ids) {
    return model.deleteMany({ _id: { $in: ids } })
}


module.exports = {
    deleteTodo,
    deleteManyTodo,
}