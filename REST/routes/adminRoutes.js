const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post("/add-product", adminController.addProduct)

module.exports = router;