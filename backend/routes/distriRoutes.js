const express = require('express');
const router = express.Router();
const distriController = require('../controllers/distriController')
const verifyJWT = require('../middleware/verifyJWT');

router.use(verifyJWT);

// Create a distribution
router.post('/', distriController.createNewDistribution);

// Get all distributions
router.get('/', distriController.getAllDistributions);

module.exports = router;