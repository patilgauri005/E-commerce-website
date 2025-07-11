const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  currentPrice: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  discount: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  inStock: { type: Boolean, default: true },
  features: [{ type: String }],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
// This code defines a Mongoose schema for a Product model in a MongoDB database.
// The schema includes fields for product details such as name, image, prices, etc.
// The Product model is then exported for use in other parts of the application, such as routes