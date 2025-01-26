const mongoose = require("mongoose");

const mongodb = () => {
  let url = "mongodb+srv://amardatabase:amardatabase@cluster0.gjuunff.mongodb.net/resume"
  return mongoose
    .connect(
     url
    )
    .then(() => {
      console.log("connected");
    })
    .catch((error) => {
      console.log("error");
    });
};

module.exports = mongodb;
