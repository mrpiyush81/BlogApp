const Post=require("../models/postmodel");
const Comment=require("../models/comment");


exports.createcomment = async (req,res)=>{
    try{
        const{post,user,body}=req.body;

        const comment = new Comment({
            post,user,body
        });

        const savedComment = await comment.save();

        const updatedPost = await Post.findByIdAndUpdate(post, {$push:{comments:savedComment._id }},{new:true})
                         .populate("comments")
                         .exec();
res.json({
        post:updatedPost
     });
    }

    catch(err){
      console.log(err);
      return res.status(500).json({
        error:"error while creating commment",
        mess:err
      }) 
    }
}