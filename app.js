const express = require('express')
const app = express()
const exphbs = require('express-handlebars') //引用express-handlebars 並且命名為"exphbs"
const port = 3000

app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'})) //建立一個名為'hbs'的樣板引擎, 並且傳入exphbs 與相關參數
app.set('view engine', 'hbs') //啟用樣板引擎 hbs

const mongoose = require('mongoose') //載入 mongoose
const { mainModule } = require('process')
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
  res.render('index')
})


app.listen(port, () => {
  console.log(`Express is listen on localhost${port} `)
})