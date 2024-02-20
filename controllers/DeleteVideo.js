import createError from "../error/error.js";
import Video from "../models/Video.js";
const DeleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.json(createError(404, "video not found", false));
    if (req.user.id === video.userId) {
      await Video.findByIdAndDelete(req.params.id);
      return res.status(200).json("video deleted successfully");
    } else {
      return res.json(createError(404, "you deleted only your video",false));
    }
  } catch (error) {
    next(error);
    
  }
};
export default DeleteVideo;
