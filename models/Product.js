const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  availableQuantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Product', ProductSchema);
