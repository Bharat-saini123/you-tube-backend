import Comment from "../models/Comments.js";
import createError from "../error/error.js";
const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) return res.json(createError(404, "no comment found", false));
    if (comment.userId === req.user.id) {
      await Comment.findByIdAndDelete(req.params.commentId);
      return res.status(200).json("successfull deleted comment");
    } else {
      return res.json(createError(400, "you delete only your comment", false));
    }
  } catch (error) {
    next(error);
  }
};
export default deleteComment;
