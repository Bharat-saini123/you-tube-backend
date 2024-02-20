import Video from "../models/Video.js";
import createError from "../error/error.js";
const Like = async (req, res, next) => {
  try {
     await Video.findByIdAndUpdate(req.params.videoId, {
      $addToSet: {
        like: req.user.id,
      },
      $pull: {
        dislike: req.user.id,
      },
    },{new:true});
    res.status(200).json("video has been liked");
  } catch (error) {
    next(error);
  }
};
export default Like;
