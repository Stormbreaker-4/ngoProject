const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController')
const verifyJWT = require('../middleware/verifyJWT');

router.use(verifyJWT);

// Create a new item
router.post('/', itemController.createNewItem);

// Get all the items
router.get('/', itemController.getAllItems);

module.exports = router;