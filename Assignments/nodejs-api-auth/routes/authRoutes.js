const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

// Example of a protected route
router.get('/protected', authMiddleware.authenticateToken, (req, res) => {
    res.status(200).json({ message: 'This is a protected route' });
});

module.exports = router;