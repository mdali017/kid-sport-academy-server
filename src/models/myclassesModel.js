const mongoose = require("mongoose");
const { Schema } = mongoose;

const myclassesSchema = new Schema({
  classItemId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const MyClasses = mongoose.model("MyClasses", myclassesSchema);
module.exports = MyClasses;
