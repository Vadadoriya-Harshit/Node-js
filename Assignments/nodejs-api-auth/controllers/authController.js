const authService = require('../services/authService');

exports.register = async (req, res) => {
    try {
        const user = await authService.register(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const token = await authService.login(req.body);
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};