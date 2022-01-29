const express=require('express')
const morgan=require('morgan')
const userRoute=require('./userRoute')
const postRoute=require('./postRoute')
const contactRoute=require('./contactRoute')

const app=express()
app.set('view engine', 'ejs')

function customMiddleware(req, res, next){
    // if(req.url=='/help'){
    //     res.send('<h1>Sorry, Page is blocked by admin.</h1>')
    // }
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
    res.render('pages/about',{title:'About page'})
})
app.get('/help',(req,res)=>{
    res.render('pages/help',{title:'Help page'})
})

app.get('/',(req,res)=>{
    let post={
        title: 'Test title',
        body: 'Test body',
        published:true
    }
    let tutorials=[
        {
            title: 'Data Structure and Algorithm',
            website: 'udemy.com'
        },
        {
            title: 'Dive into nodejs',
            website: 'Stack learner'
        },
        {
            title: 'Introduction to python',
            website: 'Data Camp'
        }
    ]
    res.render('pages/index',{title:'Work with EJS - Template engine ', post, tutorials})
})

const PORT = process.env.PORT||8080
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})