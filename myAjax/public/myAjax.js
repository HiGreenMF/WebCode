function myAjax(option) {
    // 1.解构对象
    const {
        url,
        type = 'get',
        data,
        dataType = 'json',
        timeout = 10000,
        beforSend,
        succes,
        complete,
        error,
    } = option
    // 2.如果没写url直接退出
    if (!url) return
    // 3.创建xhr实例对象
    const xhr = new XMLHttpRequest

    // 设置超时事件
    xhr.timeout = timeout
    // 4.调用open方法
    let parmes = objData(data)
    if (type === 'get') {

        xhr.open(type, url + '?' + parmes)
    } else {
        xhr.open(type, url)
    }

    // 5.设置请求头
    if (type === 'post') {
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
    }
    // 6.设置请求主体
    let re = beforSend && beforSend()
    if (re === false) return

    if (type === 'get') {
        xhr.send()
    } else {
        xhr.send(parmes)
    }
    // 处理响应
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            complete && complete()
            if (xhr.status === 200) {
                let value
                if (dataType === "text") {
                    value = xhr.responseText
                } else if (dataType === 'json') {
                    value = JSON.parse(xhr.responseText)
                }
                succes && succes()
            } else {
                error && error()
            }
        }
    }
}


// 封装函数(对象转字符串)
function objData(data) {
    if (!data) return
    let arr = []
    for (let key in data) {
        arr.push(key + '=' + data[key])
    }
    return arr.join('&')
}


