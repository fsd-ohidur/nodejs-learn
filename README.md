# Learning Nodejs

Hi, I'm learning nodejs from stacklearner course name "Dive into NodeJS"


## Middleware
- work with route
- we may use as many as middleware inside request and response
- It will run one after another

- Using morgan as a middle ware with app
```
app.use(morgan('dev'))
```

- Using morgan as a middleware with a route
```
app.get('/', morgan('dev'), (req,res)=>{
    res.send('<h1>I am listening</h1>')
})
```