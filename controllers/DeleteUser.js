import createError from "../error/error.js";
import User from "../models/User.js";
const DeleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const DeleteUser = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("user delted successfully");
    } catch (error) {
      next(error);
    }
  } else {
    return res.json(createError(401, "you delete only your account", false));
  }
};
export default DeleteUser;
