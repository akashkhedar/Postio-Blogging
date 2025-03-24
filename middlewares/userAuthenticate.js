const { validateToken } = require("../services/authentication");

const userAuthenticate = async (req, res, next) => {
  const tokenCookie = req.cookies?.token;
  req.user = null;
  if (!tokenCookie) {
    return next();
  }
  try {
    const userPayload = validateToken(tokenCookie);
    req.user = userPayload;
  } catch (error) {
    error: "User invalid";
  }
  return next();
};
module.exports = userAuthenticate;
