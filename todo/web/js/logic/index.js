// 业务逻辑
// 1进入页面 发请求获取数据

// jsonp 发请求


let script = document.createElement('script')
script.src = 'http://127.0.0.1:5000/getTodoList?callback=gettodos'
document.body.appendChild(script)

function gettodos(data) {
    // console.log(data[0]);
    Util.render(data)
}
let addtodoInput = document.querySelector('.todo-header input')
// console.log(addtodoInput);

// 添加任务
addtodoInput.onkeyup = async function (e) {
    if (e.keyCode === 13) {
        let text = this.value.trim()
        if (!text) return

        let list = await Util.myAjax({
            url: 'http://127.0.0.1:5000/addTodo',
            type: 'post',
            data: { todoName: text },
        })
        Util.render(list)
        // console.log(this.text);
        this.value = ''
    }
}

// 修改一条任务状态
let checkbox = document.querySelector('.todo-main')
// console.log(checkbox);

checkbox.addEventListener('click', async function (e) {
    if (e.target.nodeName === 'INPUT') {
        let isDone = e.target.checked
        let id = e.target.dataset.id


        let list = await Util.myAjax({
            url: 'http://127.0.0.1:5000/updataTodo',
            type: 'post',
            data: { id, isDone },
        })
        Util.render(list)
    }
})


// 删除一条任务
checkbox.addEventListener('click', async function (e) {
    if (e.target.nodeName === 'BUTTON') {
        let id = e.target.dataset.id
        let list = await Util.myAjax({
            url: 'http://127.0.0.1:5000/deleteTodo',
            type: 'post',
            data: { id },
        })
        Util.render(list)
    }
})

// 任务全选完成

let allcheckede = document.querySelector('#status')
allcheckede.onclick = async function (e) {
    let status = document.querySelectorAll('.todo-main li input')
    let ids = []
    
    let isDone = e.target.checked

    status.forEach((item) => {
        ids.push(item.attributes["data-id"].value)
    })
    // console.log(ids)
    let list = await Util.myAjax({
        url: 'http://127.0.0.1:5000/updataAllTodos',
        type: 'post',
        data: { ids: JSON.stringify(ids), isDone },

    })
    Util.render(list)
}


// 清除所有
let deleBtn = document.querySelector('.btn')

deleBtn.onclick = async function () {
    let status = document.querySelectorAll('.todo-main li input')
    let ids = []

    status.forEach((item) => {
        if (item.checked === true) {
            ids.push(item.attributes["data-id"].value)
        }
    })

    let list = await Util.myAjax({
        url: 'http://127.0.0.1:5000/clearAllDoneTodos',
        type: 'post',
        data: { ids: JSON.stringify(ids) },
    })
    Util.render(list)


}
