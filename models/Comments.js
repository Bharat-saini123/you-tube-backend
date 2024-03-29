import mongoose from "mongoose";
const CommentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    videoId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);


const Comment=new mongoose.model("Comment",CommentSchema);

export default Comment;