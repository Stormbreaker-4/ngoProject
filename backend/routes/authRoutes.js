const expres = require('express');
const router = expres.Router();
const authController = require('../controllers/authController')
const loginLimiter = require('../middleware/loginLimier');

router.route('/login')
    .post(loginLimiter, authController.login)

router.route('/register')
    .post(authController.register)

router.get('/profile', authController.getProfile)

module.exports = router;