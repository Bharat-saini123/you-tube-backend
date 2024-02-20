import express from "express";
import Authentication from "../Auth/Authentation.js";
import addComment from "../controllers/addComment.js";
import getComment from "../controllers/getComment.js";
import deleteComment from "../controllers/deleteComment.js";
import deleteCommentByAuthor from "../controllers/deleteCommentByAuthor.js";
const router=express.Router();

router.post("/addComment/:id",Authentication,addComment);
router.get("/getComment/:videoId",getComment);
router.delete("/deleteComment/:commentId",Authentication,deleteComment);
router.delete("/deleteCommentByAuthor/:commentId",Authentication,deleteCommentByAuthor);


export default router