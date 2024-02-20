import jwt from "jsonwebtoken";
import SECRET_KEY from "../SECRET/SecretKey.js";

const Authentication = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return res.json(401, "user not authenticate");
  await jwt.verify(token, SECRET_KEY, (error, user) => {
    if (error) return res.json(401, "token not valid");
    req.user=user;
    next();
  });
};
export default Authentication;
