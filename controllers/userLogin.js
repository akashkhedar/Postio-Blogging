const User = require("../models/user");

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const token = await User.passMatchTokenCreate(email, password);
  res.cookie("token", token);
  return res.redirect("/");
};

module.exports = userLogin;
