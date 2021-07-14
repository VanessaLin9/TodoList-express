const mongoose = require('mongoose') //載入 mongoose
mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })//設定連線到MongoDB

//取得資料庫連線狀態
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')//連線異常
})
db.once('open', () => {
  console.log('mongodb connected!')//連線成功
})
module.exports = db