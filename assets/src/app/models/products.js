const mongoose = require('mongoose');
const { Schema } = mongoose;

const Product = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  description: { type: String, default: '' },
  category: { type: String, default: 'other' },
  sizes: [
    {
      label: { type: String, required: true },
      stock: { type: Number, required: true, min: 0 }
    }
  ],
  color: { type: [String], default: [] },
  quantity: { type: Number, default: 0, min: 0 },
  image: { type: [String], default: [] },
  slug: { type: String, required: true, unique: true },
  details: {
    type: Object,
    default: {
      "Size Table": "",
      "Product Story": "",
      "Material": ""
    }
  },
  added: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', Product);
