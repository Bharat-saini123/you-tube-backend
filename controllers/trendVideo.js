import createError from "../error/error.js";
import Video from "../models/Video.js";
const trendVideo = async (req, res, next) => {
  try {
    const videos = await Video.find().sort({ views: -1 });
    if(!videos) return res.json(createError(404,"video not found",false));
    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};
export default trendVideo;
