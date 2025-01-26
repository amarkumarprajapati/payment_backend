const mongoose = require("mongoose");

const mongodb = () => {
  return mongoose
    .connect(
      "mongodb+srv://amardatabase:amardatabase@cluster0.gjuunff.mongodb.net/resume"
    )
    .then(() => {
      console.log("connected");
    })
    .catch((error) => {
      console.log("error");
    });
};

module.exports = mongodb;
