const express = require("express");
const dsarouter = require("../DSA_Solved/Addtwo");
let routers = express.Router();

routers.get("/dsa", dsarouter.addtwonumber);

module.exports = routers