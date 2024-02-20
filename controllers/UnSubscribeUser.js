import User from "../models/User.js";
const UnSubscribeUser = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull: {
        userSubscribed: req.params.id,
      },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: {
        subscriber: -1,
      },
    });
    res.status(200).json("unsubscribed channel successful");
  } catch (error) {
    next(error);
  }
};
export default UnSubscribeUser;
