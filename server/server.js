const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/Product');
const products = require('./data/products');
const orderRoutes = require('./routes/orderRoutes');


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/orders', orderRoutes);

mongoose.connect('mongodb://localhost:27017/grocy_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));