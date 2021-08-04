// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Todo model
const Todo = require('../../models/todo')


// 定義首頁路由
router.get('/', (req, res) => {
  const userId = req.user._id   // 變數設定
  Todo.find({ userId }) //加入查詢條件
    .lean() //把Mongoose 的 model 物件轉換成乾淨的 JS 資料陣列
    .sort({ _id: 'asc' }) //根據ID做正序(ascending)排列, 反序是'desc'(desscending)
    .then(todos => res.render('index', { todos })) //將資料傳給 index 樣板, 這邊{todos}是{todos: todo}的縮寫
    .catch(error => console.error(error)) //錯誤處理
})


// 匯出路由模組
module.exports = router