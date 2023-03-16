const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/home', (req, res) => { // 简单请求
  // console.log(req.headers);
  res.end('hello world')
})

app.put('/getData', (req, res) => { // 复杂请求
  // console.log(req.headers);
  res.end('hello world 复杂请求')
})

app.listen(3000, () => {
  console.log('3000端口已启动');
})