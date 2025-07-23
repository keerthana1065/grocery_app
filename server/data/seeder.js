const mongoose = require('mongoose');
const dotenv = require('dotenv');
const products = require('./products');
const Product = require('../models/Product');
const connectDB = require('../config/db');

dotenv.config();


const seedData = async () => {
  try {
    await connectDB();
    await Product.deleteMany(); // clear old data
    await Product.insertMany(products);
    console.log('✅ Products Seeded!');
    process.exit();
  } catch (error) {
    console.error('❌ Seeding Failed:', error);
    process.exit(1);
  }
};

seedData();