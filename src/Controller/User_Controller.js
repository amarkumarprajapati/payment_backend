const UserSchema = require("../models/User");
const apiResponse = require("../middleware/api.responce.js/api.responce");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "3d9f6a67e26454f09379c5465360ec06d4f7e1db9a3f7ad688c5b9f7b9c68565"; 
const user = {};

// Login User
user.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await UserSchema.findOne({ email });

    // Check if the user exists
    if (!existingUser) {
      return apiResponse.ErrorResponse(res, "User not found");
    }

    // Validate password
    if (existingUser.password !== password) {
      return apiResponse.ErrorResponse(res, "Invalid credentials");
    }

    // Generate JWT token
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      SECRET_KEY,
      { expiresIn: "30d" } // valid for of 30 days 
    );

    
    return apiResponse.successResponseWithData(res, "Login successful", {
      email: existingUser.email,
      token,
    });
  } catch (err) {
    console.error("Error in login:", err);
    return apiResponse.ErrorResponse(res, "Server error");
  }
};



// register User
user.register = async (req, res) => {
  try {
    const { firstname, lastname, phonenumber, email, password } = req.body;

    const existingEmail = await UserSchema.findOne({ email });
    if (existingEmail) {
      return apiResponse.ErrorResponse(res, "This email is already in use");
    }

    // Create a new user
    const newUser = new UserSchema({
      firstname,
      lastname,
      phone: phonenumber,
      email,
      password,
    });

    await newUser.save();

    // Generate Access Token 
    const accessToken = jwt.sign(
      { email: newUser.email, id: newUser._id },
      SECRET_KEY,
      { expiresIn: "30d" } // valid for 30 days
    );

   
    return apiResponse.successResponseWithData(res, "User registered successfully", {
      email: newUser.email,
      accessToken,
    });
  } catch (err) {
    console.error("Error in register:", err);
    return apiResponse.ErrorResponse(res, "Server error");
  }
};

// Get Profile
user.getProfile = async (req, res) => {
  try {
    const { email } = req.query; 
    const user = await UserSchema.findOne({ email });
    if (!user) {
      return apiResponse.ErrorResponse(res, "User not found");
    }
    const profile = {
      firstname: user.firstname,
      lastname: user.lastname,
      title: user.title || 'Test Titile',
      image: user.image,
      skills: user.skills,
      roadmap: user.roadmap,
      email:user.email
    };
    return apiResponse.successResponseWithData(res, "Profile fetched successfully", profile);
  } catch (err) {
    console.error("Error fetching profile:", err);
    return apiResponse.ErrorResponse(res, "Server error");
  }
};

// Update Profile
user.updateProfile = async (req, res) => {
  try {
    const { email, title, image, skills, roadmap } = req.body;
    const user = await UserSchema.findOne({ email });
    if (!user) {
      return apiResponse.ErrorResponse(res, "User not found");
    }
    user.title = title || user.title;
    user.image = image || user.image;
    user.skills = skills || user.skills;
    user.roadmap = roadmap || user.roadmap;
    await user.save();
    return apiResponse.successResponse(res, "Profile updated successfully");
  } catch (err) {
    console.error("Error updating profile:", err);
    return apiResponse.ErrorResponse(res, "Server error");
  }
};

module.exports = user;
