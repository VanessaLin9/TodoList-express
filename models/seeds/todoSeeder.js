const db = require('../../config/mongoose')
const Todo = require('../todo') //載入todo model

db.once('open', () => {
  for (i=0; i<10; i++){
    Todo.create({name: 'name-' + i })
  }
  console.log('done!')
})