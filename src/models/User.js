const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  title: { type: String, default: "" }, 
  image: { type: String, default: "" }, 
  skills: { type: [String], default: [] }, 
  roadmap: {
    type: [
      {
        step: { type: String, required: true },
        completed: { type: Boolean, default: false },
      },
    ],
    default: [],
  },
});

module.exports = mongoose.model("User", UserSchema);
