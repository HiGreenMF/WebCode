const express = require('express')
const router = express.Router()
const { findAllTodo } = require('../db/cdud/find')
const { updateOnetodo, updateManytodo } = require('../db/cdud/update')
// 修改一条任务状态路由
router.post('/updataTodo', async (req, res) => {
    const { id, isDone } = req.body
    await updateOnetodo(id, isDone)

    let todoList = await findAllTodo()
    res.send(todoList)
})
// 全选中路由
router.post('/updataAllTodos', async (req, res) => {


    let { ids, isDone } = req.body

    await updateManytodo(JSON.parse(ids), isDone)
    let todoList = await findAllTodo()
    res.send(todoList)

})

module.exports = router