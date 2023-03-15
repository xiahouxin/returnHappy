const express=require('express')
const app=express()

app.get('/home',(req,res)=>{
    // console.log(req.query);  ///show
    let {callback}=req.query
    res.end(`${callback}('hello word')`) //'show()'
})
app.listen(3000,()=>{
    console.log('3000端口已启动');
})