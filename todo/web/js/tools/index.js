// 定义工具函数
let Util = {}

// 发ajax请求
Util.myAjax = function (option) {
    return new Promise((resolve, reject) => {
        let { url, type = 'get', data, } = option

        if (!url) return

        const xhr = new XMLHttpRequest()


        let toStr = Util.data2Str(data)
        if (type === 'get') {

            url += '?' + toStr
            toStr = null
        }

        xhr.open(type, url)

        if (type === 'post') {
            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
        }
        xhr.send(toStr)

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject()
                }
            }
        }
    })
}


// data转字符串
Util.data2Str = function (data) {
    let arr = []
    for (let key in data) {
        arr.push(`${key}=${data[key]}`)
    }
    return arr.join('&')
}

// 渲染页面
Util.render = function (data) {
    if (data.length === 0) {
        document.getElementById('tip').style.display = 'block'
        document.querySelector('.todo-main').style.display = 'none'
        document.querySelector('.todo-footer').style.display = 'none'
    } else {
        document.getElementById('tip').style.display = 'none'
        document.querySelector('.todo-main').style.display = 'block'
        document.querySelector('.todo-footer').style.display = 'block'
    }


    // data是一个数组
    let newArr = data.map((item) => {
        return `<li>
        <label>
          <input  data-id=${item._id} type="checkbox"${item.isDone === 'true' ? 'checked' : ''} />
          <span${item.isDone === 'true' ? ' class="active"' : 'class=""'}>${item.todoName}</span>
        </label>
        <button data-id=${item._id} class="btn btn-danger" style="display:block}">删除</button>
      </li>`
    })
    document.getElementsByClassName('todo-main')[0].innerHTML = newArr.join('')

    let isDone = document.getElementById('isDone')
    let allDone = document.getElementById('allDone')


    let count = 0
    data.forEach((item) => {
        if (item.isDone === 'true') {
            count++
        }

    })
    isDone.innerHTML = '已完成' + count
    allDone.innerHTML = '/ 全部' + data.length
    // 全选
    let allSelecte = document.querySelector('.todo-footer input[type=checkbox]')

    // console.log(allSelecte);

    if (data.length > 0 && data.length === count) {
        allSelecte.checked = true
    } else {
        allSelecte.checked = false
    }
}

