const express=require('express') ;

const router=express.Router();

const {createcomment}=require("../controllers/commentcon")
const {createPost,getallPost}=require("../controllers/postcontroller")
const {likePost,unlikePost}=require("../controllers/likecontroller");



router.post("/comments/create",createcomment)
router.post("/posts/create",createPost)
router.get("/posts",getallPost)
router.post("/likes/like",likePost)
router.post("/likes/unlike",unlikePost)

module.exports=router;