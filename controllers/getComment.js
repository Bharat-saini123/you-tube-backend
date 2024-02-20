import Comment from "../models/Comments.js";
import createError from "../error/error.js";
const getComment = async (req, res, next) => {
  try {
    const getVideoComment = await Comment.find({
      videoId: req.params.videoId,
    });
    if (!getVideoComment||getVideoComment.length==0)
      return res.json(createError(404, "no comment found", false));
    return res.status(200).json(getVideoComment);
  } catch (error) {
    next(error);
  }
};
export default getComment;
