import createError from "../error/error.js";
import User from "../models/User.js";
const Signup = async (req, res, next) => {
  try {
    const checkUser=await User.findOne({$or:[{email:req.body.email},{username:req.body.username}]});
    if(checkUser) return res.json(createError(400,"username or email alredy exist please filled another data",false));
    const user = await new User({ ...req.body });
    await user.save();
    return res.status(200).json("user has been created");
  } catch (error) {
    next(error);
  }
};
export default Signup;
