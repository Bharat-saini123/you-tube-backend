import createError from "../error/error.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import SECRET_KEY from "../SECRET/SecretKey.js";
const Signin = async (req, res, next) => {
  const data = req.body;
  try {
    const user = await User.findOne({ email: data.email });
    if (!user) return res.json(createError(400, "user not found", false));
    const correctPassword = await bcrypt.compare(data.password, user.password);
    if (!correctPassword)
      return res.json(createError(404, "wrong creadtional", false));
    const token = await jwt.sign({ id: user._id.toString() }, SECRET_KEY);
    const { password, tokens, ...otherDetails } = user._doc;
    return res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(otherDetails);
  } catch (error) {
    next(error);
  }
};
export default Signin;
