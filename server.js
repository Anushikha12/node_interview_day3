const express=require('express')
const addition=require('./module')
const {sub,mul,div}=require('./module')
const app=express()
const port=4000 || process.env.port

const middleware=(req,res,next)=>{
    console.log("i work for all the routes")
    next();
}
app.use(middleware)

app.get('/',(req,res)=>{
    res.send(`<h1>i am home page</h1>`)
    res.end();
})

addition()
// sub()
// mul()
// div()
app.listen(port,()=>{
    console.log(`server is started at port ${port}`)
})