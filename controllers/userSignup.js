const user = require("../models/user");
const { createToken } = require("../services/authentication");

const userSignup = async (req, res) => {
  const { fullName, email, password } = req.body;
  const newUser = new user({
    fullName,
    password,
    email,
  });
  const savedUser = await newUser.save();
  const token = createToken(savedUser);
  res.cookie("token", token);
  res.redirect("/");
};

module.exports = userSignup;
