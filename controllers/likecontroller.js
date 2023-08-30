const Post= require("../models/postmodel")
const Like= require("../models/likemodel")


exports.likePost = async (req,res) =>{
    try{
         const {post,user} = req.body
         const like=new Like({
            post,user
         });
         const savedLike=await like.save();

         const updatedPost= await Post.findByIdAndUpdate(post, {$push:{likes:savedLike._id}},{new:true})
         .populate("likes")
         .exec()

         res.json({
            post:updatedPost,
         });
    }
    catch(err){
        console.log(err);
        return res.status(400).json({
            error:"Error while fetching post"
        })

    }
}

exports.unlikePost = async (req,res)=>{
    try{
        
        const{post,like}=req.body;
         

        const deletedlike = await Like.findByIdAndDelete({post:post,_id:like});

        const updatedPost= await Post.findByIdAndUpdate(post, {$pull:{likes:deletedlike._id} },{new:true})
        
        res.json({
            post:updatedPost,
         });
    }
    catch(err){
       
            console.log(err);
            return res.status(400).json({
                error:"Error while unlike fetching post"
            })
    }
}