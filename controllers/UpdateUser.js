import createError from "../error/error.js";
import User from "../models/User.js";
const UpdateUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updateUser);
    } catch (error) {
      next(error);
    }
  } else {
    return res.json(createError(401, "you update only your account", false));
  }
};
export default UpdateUser;
