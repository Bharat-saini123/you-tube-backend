import createError from "../error/error.js";
import Video from "../models/Video.js";
const randomVideo = async (req, res, next) => {
  try {
    const videos = await Video.aggregate([{ $sample: { size: 40} }]);
    if (!videos) return res.json(createError(404, "video not found", false));
    return res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};
export default randomVideo;
