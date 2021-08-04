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
  },
  userId: {  // 加入關聯設定
    type: Schema.Types.ObjectId,
    ref: 'User', //定義參考對象是 User model
    index: true, //使用索引來查詢資料能夠增加讀取效能
    required: true //必填，確保每一筆 todo 紀錄都一定會對應到某個 user
  }
})
module.exports = mongoose.model('Todo', todoSchema)