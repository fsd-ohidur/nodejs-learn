const express=require('express')
const app=express()


app.get('/json',(req,res)=>{
    res.json({
        message : "I'm response as a json object."
    })
})
app.get('/user/:id',(req,res)=>{
    res.send('<h1>User Id: '+req.params.id+'</h1>')
})
app.get('/about',(req,res)=>{
    res.send('<h1>This is about page</h1>')
})
app.get('/contact',(req,res)=>{
    res.send('<h1>This is contact page</h1>')
})
app.get('/help',(req,res)=>{
    res.send('<h1>This is help page</h1>')
})
app.get('/',(req,res)=>{
    res.send('<h1>I am listening</h1>')
})

const PORT = process.env.PORT||8080
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})