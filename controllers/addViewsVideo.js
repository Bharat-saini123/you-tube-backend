import createError from "../error/error.js";
import Video from "../models/Video.js";
const addViewsVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.json(createError(404, "video not found", false));
    await Video.findByIdAndUpdate(
      req.params.id,
      {
        $inc: {
          views: 1,
        },
      },
      {
        new: true,
      }
    );
    res.status(200).json("added views successfully");
  } catch (error) {
    next(error);
  }
};
export default addViewsVideo;
