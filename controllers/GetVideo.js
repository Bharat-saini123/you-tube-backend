import Video from "../models/Video.js";
import createError from "../error/error.js";
const GetVideo = async (req, res, next) => {
  try {
    const videos = await Video.findById(req.params.id);
    if (!videos) return res.json(createError(404, "video not found", false));
    return res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};
export default GetVideo;
