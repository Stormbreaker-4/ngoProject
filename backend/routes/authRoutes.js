const expres = require('express');
const router = expres.Router();
const authController = require('../controllers/authController')
const loginLimiter = require('../middleware/loginLimier');

router.route('/login')
    .post(loginLimiter, authController.login)

router.route('/refesh')
    .get(authController.refresh)

router.route('/logout')
    .post(authController.logout)

module.exports = router;