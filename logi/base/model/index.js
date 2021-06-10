const mongoose = require('mongoose')

// 创建Schema对象

const Schema = mongoose.Schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    }

},
    {
        collection: 'user',
    })
    // 创建 model对象
module.exports = mongoose.model('user', userSchema)