const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A Product must have a name'], // first argument determined whethere it's required, 2nd argument determine err message

    trim: true, // only works for String, remove white space in start and end
  },

  ratingsAverage: {
    type: Number,
    default: 4.5,
  },

  price: {
    type: Number,
    required: [true, 'A Product must have a price'],
  },
  priceDiscount: Number,
  
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'A Product must have a cover image'],
  },
  images: [String], //Array of string data type
  createdAt: {
    type: Date,
    default: Date.now(),
    // select:false      //excluded this field to be return during http req
  },
});

const Products = new mongoose.model('products', productSchema);

module.exports = Products;