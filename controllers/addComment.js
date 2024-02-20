import Comment from "../models/Comments.js";
const addComment = async (req, res, next) => {

  try {
    const comment = new Comment({
        userId: req.user.id,
        videoId: req.params.id,
        ...req.body,
      });
    const savedComment = await comment.save();
    res.status(200).json(savedComment);
  } catch (error) {
    next(error);
  }
};
export default addComment;
