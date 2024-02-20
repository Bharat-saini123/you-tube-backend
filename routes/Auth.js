import mongoose from "mongoose";
import express from "express";
import Signup from "../database/Signup.js";
import Signin from "../database/Signin.js";


const router=express.Router();

router.post("/signup",Signup);
router.post("/signin",Signin);



export default router;