// 需求1: 在文本框中 todo-header input  输入内容,按下回车键,表示输入完成,将输入的内容,添加到任务列表中
var input = document.querySelector('input')

input.onkeyup = function (e) {
    var ul = document.querySelector('.todo-main')
    if (e.keyCode === 13) {
        var text = input.value
        var str = document.createElement('li')
        var str2 = '<label><input type="checkbox" /><span>' + text + '</span></label><button class="btn btn-danger">删除</button>'
    }
    str.innerHTML = str2
    ul.appendChild(str)
}

// var but = document.querySelectorAll('.btn-danger')
// console.log(but);
// but.forEach(function (item) {
//     console.log(111);
//     item.onclick = function () {
//         console.log(111);
//         this.parentNode.remove()
//     }
// })
var btn = document.getElementsByClassName('btn')
console.log(btn);
for (var i = 0; i < btn.length; i++) {
    btn.onclick = function () {
        this.parentNode.remove()
    }
}

