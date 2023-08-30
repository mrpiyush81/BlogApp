const Post=require("../models/postmodel")

 exports.createPost = async (req,res)=>{
      try{
              const {title,body}=req.body;
              const post = new Post({
                title,body
              });
              const savepost = await post.save();

              res.json({
                 post:savepost
              })
      }
      catch(err){
        return res.status(400).json({
            error:err
        })
      }
 }


 exports.getallPost = async (req,res)=>{
    try{
           const posts = await Post.find().populate("likes").populate("comments").exec();

           res.json({
            posts
         })
        }
    catch(err){
        console.log(err);
      return res.status(400).json({
          error:"post fetching error"

      })
    }
}