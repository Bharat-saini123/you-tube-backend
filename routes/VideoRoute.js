
import express from 'express';
import DeleteVideo from '../controllers/DeleteVideo.js';
import GetVideo from '../controllers/GetVideo.js';
import UpdateVideo from '../controllers/UpdateVideo.js';
import createVideo from '../database/VideoCreate.js';
import Authentication from '../Auth/Authentation.js';
import trendVideo from '../controllers/trendVideo.js';
import addViewsVideo from '../controllers/addViewsVideo.js';
import randomVideo from '../controllers/randomVideo.js';
import SubsVideo from '../controllers/SubsVideo.js';
import tagVideo from '../controllers/tagVideo.js';
import searchVideo from '../controllers/searchVideo.js';
const router=express.Router();

router.get("/getVideo/:id",GetVideo);
router.delete("/deleteVideo/:id",Authentication,DeleteVideo);
router.put("/updateVideo/:id",Authentication,UpdateVideo);
router.post("/videoCreated",Authentication,createVideo);
router.put("/addViews/:id",addViewsVideo);
router.get("/trend",trendVideo);
router.get("/random",randomVideo);
router.get("/subs",Authentication,SubsVideo);
router.get("/tags",tagVideo);
router.get("/search",searchVideo);






export default router;