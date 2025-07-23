const Product = require('../models/Product');

// GET: Fetch all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST: Add new product
const addProduct = async (req, res) => {
  const { name, image, price, category } = req.body;

  if (!name || !image || !price || !category) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const product = new Product({ name, image, price, category });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getProducts, addProduct };