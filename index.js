const express = require("express");
const cors = require("cors");
const connectDatabase = require("./src/config/db");
const userRoute = require("./src/routes/userRoute");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5001;

connectDatabase();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Server....",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
