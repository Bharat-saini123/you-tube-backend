import Video from "../models/Video.js";
import createError from "../error/error.js";

const createVideo = async (req, res, next) => {
  try {
    const video = new Video({ userId: req.user.id,...req.body } );
    if (!video) return res.json(createError(404, "video not created", false));
    await video.save();
    return res.status(200).json(video);
  } catch (error) {
    next(error);
  }
};
export default createVideo;
