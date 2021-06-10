  // 定义一个全局计数器，这个计时器需要在4和7中使用

  //封装一个函数用来判断一共有任务完成了
  function change() {
    // 已经完成的
    var finish = 0
    // 任务总数
    var allTask = 0
    // 4.1、获取所有的任务项的input
    var oMainIpt = document.querySelectorAll('.todo-main input')
    allTask = oMainIpt.length
    // 4.3遍历所有的oMainIpt,判断哪些任务项被选中了
    oMainIpt.forEach(function (item) {
      if (item.checked === true) {
        finish++
      }
    })
    return {
      finish,
      allTask
    }
  }
  // 4、全选按钮操作
  function changeAllCheckbox() {
    // 4.2、获取todo-footer元素，为input绑定选中事件
    var oFooterIpt = document.querySelector('.todo-footer input')
    // 调用任务完成程度函数
    var oChange = change()
    // 如果相等，则说明任务全部完成了
    if (oChange.finish === oChange.allTask) {
      oFooterIpt.checked = true
    } else {
      oFooterIpt.checked = false
    }
  }

  // 判断是否需要隐藏todo-main和todo-footer
  function isShow() {
    // 当页面中一个数据都没有的时候要隐藏
    // 获取todo-main和todo-footer,todo-main里面的数据集合
    var oMainLis = document.querySelectorAll('.todo-main input')
    oMainLis.length ? show() : hide()
  }
  // 这是让todo-main和todo-footer隐藏的函数
  function hide() {
    var oWrap = document.querySelector('.todo-wrap')
    var oMain = document.querySelector('.todo-main')
    var oFooter = document.querySelector('.todo-footer')
    oFooter.style.display = 'none'
    oMain.style.display = 'none'
    // 并插入一个提示节点
    var text = document.createElement('h2')
    text.innerHTML = '恭喜你，任务完成喽！'
    oWrap.appendChild(text)
  }
  // 这是让todo-main和todo-footer显示的函数
  function show() {
    var oMain = document.querySelector('.todo-main')
    var oFooter = document.querySelector('.todo-footer')
    var oH2 = document.querySelector('h2')
    oFooter.style.display = 'block'
    oMain.style.display = 'block'
    if (oH2) {
      oH2.remove()
    }
  }

  // 7、动态的展示所有的任务个数和已经完成的任务个数
  function showListNum() {
    var oFinish = document.querySelector('#finish')
    var oAllTask = document.querySelector('#allTask')
    // 调用任务完成程度函数，拿到总体任务数和已经完成的任务数
    var oChange = change()
    // 将总体任务数和已经完成的任务数平铺到页面上
    oFinish.innerHTML = oChange.finish
    oAllTask.innerHTML = oChange.allTask
  }