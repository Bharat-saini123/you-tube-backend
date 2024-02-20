import User from "../models/User.js";
const GetUser = async (req, res, next) => {
  try {
    const getUser = await User.findById(req.params.id);
    res.status(200).json(getUser);
  } catch (error) {
    next(error);
  }
};
export default GetUser;
