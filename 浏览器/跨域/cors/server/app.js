const express = require('express')
const app = express()

let whitList = ['http://127.0.0.1:5500'] // 设置白名单
const cors = (req, res, next) => {
  let origin = req.headers.origin
  if (whitList.includes(origin)) {
    // 设置那个源可以访问我(我可以朝哪个源响应成功)
    res.setHeader('Access-Control-Allow-Origin', origin)
    // 允许携带哪个头访问我
    res.setHeader('Access-Control-Allow-Headers', 'name')
    // 允许哪个方法访问我
    res.setHeader('Access-Control-Allow-Methods', 'PUT'),
    // 允许携带cookie
    res.setHeader('Access-Control-Allow-Credentials', true)
    // 预检的存活时间
    res.setHeader('Access-Control-Max-Age', 6)
    // 允许发回的头
    res.setHeader('Access-Control-Expose-Headers', 'name')

    if (req.method === 'OPTIONS') {
      res.end() // 预检请求不做任何处理
    }

  }
  // console.log(origin);
  next()
}

app.use(cors)

app.get('/home', (req, res) => { // 简单请求
  console.log(req.headers);
  res.end('hello world')
})

app.put('/getData', (req, res) => { // 复杂请求
  console.log(req.headers);
  res.end('hello world 复杂请求')
})

app.listen(3000, () => {
  console.log('3000端口已启动');
})