const router = require('express').Router()
const {
    getAllPost,
    getSinglePost,
    createNewPost,
    updatePost,
    deletePost
} = require('./postController')


router.get('/',getAllPost)
router.get('/:id',getSinglePost)
router.post('/',createNewPost)
router.put('/:id',updatePost)
router.delete('/:id',deletePost)
module.exports=router