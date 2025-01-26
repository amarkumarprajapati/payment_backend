const { mongoose } = require("mongoose");
const UserSchema = require("../models/User");
const apiResponse = require("../middleware/api.responce.js/api.responce");

const user = {};

user.login = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      
      const existingUser = await UserSchema.findOne({ username });
      if (!existingUser) {
        return apiResponse.ErrorResponse(res, "User not found");
      }
  
      
      if (existingUser.password !== password) {
        return apiResponse.ErrorResponse(res, "Invalid credentials");
      }
  
      return apiResponse.successResponse(res, "Login successful");
    } catch (err) {
      console.error("Error in login:", err);
      return apiResponse.ErrorResponse(res, "Server error");
    }
  };
  

user.register = async (req, res) => {
    try {
      const { firstname, lastname, phonenumber, email, username, password } = req.body;
  
    
      const existingUser = await UserSchema.findOne({ $or: [{ email }, { username }] });
      if (existingUser) {
        return apiResponse.badRequestResponse(res, "User already exists");
      }
  
      const newUser = new UserSchema({
        firstname,
        lastname,
        phone: phonenumber,
        email,
        username,
        password,
      });
  
      await newUser.save();
      return apiResponse.successResponse(res, "User registered successfully");
    } catch (err) {
      console.error("Error in register:", err);
      return apiResponse.ErrorResponse(res, "Server error");
    }
  };
  

module.exports = user;
