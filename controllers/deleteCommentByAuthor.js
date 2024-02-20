import createError from "../error/error.js";
import Comment from "../models/Comments.js";
import Video from "../models/Video.js";
const deleteCommentByAuthor = async (req, res, next) => {
  try {
    const comments = await Comment.findById(req.params.commentId);
    if (!comments) return res.json(createError(404, "no comment found", false));
    const videouser = await Video.findById(comments.videoId);
    if (videouser.userId === req.user.id) {
      await Comment.findByIdAndDelete(req.params.commentId);
      res.status(200).json("successfull deleted comment by author");
    } else {
      return res.json(
        createError(400, "you not deleted comment because you are not author of video",false)
      );
    }
  } catch (error) {
    next(error);
  }
};
export default deleteCommentByAuthor;
