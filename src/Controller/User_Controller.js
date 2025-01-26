const { mongoose } = require('mongoose');
const UserSchema = require('../models/User');
const apiResponse = require('../middleware/api.responce.js/api.responce');

const user = {};

user.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await UserSchema.findOne({ username });

        if (!existingUser) {
            return apiResponse(res,'User not found')
        }

        const isPasswordCorrect = await existingUser.comparePassword(password);

        if (!isPasswordCorrect) {
            return apiResponse(res,'Invalid credentials')
        }

        return apiResponse(res,'Login successful')
    } catch (err) {
    return apiResponse(res,'Server error')
    }
};

user. = async (req, res) => {
    try {
        const { firstname, lastname, phonenumber, email, password } = req.body;
        const existingUser = await UserSchema.findOne({ email });

        if (existingUser) {
            return apiResponse.badRequestResponse(res,"User already exists")
        }

        const newUser = new UserSchema({
            firstname,
            lastname,
            phonenumber,
            email,
            password,
        });

        await newUser.hashPassword();
        await newUser.save();
        return apiResponse(res,"User registered successfully")
    } catch (err) {
        return apiResponse(res,"Server error")
    }
};

module.exports = user;
