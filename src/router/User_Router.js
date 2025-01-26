const express = require("express");
// const dsarouter = require("../DSA_Solved/Addtwo");
let jwt = require('jsonwebtoken')
const usercontroller = require('../Controller/User_Controller')
let routers = express.Router();

routers.get("/login", usercontroller.login);
routers.get("/register", usercontroller.register);

module.exports = routers