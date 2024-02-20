import User from "../models/User.js";
import Video from "../models/Video.js";
const SubsVideo = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const SubscribesChannel = user.userSubscribed;

    const list = await Promise.all(
      SubscribesChannel.map((channelId) => {
        return Video.find({ userId: channelId });
      })
    );
    res.status(200).json(list.flat());
  } catch (error) {
    next(error);
  }
};
export default SubsVideo;
