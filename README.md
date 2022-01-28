# Learning Nodejs

Hi, I'm learning nodejs from stacklearner course name "Dive into NodeJS"


## Middleware -- Check in git branc middleware 
- work with route
- we may use as many as middleware inside request and response
- It will run one after another

- Using morgan as a middleware with app
```
app.use(morgan('dev'))
```

- Using morgan as a middleware with a route
```
app.get('/', morgan('dev'), (req,res)=>{
    res.send('<h1>I am listening</h1>')
})
```

## Route -- Check in git branch route_branch 
- Created user route
- Created post Controller and route
- added sample userRoute
- added postRoute
- added contactRoute as sample route project where uses following verbs: GET, POST, PUT, DELETE 

