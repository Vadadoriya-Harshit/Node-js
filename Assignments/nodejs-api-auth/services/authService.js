const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
require('dotenv').config();

exports.register = async (userData) => {
    const { name, email, password } = userData;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) throw new Error('User already exists');

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save user
    user = new User({ name, email, password: hashedPassword });
    await user.save();

    return { id: user._id, name: user.name, email: user.email };
};

exports.login = async (userData) => {
    const { email, password } = userData;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) throw new Error('Invalid email or password');

    // Validate password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new Error('Invalid email or password');

    // Generate JWT
    const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });

    return token;
};