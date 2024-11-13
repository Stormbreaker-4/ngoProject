const express = require('express');
const router = express.Router();
const branchController = require('../controllers/branchController')
const verifyJWT = require('../middleware/verifyJWT');

router.use(verifyJWT);

// Create a new branch
router.post('/', branchController.createNewBranch);

// Get all branches
router.get('/', branchController.getAllBranches);

module.exports = router;