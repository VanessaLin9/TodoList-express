const mongoose = require('mongoose')
const Schema = mongoose.Schema
const todoSchema = new Schema ({
  name: {
    type: String, //資料是字串
    required: true //這個必填
  },
  isDone: {
    type: Boolean,
    default: false
  }
})
module.exports = mongoose.model('Todo', todoSchema)