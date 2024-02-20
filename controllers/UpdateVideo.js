import createError from "../error/error.js";
import Video from "../models/Video.js";
const UpdateVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.json(createError(404, "video not found", false));
    if (req.user.id === video.userId) {
      await Video.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json("update video successfully");
    } else {
      return res.json(createError(406, "you updated only your video", false));
    }
  } catch (error) {
    next(error);
  }
};
export default UpdateVideo;
