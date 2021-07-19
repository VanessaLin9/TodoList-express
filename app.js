const express = require('express')
const app = express()
const exphbs = require('express-handlebars') //引用express-handlebars 並且命名為"exphbs"
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000 //改由heroku指定路由

const Todo = require('./models/todo') //載入todo model

//載入method-override
const methOverride = require('method-override')

// 引用路由器
const routes = require('./routes')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' })) //建立一個名為'hbs'的樣板引擎, 並且傳入exphbs 與相關參數
app.set('view engine', 'hbs') //啟用樣板引擎 hbs

require('./config/mongoose')


// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))

//設定每一筆請求都會通過method override進行前處理
app.use(methOverride('_method'))

// 將 request 導入路由器
app.use(routes)

app.listen(PORT, () => {
  console.log(`Express is listen on localhost${PORT} `)
})