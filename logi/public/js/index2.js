let username = document.querySelector('input[name=username]')

// 封装函数
function chechForm(reg, tips) {
    return function (e) {
        const value = this.value.trim()

        if (!value) return

        let span = this.nextElementSibling


        if (reg.test(value)) {
            span.textContent = '成功'
            span.style.color = 'skyblue'
        } else {
            span.textContent = tips
            span.style.color = 'red'
        }

    }
}
// 绑定input事件

let password = document.querySelector('input[name=password]')
username.oninput = chechForm(/^WE\w{6,8}$/, '用户名格式输入错误')


let Rpassword = document.querySelector('input[name=Rpassword]')
password.oninput = chechForm(/^\d{6,10}$/, '密码格式输入错误')


let btn = document.querySelector('input[type=submit]')


btn.onclick = function (e) {
    let spans = document.querySelectorAll('span')
    if (!(spans[0].textContent === '成功') ||
        !(spans[1].textContent === '成功')) {

        return e.preventDefault(),
            alert('重新输入')
    }
}

