import Video from "../models/Video.js";
const DislikeUser = async (req, res, next) => {
  try {
     await Video.findByIdAndUpdate(req.params.videoId, {
      $addToSet: {
        dislike:req.user.id,
      },
      $pull: {
        like:req.user.id,
      },
    },{new:true});
    res.status(200).json("video has been disliked");
  } catch (error) {
    next(error);
  }
};
export default DislikeUser;
