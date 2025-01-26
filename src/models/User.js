const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  username: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: false,
  },
  firstname: {
    type: String,
    required: false,
  },
  lastname: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("users", userSchema);
