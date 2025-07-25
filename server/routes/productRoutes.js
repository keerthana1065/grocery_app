const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/productController');

router.get('/', getProducts);
router.post('/', addProduct);

module.exports = router;