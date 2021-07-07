const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

const mongoose = require('mongoose') //載入 mongoose
mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true}) //設定連線到MongoDB

//取得資料庫連線狀態
const db = mongoose.connection
//連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
//連線成功
db.once('open', () => {
  console.log('mongodb conneted!')
})

app.get('/', (req,res) => {
  res.send('hello! world!')
})


app.listen(port, () => {
  console.log(`Express is listen on localhost${port} `)
})