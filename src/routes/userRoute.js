const express = require("express");
const { getAllUser } = require("../controllers/userController");
const userRoute = express.Router();

userRoute.get("/", getAllUser);

module.exports = userRoute;
