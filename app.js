const express = require('express')
const session = require('express-session')
const usePassport = require('./config/passport') // 載入設定檔，要寫在 express-session 以後
const app = express()
const exphbs = require('express-handlebars') //引用express-handlebars 並且命名為"exphbs"
const bodyParser = require('body-parser')


const PORT = process.env.PORT || 3000 //改由heroku指定路由

const Todo = require('./models/todo') //載入todo model

//載入method-override
const methOverride = require('method-override')

usePassport(app) // 呼叫 Passport 函式並傳入 app，這條要寫在路由之前

// 引用路由器
const routes = require('./routes')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' })) //建立一個名為'hbs'的樣板引擎, 並且傳入exphbs 與相關參數
app.set('view engine', 'hbs') //啟用樣板引擎 hbs

require('./config/mongoose')


app.use(session({
  secret: 'ThisIsMySecret',
  resave: false, //當設定為 true 時，會在每一次與使用者互動後，強制把 session 更新到 session store 裡。
  saveUninitialized: true //強制將未初始化的 session 存回 session store。未初始化表示這個 session 是新的而且沒有被修改過，例如未登入的使用者的 session。
}))

// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))

//設定每一筆請求都會通過method override進行前處理
app.use(methOverride('_method'))

// 將 request 導入路由器
app.use(routes)

app.listen(PORT, () => {
  console.log(`Express is listen on localhost${PORT} `)
})