import createError from "../error/error.js";
import Video from "../models/Video.js";
const searchVideo = async (req, res, next) => {
  const query = req.query.q;
  const videos = await Video.find({
    title: { $regex: query, $options: "i" },
  }).limit(20);
  return res.status(200).json(videos);
};
export default searchVideo;
