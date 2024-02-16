const User = require("../models/userModel");

const getAllUser = async (req, res) => {
  const result = await User.find();
  res.status(200).json({
    message: "All user is return",
    data: result,
  });
};

module.exports = { getAllUser };
