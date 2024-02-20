import mongoose from "mongoose";


const Mongo=async(req,res)=>{

    await mongoose.connect("mongodb://127.0.0.1:27017/youtubesaini").then(()=>{
        console.log("database connected");
    }).catch(()=>{
        console.log("database not connected");
    })

}

export default Mongo;