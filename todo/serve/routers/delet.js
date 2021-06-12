const express = require('express')
const { findAllTodo } = require('../db/cdud/find')
const { deleteTodo, deleteManyTodo, } = require('../db/cdud/delete')
const router = express.Router()
// 删除一条任务路由
router.post('/deleteTodo', async (req, res) => {
    const { id } = req.body
    await deleteTodo(id)

    let todoList = await findAllTodo()
    res.send(todoList)

})
// 删除所有完成任务路由
router.post('/clearAllDoneTodos', async (req, res) => {

    const { ids } = req.body
    await deleteManyTodo(JSON.parse(ids))

    let todoList = await findAllTodo()
    res.send(todoList)

})

module.exports = router