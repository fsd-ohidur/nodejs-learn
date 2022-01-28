const express=require('express')
const morgan=require('morgan')
const userRoute=require('./userRoute')
const postRoute=require('./postRoute')
const contactRoute=require('./contactRoute')

const app=express()

function customMiddleware(req, res, next){
    if(req.url=='/help'){
        res.send('<h1>Sorry, Page is blocked by admin.</h1>')
    }
    console.log('I am logged, called as middleware, url:', req.url)
    next()
}

function tinyLogger(){
    return (req, res, next)=>{
        console.log(`${req.method} - ${req.url}`)
        next()
    }
}

const mw=[customMiddleware,tinyLogger()]
// app.use(morgan('dev'))
// app.use(customMiddleware)
app.use(mw)

// User Router
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/user',userRoute)
app.use('/posts',postRoute)
app.use('/contact',contactRoute)
// User Router End


app.get('/json',morgan('dev'), morgan('tiny'), (req,res)=>{
    res.json({
        message : "I'm response as a json object."
    })
})
app.get('/about',(req,res)=>{
    res.send('<h1>This is about page</h1>')
})
app.get('/help',(req,res)=>{
    res.send('<h1>This is help page</h1>')
})

app.get('/',(req,res)=>{
    res.send('<h1>I am listening</h1>')
})
app.get('*',()=>{
    res.send('<h1>Please use the correct route</h1>')
})


const PORT = process.env.PORT||8080
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})