const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  status: { type: String, required: true },
  image: { type: String }, // URL or Base64
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

module.exports = mongoose.model("Profile", ProfileSchema);
