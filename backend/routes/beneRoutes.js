const express = require('express');
const router = express.Router();
const beneController = require('../controllers/beneController')
const verifyJWT = require('../middleware/verifyJWT');

router.use(verifyJWT);

// Create a new donor
router.post('/', beneController.createNewBeneficiary);

// Get all the donors
router.get('/', beneController.getAllBeneficiaries);

module.exports = router;