exports.getAllPost= (req,res)=>{
    // console.log(req.query)
    // let {category, page, filter}=req.query
    // console.log(category)
    res.send('<h1>Showing your all posts</h1>')
}

exports.getSinglePost=(req,res)=>{
    res.send('<h1>Showing your specific post, ID: '+req.params.id+'</h1>')
}

exports.createNewPost=(req,res)=>{
    res.send('<h1>Create new post</h1>')
}

exports.updatePost=(req,res)=>{
    res.send('<h1>Update your existing post, ID: '+req.params.id+'</h1>')
}

exports.deletePost=(req,res)=>{
    res.send('<h1>Deleted your existing post, ID: '+req.params.id+'</h1>')
}
