import express from "express";
import Authentication from "../Auth/Authentation.js";
import GetUser from "../controllers/getUser.js";
import UpdateUser from "../controllers/UpdateUser.js";
import DeleteUser from "../controllers/DeleteUser.js";
import Like from "../controllers/LikeUser.js";
import DislikeUser from "../controllers/DislikeUser.js";
import SubscribeUser from "../controllers/SubscribeUser.js";
import UnSubscribeUser from "../controllers/UnSubscribeUser.js";
const router = express.Router();
router.get("/find/:id",GetUser);
router.put("/update/:id",Authentication,UpdateUser);
router.delete("/delete/:id",Authentication,DeleteUser);
router.put("/like/:videoId",Authentication,Like);
router.put("/dislike/:videoId",Authentication,DislikeUser);
router.put("/subs/:id",Authentication,SubscribeUser);
router.put("/unsubs/:id",Authentication,UnSubscribeUser);



export default router;
