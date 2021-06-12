const express = require('express')
const { findAllTodo } = require('../db/cdud/find')
const { addTodos } = require('../db/cdud/add')

// 创建路由实例
const router = express.Router()


// 查找所有任务路由
router.get('/getTodoList', async (req, res) => {
    let todoList = await findAllTodo()
    const { callback } = req.query
    let str = `${callback}(${JSON.stringify(todoList)})`
    res.send(str)

})


// 添加任务路由
router.post('/addTodo', async (req, res) => {
    const { todoName } = req.body

    await addTodos(todoName)

    let todoList = await findAllTodo()
    res.send(todoList)
})


module.exports = router