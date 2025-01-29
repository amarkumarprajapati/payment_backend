const express = require("express");
const usercontroller = require("../Controller/User_Controller");
const authjwt = require("../middleware/authjwt");

let routers = express.Router();

routers.post("/login", usercontroller.login);
routers.post("/register", usercontroller.register);


routers.get("/profile", usercontroller.getProfile);
routers.put("/profile", usercontroller.updateProfile);
module.exports = routers;
