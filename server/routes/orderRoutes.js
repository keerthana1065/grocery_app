const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
  try {
    const { items, total } = req.body;

    const newOrder = new Order({ items, total });
    await newOrder.save();

    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error placing order', error });
  }
});

module.exports = router;