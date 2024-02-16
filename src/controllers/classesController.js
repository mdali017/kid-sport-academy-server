const MyClasses = require("../models/myclassesModel");

const getAllClasses = async (req, res) => {
  try {
    const result = await MyClasses.find();
    res.status(200).json({
      message: "All class return here..",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllClasses };
