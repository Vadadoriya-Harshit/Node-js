const User = require('../models/userModel');

exports.getAllUsers = async () => {
    return await User.find();
};

exports.createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};