const express = require("express");
const { getAllClasses } = require("../controllers/classesController");
const classesRoute = express.Router();

classesRoute.get("/", getAllClasses);

module.exports = classesRoute;
