const { default: mongoose } = require("mongoose");

require("dotenv").config();
const mongoDBUrl = process.env.MONGODB_ATLAS_URL;

const connectDatabase = async () => {
  try {
    await mongoose.connect(mongoDBUrl);
    console.log("Mongodb Connection is Successfully...");
  } catch (error) {
    console.log("Database Connection Error");
  }
};

module.exports = connectDatabase;
