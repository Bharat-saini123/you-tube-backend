import createError from "../error/error.js";
import Video from "../models/Video.js";
const tagVideo=async(req,res,next)=>{
    const tags=req.query.tags.split(",");
   try{
const videos=await Video.find({tags:{$in:tags}}).limit(20);
if(videos.length===0) return res.json(createError(500,"please search another tags",false));
return res.status(200).json(videos);
   }catch(error){
    next(error)
   }

}
export default tagVideo;