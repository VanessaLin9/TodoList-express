const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

//Template engine

// setting body-parser

app.get('/', (req,res) => {
  res.send('hello! world!')
})


app.listen(port, () => {
  console.log(`Express is listen on localhost${port} `)
})