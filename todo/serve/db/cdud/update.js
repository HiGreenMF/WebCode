const model = require('../model')

// 注册修改一条任务方法
function updateOnetodo(id, isDone) {
    return model.updateOne({ _id: id }, { $set: { isDone } })
}


// 注册修改多条任务方法
function updateManytodo(ids, isDone) {
    return model.updateMany({ _id: { $in: ids } }, { $set: { isDone } })
}

module.exports = {
    updateOnetodo,
    updateManytodo,
}