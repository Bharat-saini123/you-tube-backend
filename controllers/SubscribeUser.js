import User from "../models/User.js";

const SubscribeUser = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(
      req.user.id,
      {
        $push: {
          userSubscribed: req.params.id,
        },
      },
      {
        new: true,
      }
    );
    await User.findByIdAndUpdate(req.params.id, {
      $inc: {
        subscriber: 1,
      },
    });
    res.status(200).json("successfully subscribe channel");
  } catch (error) {
    next(error);
  }
};
export default SubscribeUser;
