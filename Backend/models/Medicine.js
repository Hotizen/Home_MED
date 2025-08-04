const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  stock: Number,
  imageUrl: String
});

module.exports = mongoose.model('Medicine', medicineSchema);
