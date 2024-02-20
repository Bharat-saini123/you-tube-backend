import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import Mongo from "./mongo/Mongo.js";
import AuthRoutes from "./routes/Auth.js";
import userRoutes from "./routes/userRoute.js"
import VideoRoute from "./routes/VideoRoute.js";
import CommentRoute from "./routes/CommentRoute.js";

const port = process.env.PORT || 5000;
const corsOptions = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,get,head,put,patch,post,delete",
  credentials: true,
};

const app = express();


app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));

// data base function
Mongo();
//


app.use("/api/auth/user",AuthRoutes);
app.use("/api/user",userRoutes);
app.use("/api/video",VideoRoute);
app.use("/api/comment",CommentRoute);

app.use((error,req,res,next)=>{
    const status=error.status||500;
    const message=error.message||"someting went wrong !";
    const success=false

    return res.status(status).json({
        success,
        status,
        message,
    });

})
app.listen(port, () => {
  console.log(`server start at the port of ${port}`);
});
