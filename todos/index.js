// 创建数据
var todolist = [{
    id: 1,
    todoName: '吃饭',
    isDone: true,
  },
  {
    id: 2,
    todoName: '睡觉',
    isDone: true,
  },
  {
    id: 3,
    todoName: '敲代码',
    isDone: false,
  },
]
// 1、将数据渲染到页面上
// 1.1根据数据，动态生成html字符串
// 1.1.1遍历数组动态的创建多个字符串
var htmlArr = todolist.map(function (item) {
  // 判断item.isDone是不是true,是的话就给input添加checked,如果不是就不添加
  if (item.isDone) {
    return `
      <li>
        <label>
          <input type="checkbox" checked/>
          <span class='done'>` + item.todoName + `</span>
        </label>
        <button class="btn btn-danger">删除</button>
      </li> `
  } else {
    return `
      <li>
        <label>
          <input type="checkbox"/>
          <span>` + item.todoName + `</span>
        </label>
        <button class="btn btn-danger">删除</button>
      </li> `
  }
})
// 将获取的字符串添加到ul列表中
var oTodoMain = document.querySelector('.todo-main')
oTodoMain.innerHTML += htmlArr.join('')
// 动态显示任务完成情况
showListNum()

// 2、实现添加任务的逻辑
// 2.1给input注册键盘抬起事件
var oHeadIpt = document.querySelector('.todo-header input')
// 为头部input绑定抬起事件
oHeadIpt.onkeyup = function (e) {
  // 在按下的时候判断按键是否是keyCode === 13
  if (e.keyCode === 13) {
    // 如果keyCode===13,说明输入完成了，我们获取输入框中的内容，重新添加到内容列表todo-main中
    // trim()去除两端的空格
    var value = this.value.trim()
    // console.log(value);
    // 判断输入的内容是否是空格或者未输入
    if (!value) {
      return
    }
    // 清空添加任务的表单项
    this.value = ''
    // 创建拼接字符串
    var str = `
    <li>
      <label>
        <input type="checkbox"/>
        <span>` + value + `</span>
      </label>
      <button class="btn btn-danger">删除</button>
    </li> `
    // 将字符串添加到todo-main的ul列表中
    // 这个地方需要使用insertAdjacentHTML来插入元素，不能使用
    // innerHTML,因为他会调用之前的进行覆盖
    // oTodoMain.innerHTML += str
    oTodoMain.insertAdjacentHTML('beforeend', str)
    // 调用修改全选的方法
    changeAllCheckbox()
    // 只要添加数据就展示
    show()
    // 动态显示任务完成情况
    showListNum()
  }
}

// 3、更新任务项的状态
// 3.1、获取所有的任务项input
// 3.2、注册点击事件
// 由于不断有新的任务项，所以需要事件委托
oTodoMain.addEventListener('click',function (e) {
  if (e.target.nodeName.toLowerCase() === 'input') {
    var siblSpan = e.target.nextElementSibling
    // 3.3 在事件处理函数中，获取input[checked]的状态，然后给span添加或删除类名done
    if (e.target.checked === true) {
      siblSpan.classList.add('done')
    } else {
      siblSpan.classList.remove('done')
    }
  }

  // 5、实现删除按钮
  if (e.target.className === 'btn btn-danger') {
    e.target.parentNode.remove()
  }
  // 调用修改全选的方法
  changeAllCheckbox()
  // 动态显示任务完成情况
  showListNum()
  // 如果全部删除完毕，要隐藏todo-main和todo-footer
  isShow()

})
// 5、实现删除按钮
/* oTodoMain.onclick = function (e) {
  if (e.target.className === 'btn btn-danger') {
    // console.log(e.path[1]);
    e.path[1].remove()
  }
  // 调用修改全选的方法
  changeAllCheckbox()
  // 如果全部删除完毕，要隐藏todo-main和todo-footer
  isShow()
  // 动态显示任务完成情况
  showListNum()
}
 */
// 6、全选按钮的点击逻辑，全选选中了，每个任务项也都选中了，全选取消了，每个任务项也都取消了
// 获取完成点击按钮
var oFooterIpt = document.querySelector('.todo-footer input')

oFooterIpt.onclick = function () {
  var oTodoMainIpt = document.querySelectorAll('.todo-main input')
  var oMainSpan = document.querySelectorAll('.todo-main span')
  // 判断oFooterIpt是否被选中
  if (oFooterIpt.checked) {
    oTodoMainIpt.forEach(function (item, index) {
      item.checked = true
      oMainSpan[index].classList.add('done')
    })
  } else {
    oTodoMainIpt.forEach(function (item, index) {
      item.checked = false
      oMainSpan[index].classList.remove('done')
    })
  }
  // 动态显示任务完成情况
  showListNum()
}

// 8、删除所有的选中的任务项
var oFooterBtn = document.querySelector('.todo-footer .btn-danger')
oFooterBtn.onclick = function () {
  var oTodoMainIpt = document.querySelectorAll('.todo-main input')
  var oMainLis = document.querySelectorAll('.todo-main li')
  // 遍历所有的todo-main中的所有的input，判断是否选中
  oTodoMainIpt.forEach(function (item,index) {
    if (item.checked === true) {
      oMainLis[index].remove()
    }
  })
  // 动态显示任务完成情况
  showListNum()
  // 展示todo-main和todo-footer
  isShow()
}